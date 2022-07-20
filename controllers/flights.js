const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

module.exports = {
  index,
  new: newFlight,
  create,
  show,
  delete: deleteFlight,
};

function index(req, res) {
  Flight.find({}, function (err, flights) {
    res.render("flights/index", { title: "all flights", flights });
  });
}

function newFlight(req, res) {
  let newFlight = new Flight();
  let dt = newFlight.departs;
  let departDt = dt.toISOString().slice(0, 16);
  res.render("flights/new", { departDt, title: "Add a Flight" });
}

function create(req, res) {
  const flight = new Flight(req.body);
  flight.save(function (err) {
    if (err) return res.redirect("/flights/new");
    console.log(flight);
    res.redirect("/flights");
  });
}

function show(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    console.log(flight);
    Ticket.find({ flight: flight._id }, function (err, tickets) {
      res.render("flights/show", { tickets, title: "Flight Detail", flight });
    });
  });
}

function deleteFlight(req, res) {
  Flight.findByIdAndDelete(req.params.id, function (err, flight) {
    if (err) return res.redirect("/flights");
    console.log(flight);
    res.redirect("/flights");
  });
}
