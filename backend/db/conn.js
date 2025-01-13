const mongoose = require('mongoose')

async function main() {

    try {

        mongoose.set('strictQuery', true)

        await mongoose.connect('mongodb+srv://bernardospinelli:jpJfSPhSSnsTCLqw@cluster0.epm2f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

        console.log('Conectado ao MongoDB!')
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

module.exports = main