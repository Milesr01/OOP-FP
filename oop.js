const userList = new Map();

class User{
    constructor(email, password, passwordConfirmation) {
        this.email = email;
        this.password = password;
        this.passwordConfirmation = passwordConfirmation;
        this.signedIn = false;
    };

    getEmail(){
        return this.email;
    };

    getPassword(){
        return this.password;
    };

    getSignedIn(){
        return this.signedIn;
    };

    setEmail(newEmail){
        this.email = newEmail;
    };

    setPassword(newPassword){
        this.password = newPassword;
    };

    setSignedIn(state){
        this.signedIn = state;
    };

    save(){
        userList.set(this.email, this);
        return this;
    };

    

    changePassword(previous, next){
        if (previous === userList.get(this.email).getPassword()){
            console.log("Password change successful!");
            this.password = next;
            this.passwordConfirmation = next;
            this.save();      
        
        
        }
        return this;
    }
    authenticate(){
        if (typeof userList.get(this.email) === "undefined"){
            console.log("No account assiciated with email");
        }
        else if (userList.get(this.email).getPassword() === this.password){
            console.log("Password accepted");
            this.signedIn = true;
        }
        else {
            console.log("Invalid password");
        }
        return this;
    }
    signUp(){
        if (typeof userList.get(this.email) === "undefined"){
            console.log("New User Created");
            this.save();
        }
        else {
            console.log("Email already in use");
        }
        return this;
    };

    signIn(){
        this.authenticate();
        if (this.signedIn){
            console.log("You are now signed in!");     
        }
        
        return this;
    };

    

    signOut(){
        this.deauthenticate();
        if (! this.signedIn) {
            console.log("You are now signed out");
        }
        
        return this;   
    };
}



user = new User("uname","123","123");
user.signOut();
user.signIn();

user.signUp().signIn().changePassword('123','456').signOut();


user.signUp();
