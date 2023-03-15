const {Router} = require('express');
const router = Router();
const controllerLocal = require('../src/controllers/businessLocal_controller');


//ENDPOINT HOME
router.get('/', (req, res)=>{res.send('<h1>Hola Mundo</h1>').status(200)});

//ENDPOINT LOCALS
router.get('/locales', controllerLocal.listBusinessLocal); // Search all locals
router.get('/locales/:id'); // Search locals for id

router.post('/locales', controllerLocal.saveBusinessLocal); // Save a local


module.exports = router;
