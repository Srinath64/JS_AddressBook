console.log("******* Welcome To Address Book System *******");

class Contact{

    firstName
    lastName
    address
    state
    city
    zip
    email
    phoneNumber

    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2]
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7]
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }
    get address(){
        return this.address;
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
        this._firstName = firstName;
    }

    set lastName(lastName){
        this._lastName = lastName;
    }

    set address(address){
        this.address = address;
    }

    set city(city){
        this._city = city;
    }

    set state(state){
        this._state = state;
    }

    set zip(zip){
        this._zip = zip;
    }

    set phoneNumber(phoneNumber){
        this._phoneNumber = phoneNumber;
    }

    set email(email){
        this._email = email;
    }

    toString(){
        return "First Name : "+ this.firstName + ", Last Name : "+ this.lastName + ", Address : "+ this.address + ", City : "+ this.city + ", State : "+ this.state +", Zip : "+ this.zip+ ", Phone Number : "+ this.phoneNumber + ", Email : "+ this.email;
    }
}

let contact = new Contact("Srinath", "Siva", "Bargur", "Krishnagiri", "Tamilnadu", 635104, 9994982171, "sri@gmail.com")
console.log(contact.toString());

