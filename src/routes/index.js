module.exports = app => {
    const contacts = require("../controllers/index");
  
    // Create a new Contact
    app.post("/contacts", contacts.create);
  
    // Retrieve all Contacts
    app.get("/contacts", contacts.findAll);
  
    // Retrieve a single Contact with contactId
    app.get("/contact/:contactId", contacts.findOne);
  
    // Update a Contact with contactId
    app.put("/contact/:contactId", contacts.update);
  
    // Delete a Contact with contactId
    app.delete("/contact/:contactId", contacts.delete);
  
    // Create a new Contact
    app.delete("/contacts", contacts.deleteAll);
};