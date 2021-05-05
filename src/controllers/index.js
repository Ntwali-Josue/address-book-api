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
    const contact = new Customer({
        email: req.body.email,
        name: req.body.name,
        active: req.body.active
    });

    // Save Customer in the database
    Customer.create(contact, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Customer."
            });
        else res.send(data);
    });
};

// Retrieve all Contacts from the database.
exports.findAll = (req, res) => {
    Contact.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
};

// Find a single Contact with a contactId
exports.findOne = (req, res) => {
    Customer.findById(req.params.customerId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Customer with id ${req.params.customerId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Customer with id " + req.params.customerId
                });
            }
        } else res.send(data);
    });
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