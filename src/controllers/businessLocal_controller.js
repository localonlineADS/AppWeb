const businessLocal = require('../models/Local');

//CRUD
//Create a Business Local with all information
async function saveBusinessLocal(req, res){
    //console.log('guardando');
    var object_local = new businessLocal(req.body);
    await businessLocal.exists({"_user_local": object_local._user_local}, async function(err, doc){
        if(err){
            res.status(404).send({message:"user Existing"});
            console.log(err);
        }else{
            if(!doc){
                object_local.save((err,result)=>{
                    res.status(200).send(result);
                });
            }else{
                res.status(404).send({message:"user Existing"});
            }
        }
    })

    //console.log(object_local);

    
}

function listBusinessLocal(req, res){
    if(!req.params.user){
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

async function searchByUserName(req, res){
    let user_name = req.params.user;

    let local = await businessLocal.find({"_user_local":user_name});
    //console.log(local);
    if(local){
        res.status(200).send({message:local});
    }else{
        res.status(404).send({message:"Not Found"});
    }
    //console.log(user_name);
}

async function updateBusinessLocal(req, res){
    let user_name = req.params.user;

    await businessLocal.exists({"_user_local": user_name}, async function(err, doc){
        if(err){
            console.log(err);
        }else{
            if(doc){
                let result = await businessLocal.updateOne({"_user_local": user_name});
                res.status(200).send({message:result});
            }else{
                res.status(404).send({message:"Not Found"});
            }
        }
    })

}
async function deleteBusinessLocal(req, res){
    let user_name = req.params.user;
    await businessLocal.exists({"_user_local": user_name}, async function(err, doc){
        if(err){
            console.log(err);
        }else{
            if(doc){
                let result = await businessLocal.deleteOne({"_user_local": user_name});
                res.status(200).send({message:result});
            }else{
                res.status(404).send({message:"Not Found"});
            }
        }
    })
}



module.exports = {
    saveBusinessLocal,
    listBusinessLocal,
    searchByUserName,
    updateBusinessLocal,
    deleteBusinessLocal
};
