const mongoose = require('mongoose');



const connectDB = mongoose.connect("mongodb+srv://manshisbp:manshi@cluster0.vdbpezu.mongodb.net/Barcode?retryWrites=true&w=majority")


module.exports = {connectDB};
