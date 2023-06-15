const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: String,
    id_Number: Number,
})

const user = mongoose.model('user', userSchema);
module.exports = user;