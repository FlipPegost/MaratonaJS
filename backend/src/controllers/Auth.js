const express = require('express')
const bcrypt = require('bcrypt')

const { Account } = require('../models');
const { accountSignUp,accountSignIn } = require('../validators/account')
const { getMessage } = require('../helpers/validator')
const { generateJwt, generateRefreshJwt, getTokenFromHeaders, verifyRefreshJwt}  = require('../helpers/jwt');
const router = express.Router();

const saltRounds = 10;


router.post('/sign-in',accountSignIn, async(req,res) => {
   const {email,password} = req.body;
   const account = await Account.findOne({where: {email}});
    
   const  match = account ? bcrypt.compareSync(password,account.password) : null;
    if (!match) return res.jsonOK(getMessage('account.signin.invalid'))
      
    const token = generateJwt({id: account.id});
    const refreshToken = generateRefreshJwt({id:account.id,version: account.jwtVersion});
    
    return res.jsonOK(account,getMessage('account.signin.sucess'),{token,refreshToken})
});

router.post('/sign-up', accountSignUp , async (req,res) => {
   
    const { email, password } = req.body

    const account = await Account.findOne({where: {email}});
    if (account) return res.jsonOK(getMessage('account.signup.email_exists'));

    const hash_password = bcrypt.hashSync(password,saltRounds)
    const newAccount = await  Account.create({email: email,password: hash_password});
   
    const token = generateJwt({id: newAccount.id});
    const refreshToken = generateRefreshJwt({id:newAccount.id ,version: newAccount.jwtVersion});
   
   
    return res.jsonOK(newAccount,getMessage('account.signup.sucess'),{token, refreshToken});
});

router.post('/refresh', async(req,res) =>{

    const token = getTokenFromHeaders(req.headers)
    if(!token) return res.jsonUnauthorized(null,'Invalid token');
    
    try {
const decodedToken = verifyRefreshJwt(token)
const account = await Account.findByPk(decodedToken.id);
        if(!account)  res.jsonUnauthorized(null,'Invalid token');

        if(decodedToken.version != account.jwtVersion) res.jsonUnauthorized(null,'Invalid token');
   
   
        const metadata = {
        token: generateJwt({id: account.id}),
    };
        res.jsonOK(null,null,metadata);
}catch(error)
    {
        res.jsonUnauthorized(null,'Invalid token');
    }

})

module.exports = router;
