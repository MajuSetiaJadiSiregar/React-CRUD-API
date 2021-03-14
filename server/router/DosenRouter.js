const router = require('express').Router();
const dosenControllers = require('../controllers/DosenControllers');


router.post('/', dosenControllers.createDosen);
router.get('/', dosenControllers.readDosen);
router.delete('/:id', dosenControllers.deleteDosen);
module.exports = router;