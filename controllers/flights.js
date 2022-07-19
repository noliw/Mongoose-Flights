const Flight = require("../models/flight");

module.exports = {
  index,
  new: newFlight,
  create,
  // show,
};

function index(req, res) {
  Flight.find({}, function (err, flights) {
    res.render("flights/index", { flights });
  });
}

// function show(req, res) {
//   Flight.findById(req.params.id, function (err, flight) {
//     res.render("flights/show", { title: "Flight Detail", flight });
//   });
// }

function create(req, res) {
  var flight = new Flight(req.body);
  flight.save(function (err) {
    if (err) return res.redirect("/flights/new");
    res.redirect("/flights");
  });
}

function newFlight(req, res) {
  res.render("flights/new");
}
