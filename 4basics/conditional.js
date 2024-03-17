const isUserLoggedIn = true
const debitCard = true
const loggedInGoggle = false
const loggedInEmail = true

if(isUserLoggedIn && debitCard){
    console.log("Allow to by course");
}

if(loggedInEmail || loggedInGoggle){
    console.log("User Logged In");
}