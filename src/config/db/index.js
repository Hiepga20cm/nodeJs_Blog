const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/blog');
        console.log('conect successfully');
    } catch (error) {
        console.log('conect fail');
    }
}
module.exports = { connect };