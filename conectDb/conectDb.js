const mongodb = require('mongoose');

mongodb.set('strictQuery', false);
mongodb.connect(
    'mongodb+srv://localonline-admin:L0c4l0nl1n3@cluster0.slioaw7.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        //useCreateIndex: true,
        useUnifiedTopology: true,
        //useFindAndModify: false,
    },
    (err, res) => {
        if(err){
            throw(err);
        }else{
            console.log('conexion Establecida con la base de Datos');
        }
    }
);

module.exports = mongodb;
