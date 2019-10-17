
userLibrary = new Map ();

class User {
constructor() {
    this.email = email;
    this.password = password;
    this.passwordConfirm = passwordConfirm;
    isVerified == false;
}

save() {

    userLibrary.set(this.email, email);
    return this;
}

signIn() {

if (userLibrary.get(this.email) == true) {
isVerified == true;
authenticate();
console.log('Welcome')

} else {
    console.log("Login Error. Please try again");
}

}

signOut() {}
changePassword(previous, next){}
authenticate(){


}
}

let user = new User("milesrandle", "bean", "bean");
user.save();
user.signIn();
user.signOut();
user.changePassword(bean, bean);
