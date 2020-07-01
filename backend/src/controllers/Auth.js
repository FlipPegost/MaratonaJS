const express = require('express')
const bcrypt = require('bcrypt')

const { Account } = require('../models');
const { response } = require('express');
const { accountSignUp } = require('../validators/account')
const { getMessage } = require('../helpers/validator')

const router = express.Router();

const saltRounds = 10;


router.post('/sign-in',(request,res) => {
    return res.jsonOK(null)
});

router.post('/sign-up', accountSignUp , async (req,res) => {
   
    const { email, password } = req.body

    const account = await Account.findOne({where: {email}});
    if (account) return res.jsonOK(getMessage('account.signup.email_exists'));

    const hash_password = bcrypt.hashSync(password,saltRounds)
    const newAccount = await  Account.create({email: email,password: hash_password});
    return res.jsonOK(newAccount,getMessage('account.signup.sucess'));
});

module.exports = router;
