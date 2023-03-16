const { Router } = require('express');
const controllers = require('../controller/controller');

const router = Router()

router.get('/get', controllers.getController);
router.put('/put', controllers.putController);


module.exports = router;
