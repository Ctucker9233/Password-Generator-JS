function generate(){
    var randomCharString = "";
    var specChar = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    var numChar = "0123456789";
    var lowerChar = "abcdefghijklmnopqrstuvwxyz";
    var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //prompt user to pick a password length between 8 and 128 characters
    var passwordLength = prompt("Please select a password length between 8 and 128 characters.");
    var passwordString = "";

    //check if password is long enough
    if(passwordLength > 8 && passwordLength < 128){
        //ask user if they want to use special characters
        var useSpecChar = (prompt("Do you want to use special characters?")).toLowerCase();
        //add special characters to the string if user selects
        if (useSpecChar === "yes" || useSpecChar === "y"){
            randomCharString = randomCharString + specChar;
            console.log(randomCharString);
        }

        //ask user if they want to use numerical characters
        var useNumChar = (prompt("Do you want to use number characters?")).toLowerCase();
        //add number characters to the string if user selects
        if (useNumChar === "yes" || useNumChar === "y"){
            randomCharString = randomCharString + numChar;
            console.log(randomCharString);
        }

        //ask user if they want to use lowercase letters
        var useLowerChar = (prompt("Do you want to use lowercase characters?")).toLowerCase();
        //add lowercase characters to the string if user selects
        if (useLowerChar === "yes" || useLowerChar === "y"){
            randomCharString = randomCharString + lowerChar;
            console.log(randomCharString);
        }

        //ask user if they want to use uppercase letters
        var useUpperCase = (prompt("Do you want to use uppercase characters?")).toLowerCase();
        //add uppercase characters to the string if users selects
        if (useUpperCase === "yes" || useUpperCase === "y"){
            randomCharString = randomCharString + upperChar;
            console.log(randomCharString);
        }  
    }
    else{
        alert("Your password does not meet the requirements. Please refresh and try again.");
    }

    //generate random password based on characters the user wants to use 
    if(randomCharString !== ""){
        for (i=1; i<=passwordLength; i++){
            passwordString = passwordString + randomCharString.charAt(Math.floor(Math.random() * Math.floor((randomCharString.length) - 1)));
        }

        document.getElementById("password").value = passwordString;
    }
    else{
        alert("You must use at least one kind of character. Please refresh and try again.");
    }
}  

function copy(){
    var copyText = document.querySelector("#password");
    copyText.select();
    document.execCommand("copy");
    alert("Your password has been copied to the clipboard.");   
}
