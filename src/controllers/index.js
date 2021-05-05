const Contact = require("../models/contacts.js");
import Contact from "../database/models/contacts"

// Create and Save a new Contact
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Customer
    const customer = new Customer({
      email: req.body.email,
      name: req.body.name,
      active: req.body.active
    });
  
    // Save Customer in the database
    Customer.create(customer, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Customer."
        });
      else res.send(data);
    });
};

// Retrieve all Contacts from the database.
exports.findAll = (req, res) => {
  
};

// Find a single Contact with a contactId
exports.findOne = (req, res) => {
  
};

// Update a Contact identified by the contactId in the request
exports.update = (req, res) => {
  
};

// Delete a Contact with the specified contactId in the request
exports.delete = (req, res) => {
  
};

// Delete all Contacts from the database.
exports.deleteAll = (req, res) => {
  
};