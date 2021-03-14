const router = require('express').Router();
const catatanControllers = require('../controllers/CatatanController');


router.post('/', catatanControllers.createCatatan);
router.get('/', catatanControllers.readCatatan);
router.get('/:id', catatanControllers.readDetailCatatan);
router.put('/:id', catatanControllers.updateCatatan);
router.delete('/:id', catatanControllers.deleteCatatan);
module.exports = router;