const user = {
    _email: 'pc@google.in',
    _password: 'abc',


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        _this.email = value
    }
}

const chai = Object.create(user) 

console.log(chai.email);