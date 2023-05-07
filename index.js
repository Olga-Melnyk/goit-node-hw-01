const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const contactsService = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contactsService.listContacts();
      console.log(allContacts);
      break;

    case "get":
      const oneContacts = await contactsService.getContactById(id);
      console.log(oneContacts);
      break;

    case "add":
      const newContact = await contactsService.addContact(name, email, phone);
      console.log(newContact);
      break;

    case "remove":
      const removeContact = await contactsService.removeContact(id);
      console.log(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

const arr = hideBin(process.argv);

const { argv } = yargs(arr);

invokeAction(argv);
