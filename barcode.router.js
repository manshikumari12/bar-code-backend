
const express = require('express');
const barrouter = express.Router();
const { Barcode } = require('./barcode.model');
const bwipjs = require('bwip-js');



barrouter.post('/', async (req, res) => {
  const { data } = req.body;

  
  const pngBuffer = await bwipjs.toBuffer({
    bcid: 'code128',      
    text: data,            
    scale: 3,               
    height: 10,            
    includetext: true,      
  });


  const barcode = new Barcode(data);


  res.status(200).json({
    barcode: {
      id: barcode.id,
      data: barcode.data,
      image: pngBuffer.toString('base64'),
    },
  });
});

module.exports = { barrouter };
