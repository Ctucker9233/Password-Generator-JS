for(i=0; i<3; i++){
    //prompt user to pick a password length between 8 and 128 characters
    passwordLength = prompt("Please select a password length between 8 and 128 characters.");

    //check if password is long enough
    if(passwordLength < 8 || passwordLength > 128){
        alert("Your password does not meet the requirements. Please try again. You have " + (10-i) + " tries left.")
    }
    else{
       //ask user if they want to use special characters

        //ask user if they want to use numerical characters

        //ask user if they want to use lowercase letters

        //ask user if they want to use uppercase letters

        //generate random password based on characters the user wants to use 
    }
}


