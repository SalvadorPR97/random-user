export class Person {
    #firstName;
    #lastName;
    email;
    phone;
    picture;
    city;
    constructor(firstName,lastName) {
        this.#firstName = firstName;
        this.#lastName = lastName;
    }
    get firstName(){
        return this.#firstName;
    }
    set firstName(firstName){
        this.#firstName = firstName;
    }
    get lastName(){
        return this.#lastName;
    }
    set lastName(lastName){
        this.#lastName = lastName;
    }
    get email(){
        return this.email;
    }
    set email(email){
        this.email = email;
    }
    get phone(){
        return this.phone;
    }
    set phone(phone){
        this.phone = phone;
    }
    get picture(){
        return this.picture;
    }
    set picture(picture){
        this.picture = picture;
    }
    get city(){
        return this.city;
    }
    set city(city){
        this.city = city;
    }
    
}