const sql = require("./index.js");

// constructor
const Contact = function(contact) {
  this.firstName = contact.firstName;  
  this.lastName = contact.lastName;  
  this.email = contact.email;
  this.phone = contact.phone;
};

Contact.create = (newContact, result) => {
  sql.query("INSERT INTO contacts SET ?", newContact, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created contact: ", { id: res.insertId, ...newContact });
    result(null, { id: res.insertId, ...newContact });
  });
};

Contact.findById = (contactId, result) => {
  sql.query(`SELECT * FROM contacts WHERE id = ${contactId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found contact: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Contact with the id
    result({ kind: "not_found" }, null);
  });
};

Contact.getAll = result => {
  sql.query("SELECT * FROM contacts", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("contacts: ", res);
    result(null, res);
  });
};

Contact.updateById = (id, contact, result) => {
  sql.query(
    "UPDATE contacts SET email = ?, name = ?, active = ? WHERE id = ?",
    [contact.email, contact.name, contact.active, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;  
      }

      if (res.affectedRows == 0) {
        // not found Contact with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated contact: ", { id: id, ...contact });
      result(null, { id: id, ...contact });
    }
  );
};

Contact.remove = (id, result) => {
  sql.query("DELETE FROM contacts WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Contact with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted contact with id: ", id);
    result(null, res);
  });
};

Contact.removeAll = result => {
  sql.query("DELETE FROM contacts", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} contacts`);
    result(null, res);
  });
};

module.exports = Contact;