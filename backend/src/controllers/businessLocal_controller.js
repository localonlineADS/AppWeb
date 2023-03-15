const businessLocal = require('../models/Local');

//CRUD
//Create a Business Local with all information
function saveBusinessLocal(req, res){
    console.log('guardando');
    var object_local = new businessLocal(req.body);

    console.log(object_local);

    object_local.save((err,result)=>{
        res.status(200).send(result);
    });
}

function listBusinessLocal(req, res){
    if(!req.params.id){
        var result = businessLocal.find({}).sort("_type_local");
        result.exec(function(err, result){
            if(err){
                res
                .status(500)
                .send({message:"Error al momento de procesar en el Backend"});
            }else{
                if(!result){
                    res.status(404).send({
                        message:"Not Found"
                    })
                }else{
                    res.status(200).send({message: result});
                }
            }
        })
        
    }else{
        res.status(400).send({message:'Bad Request'});
    }
}




module.exports = {
    saveBusinessLocal,
    listBusinessLocal
};
