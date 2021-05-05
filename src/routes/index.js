import { Router } from 'express';
import {createContact, updateContact, findAllContacts, findOneContact, deleteAllContacts, deleteContact} from "../controllers/index.js"

const router = Router()

// Create a new Contact
router.post("/contacts", createContact);

// Retrieve all Contacts
router.get("/contacts", findAllContacts);

// Retrieve a single Contact with contactId
router.get("/contact/:contactId", findOneContact);

// Update a Contact with contactId
router.patch("/contact/:contactId", updateContact);

// Delete a Contact with contactId
router.delete("/contact/:contactId", deleteContact);

// Create a new Contact
router.delete("/contacts", deleteAllContacts);

export default router;