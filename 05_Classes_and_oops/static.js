class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const Pratham = new user("Pratham")
// console.log(Pratham.createId());

class Teacher extends user{
    constructor(username, email){
        super(username)
        this.email = email
    }
}  

const iphone = new Teacher("iphone", "apple@co")

console.log(iphone.createId());