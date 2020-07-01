const express = require('express');
const { Link } = require('../models')
const router = express.Router();

router.get('/', async (req,res) =>{
    const accountId = 1;
    
    const links = await  Link.findAll({where: {accountId}});
    if(!links) return res.jsonNotFound();
    
    
    res.jsonOK(links)
})
router.get('/:id', async (req,res) =>{
    const accountId = 1;
    const {id} = req.params;
    const link = await  Link.findOne({where: {id,accountId}});
    if(!link) return res.jsonNotFound();
    
    
    res.jsonOK(link)
})

router.post('/', async (req,res) =>{
    const accountId = 1 // req.id
    const {label, url, isSocial} = req.body;


    const image = 'http://google.com/image.jpg';
    
    const link = await Link.create({label, url, isSocial,image,accountId});
    return res.jsonOK(link);

})
router.put('/:id', async (req,res) =>{
    const accountId = 1 // req.id
    const {id} = req.params; 
    const {body} = req;
    const fields = ['label','url','image'];
    
    const link = await  Link.findOne({where: {id,accountId}});

    if (!link ) return res.jsonNotFound();
    
    
    if(!typeof fields == 'undefined') return res.jsonNotFound(); 
    fields.map( (fieldName) => {
        const newValue = body[fieldName];
        if (newValue) link[fieldName] = newValue;

    });

    await link.save();
    
    return res.jsonOK(link);

})
router.delete('/:id', async (req,res) =>{
    const accountId = 1 // req.id
    const {id} = req.params; 
    const link = await  Link.findOne({where: {id,accountId}})

    if (!link ) return res.jsonNotFound();

    await link.destroy();
    return res.jsonNoContent();

})

module.exports = router;