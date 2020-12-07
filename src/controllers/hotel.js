const Hotel = require('../database/models').Hotel;

// Create and save a new hotel
exports.createHotel = (req, res) => {
    // Validate request
  if (!req.body.hotel_name) {
    res.status(400).send({
      message: "Hotel name can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const hotel = {
    hotel_name: req.body.hotel_name,
    geolocation: req.body.geolocation,
    manager_names: req.body.manager_names,
    province: req.body.province
  };

  // Save Hotel in the database
  Hotel.create(hotel)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Hotel."
      });
    });

};

exports.findAllHotel = (req, res) => {
    
    Hotel.findAll()
         .then((hotel) => res.status(200).send(hotel))
         .catch((error) => { res.status(400).send(error); });
};

exports.getHotelById = (req, res) => {
    Hotel.findByPk(req.params.id)
         .then((hotel) => {
             if (!hotel) {
                 return res.status(404).send({
                     message: 'Hotel Not Found',
                 });
             }
             return res.status(200).send(hotel);
         })
         .catch((error) => res.status(400).send(error));
};

exports.updateHotel = (req, res) => {
     Hotel.findByPk(req.params.id)
          .then(hotel => {
              if(!hotel) {
                  return res.status(400).send({
                      message: 'Hotel Not Found',
                  });
              }
              return hotel.update({
                hotel_name: req.body.hotel_name,
                geolocation: req.body.geolocation,
                manager_names: req.body.manager_names,
                province: req.body.province
              })
              .then(() => res.status(200).send(hotel))
              .catch((error) => res.status(400).send(error));

          })
          .catch((error) => res.status(400).send(error));
};

exports.deleteHotel = (req, res) => {
     Hotel.findByPk(req.params.id)
          .then(hotel => {
              if (!hotel) {
                  return res.status(400).send({
                      message: 'Hotel Not Found',
                  });
              }
              hotel.destroy()
                   .then(() => res.status(200).send( {message: 'Hotel Deleted'} ))
                   .catch((error) => res.status(400).send(error));
          })
          .catch((error) => res.status(400).send(error));
}

//module.exports = { createHotel };