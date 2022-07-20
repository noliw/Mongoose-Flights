const Ticket = require("../models/ticket");
const Flight = require("../models/flight");

module.exports = {
  // index,
  new: newTicket,
  create,
};

// function index(req, res) {
//     Ticket.find({}, function (err, flights) {
//         res.render('ticket/index', { title: 'all tickets', tickets });
//     });
// };

function newTicket(req, res) {
  res.render("tickets/new", { ticketId: req.params.id, title: "Add a ticket" });
}

function create(req, res) {
  flightId = req.params.id;
  req.body.flight = flightId;
  let seat = req.body.seat;
  let price = req.body.price;
  let flight = req.params.id;
  let ticket = new Ticket({ seat, price, flight });
  Ticket.create(req.body, function (err, ticket) {
    res.redirect(`/flights/${flightId}`);
  });
}
