const PORT = 3200 ;

const app = require('./app');

app.listen(PORT,()=>{
    console.log(`Server Running in the Port ${PORT}`);
});