const express = require('express')
const authController = require('./controllers/Auth')
const app = express();
const db = require('./models')
const response = require('./middlewares/response')

app.use(response);
app.use(express.json());
app.use(express.urlencoded({ extended: false}));


db.sequelize.sync().then( () =>{ 
    app.listen(3333,() =>{
        console.log('Listening on port 3333...')
    })
});
app.use('/auth',authController);

app.get('/',(req,res) => {
                return res.json('api running..a.')
                
            })