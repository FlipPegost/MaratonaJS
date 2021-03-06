const express = require('express')
const cors = require('cors')
const db = require('./models')
const response = require('./middlewares/response')
const checkJwt = require('./middlewares/jwt')

const authController = require('./controllers/auth')
const linkController = require('./controllers/link')

const app = express();

app.use(cors());
app.use(response);
app.use(checkJwt)

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use('/links',linkController);
app.use('/auth',authController);

db.sequelize.sync().then( () =>{ 
    app.listen(3333,() =>{
        console.log('Listening on port 3333...')
    })
});
