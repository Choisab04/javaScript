function setUserName(username){
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    this.email = email
    this.password = password

    setUserName.call(this, username)
}

const chai = new createUser("pratham", "pc@gmail.com", "1234")

console.log(chai);