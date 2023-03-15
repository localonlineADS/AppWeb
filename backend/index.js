const PORT = 3200 ;
const app = require('./app');
const mongoose = require('./conectDb/conectDb');
app.listen(PORT,()=>{
    console.log(`Server Running in the Port ${PORT}`);
});