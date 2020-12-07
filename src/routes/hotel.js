const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotel');

router.post('/', hotelController.createHotel);
router.get('/', hotelController.findAllHotel);
router.get('/:id', hotelController.getHotelById);
router.put('/:id', hotelController.updateHotel);
router.delete('/:id', hotelController.deleteHotel);

module.exports = router;
