const {Router} = require('express');
const router = Router();
const controllerLocal = require('../src/controllers/businessLocal_controller');


//ENDPOINT HOME
router.get('/', (req, res)=>{res.send('<h1>Hola Mundo</h1>').status(200)});

//ENDPOINT LOCALS
router.get('/locales', controllerLocal.listBusinessLocal); // Search all locals
router.get('/locales/:user', controllerLocal.searchByUserName); // Search locals for id

router.post('/locales', controllerLocal.saveBusinessLocal); // Save a local

router.put('/locales/:user', controllerLocal.updateBusinessLocal);

router.delete('/locales/:user', controllerLocal.deleteBusinessLocal);


module.exports = router;
