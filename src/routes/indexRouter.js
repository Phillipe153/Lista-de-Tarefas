const { Router } = require('express');
const controllers = require('../controller/controller');

const router = Router()

router.get('/getAll', controllers.getAllController);
router.get('/getOne', controllers.getOneController);
router.put('/put', controllers.putController);
router.delete('/delete', controllers.deleteController);


module.exports = router;
