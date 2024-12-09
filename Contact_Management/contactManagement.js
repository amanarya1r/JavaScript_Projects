const prompt = require("prompt-sync")();

function printInfo(){
    console.log("Contact Management System for 😶‍🌫️");
    console.log("-------------------------------------\n1. Add a Contact\n2. Delete a Contact\n3. View Contacts\n4. Search Contacts\n5. Exit\n-------------------------------------");
}

function addContact(){
    let name = prompt("Name: ");
    let email = prompt("Email: ");
    const contact = {
        Name: name,
        Email: email
    }
    contacts.push(contact);
    console.log("Added!");
}

function deleteContact(){
    for (let i = 0; i < contacts.length; i++){
        const contact = contacts[i];
        console.log((i+1).toString() + ":", contact.Name);  //conversion to string is required so that ':' can be added to it
    }
    const number = parseInt(prompt("Enter an ID: "));
    if (isNaN(number) || number > contacts.length || number === 0){
        console.log("Invalid ID");
        return;
    }
    contacts.splice(number -1, 1);
    console.log("Removed!");
}

function searchContact(){
    const searchString = prompt("Search: ").toLowerCase();
    const results = [];
    
    for (let contact of contacts){
        if (contact.Name.toLowerCase().includes(searchString)){
            results.push(contact);
        }
    }
    listContact(results);
}

function listContact(contacts){
    for (let contact of contacts){
        //instead of using index in for loop we are using item(that is we are using structure itself and get all the elements) to iterate(repeat)
        console.log("###########################");
        console.log('Name: ', contact.Name);
        console.log('Email: ', contact.Email);
    }
}

printInfo();

const contacts = [];
let loopRun = true;
while (loopRun){
    console.log();
    let number = prompt("Enter an operation (1-5): ");
    console.log();
    switch (number){
        case "1":
            addContact();
            break;
        case "2":
            deleteContact();
            break;
        case "3":
            listContact(contacts);
            break;
        case "4":
            searchContact();
            break;
        case "5":
            loopRun = false;
            break;
        default:
            console.log("Invalid input!"); 
    }
}