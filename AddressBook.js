console.log("******* Welcome To Address Book System *******");

class Contact{

    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get address(){
        return this._address;
    }

    get city(){
        return this._city;
    }

    get state(){
        return this._state;
    }

    get zip(){
        return this._zip;
    }

    get phoneNumber(){
        return this._phoneNumber;
    }

    get email(){
        return this._email;
    }

    set firstName(firstName){
        let firstNameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (firstNameRegex.test(firstName))
            this._firstName = firstName;
        else
            throw "**** FIRST NAME is Incorrect ****";
    }

    set lastName(lastName){
        let lastNameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (lastNameRegex.test(lastName))
            this._lastName = lastName;
        else
            throw "**** LAST NAME is Incorrect ****";
    }

    set address(address){
        let addressRegex = RegExp('^[a-zA-Z0-9#,]{4,}$');
        if (addressRegex.test(address))
            this._address = address;
        else
            throw "**** ADDRESS is Incorrect ****";
    }

    set city(city){
        let cityStateRegex = RegExp('^[a-zA-z]{4,}$');
        if (cityStateRegex.test(city))
            this._city = city;
        else
            throw "**** CITY is Incorrect ****";
    }

    set state(state){
        let cityStateRegex = RegExp('^[a-zA-z]{4,}$');
        if (cityStateRegex.test(state))
            this._state = state;
        else
            throw "**** STATE is Incorrect ****";
    }

    set zip(zip){
        let zipRegex = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");
        if (zipRegex.test(zip))
            this._zip = zip;
        else
            throw "**** ZIP is Incorrect ****";
    }

    set phoneNumber(phoneNumber){
        let phoneNumberRegex = RegExp("^[0-9]{2}\\s{1}[0-9]{10}$");
        if (phoneNumberRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else
            throw "**** PHONE NUMBER is Incorrect ****";
    }

    set email(email){
        let emailRegex = RegExp("^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$");
        if (emailRegex.test(email))
            this._email = email;
        else
            throw "**** EMAIL ADDRESS is Incorrect ****";
    }

    toString(){
        return "First Name : "+ this.firstName + ", Last Name : "+ this.lastName + ", Address : " + this.address + ", City : "+ this.city + ", State : "+ this.state +", Zip : "+ this.zip+ ", Phone Number : "+ this.phoneNumber + ", Email : "+ this.email;
    }
}

let addressBookArray = new Array();
let contactsCityMap = new Map();
let contactsStateMap = new Map();

function contactExists(firstName, lastName) {
    return addressBookArray.some(contact => contact.firstName == firstName && contact.lastName == lastName);
}

function editContact(firstName, lastName, property, newValue) {
    if (contactExists(firstName, lastName)) {
        switch (property) {
            case "address":
                addressBookArray.find((contact) => contact.firstName == firstName).address = newValue;
                break;
            case "city":
                addressBookArray.find((contact) => contact.firstName == firstName).city = newValue;
                break;
            case "state":
                addressBookArray.find((contact) => contact.firstName == firstName).state = newValue;
                break;
            case "zip":
                addressBookArray.find((contact) => contact.firstName == firstName).zip = newValue;
                break;
            case "phoneNumber":
                addressBookArray.find((contact) => contact.firstName == firstName).phoneNumber = newValue;
                break;
            case "email":
                addressBookArray.find((contact) => contact.firstName == firstName).email = newValue;
                break;
            default:
                console.log("Enter valid property");
        }
    }
    else {
        console.log("Contact Does Not Exist");
    }
}

function deleteContact(firstName, lastName){
    if(contactExists(firstName, lastName)){
        addressBookArray = addressBookArray.filter((contact) => contact.firstName != firstName && contact.lastName != lastName);
    }else{
        console.log("Contact Does Not Exist");
    }
}

function getCountOfContacts(count) {
    count += 1;
    return count;
}
function addContact(contact) {
    if (!contactExists(contact.firstName, contact.lastName))
        addressBookArray.push(contact);
    else
        throw "Contact is Present in the Address Book";
}

function searchContactByCity(city) {
    return addressBookArray.filter((contact) => contact.city == city);
}

function searchContactByState(state) {
    return addressBookArray.filter((contact) => contact.state == state);
}

function viewContactsByCity(city){
    return addressBookArray.filter((contact) => contact.city == city);
}

function viewContactsByState(state){
    return addressBookArray.filter((contact) => contact.state == state);
}

function getCountOfContactsByCity(city){
    return addressBookArray.filter((contact) => contact.city == city).length;
}

function getCountOfContactsByState(state){
    return addressBookArray.filter((contact) => contact.state == state).length;
}

function sortAddressBookByName(){
    addressBookArray.sort((firstPerson, secondPerson) => (firstPerson.firstName).localeCompare(secondPerson.firstName));
    console.log(addressBookArray);
}

function sortAddressBookByCity(){
    addressBookArray.sort((firstPerson, secondPerson) => (firstPerson.city).localeCompare(secondPerson.city));
    console.log(addressBookArray);
}

function sortAddressBookByState(){
    addressBookArray.sort((firstPerson, secondPerson) => (firstPerson.state).localeCompare(secondPerson.state));
    console.log(addressBookArray);
}

function sortAddressBookByZip(){
    addressBookArray.sort((firstPerson, secondPerson) => (firstPerson.zip).localeCompare(secondPerson.zip));
    console.log(addressBookArray);
}

let firstContact = new Contact("Srinath", "Siva", "Bargur", "Krishnagiri", "Tamilnadu", "635 104", "91 9994982171", "sri@gmail.com");
let secondContact = new Contact("Richard", "Martin", "Medavakkam", "Chennai", "Tamilnadu", "603 203", "91 9944223871", "rich@gmail.com");

try {
    addressBookArray.push(firstContact);
    addressBookArray.push(secondContact);
} catch (e) {
    console.error(e);
}
console.log(addressBookArray);

console.log("\nAfter Editing Contact")
editContact("Srinath","Siva","address","Maldives");
console.log(addressBookArray);

console.log("\nCount of Contacts : " + addressBookArray.reduce(getCountOfContacts, 0));

console.log("\nAfter Deleting Contact");
deleteContact("Richard","Martin")
console.log(addressBookArray);

console.log("\nCount of Contacts : " + addressBookArray.reduce(getCountOfContacts, 0));

console.log("\nAdding Duplicate Contact");
try {
    addContact(secondContact);
    addContact(firstContact);
} catch (e) {
    console.error(e);
}
console.log(addressBookArray);

console.log("\nSearch Contact By City");
console.log(searchContactByCity("Chennai"));

console.log("\nSearch Contact By State");
console.log(searchContactByState("Tamilnadu"));

console.log("\nView Contacts By City : Krishnagiri \n" );
console.log(viewContactsByCity("Krishnagiri"));

console.log("\nView Contacts By State : Tamilnadu \n" );
console.log(viewContactsByState("Tamilnadu"));

console.log("\nNumber of Contacts residing in City : Krishnagiri = " + getCountOfContactsByCity("Krishnagiri"));
console.log("\nNumber of Contacts residing in State : Tamilnadu = " + getCountOfContactsByState("Tamilnadu"));

console.log("\nContacts In Alphabetical Order");
sortAddressBookByName();

console.log("\nContacts Sorted Using City");
sortAddressBookByCity();

console.log("\nContacts Sorted Using State");
sortAddressBookByState();

console.log("\nContacts Sorted Using Zip");
sortAddressBookByZip();