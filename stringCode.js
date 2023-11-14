function checkCreds(){
    //input validation 
    console.log("checkCreds() started");
    document.getElementById("loginStatus").innerHTML = "Status of Login";
   //variables needed
    var firstName;
    var lastName;
    var zipCode;
    var fullName;
    var fullNameLength;
    var zipCodeNumb;
    //fill variables
    //input first name
    firstName = document.getElementById("fName").value;
    console.log("The first name was inputted as " + firstName);
    //input last name
    lastName = document.getElementById("lName").value;
    console.log("The last name was inputted as "+ lastName);
    //input zipcode
    zipCode = document.getElementById("zipCode").value;
    console.log("The zipCode was inputted as " + zipCode);

    fullName = firstName + " " + lastName;
    console.log("The full name was inputted as" + fullName);

    fullNameLength = fullName.length;
    console.log("The full name has " + fullNameLength + " characters.");

    zipCodeNumb = parseInt(zipCode);
    console.log("The zip code number is " + zipCodeNumb);

    //full name length less than 20 characters
    //zip code less than 5 digits
    if(fullNameLength > 20){
        document.getElementById("loginStatus").innerHTML = "Invalid full name";
     } else if(zipCode.length != 5){
        document.getElementById("loginStatus").innerHTML = "Invalid zipcode";
     } else {
        alert("User credientals passed, welcome to the site, " + fullName);
     }
}

function checkPalin(){
    console.log("checkPalin() started")
    //record the string into a variable
    var entStr;
    entStr = document.getElementById("palinInput").value;
    console.log("entStr is " + entStr);

    //take away spaces
    var entStrNoSpace;
    entStrNoSpace = entStr.split(" ").join(" ");
    console.log("entStr with no spaces is " + entStrNoSpace)
    
    //rev aray var and rev string
    var revStr;
    const revArray = [];
    var length = entStrNoSpace.length - 1;
    console.log("string length is " + length);

    //input into array and reverse
    for(var i = length; i >= 0; i--){
        revArray.push(entStrNoSpace[i]);
    }

    //convert to string from array
    revStr = revArray.join(" ");
    console.log("reversed is " + revStr);

    //compare rev to string and write status
    var equal = 0;
    equal = (entStrNoSpace === revStr);
    console.log("the ent and reverse being equal is: " + equal);
}

function playStation(){
    //write to log for debug
    console.log("playStation() started");  
    mySound = new sound("us-lab-background-1.mp3");
    console.log("playing us-lab-background-1 using the sound() function");
    mySound.play();
}

function sound(srcFile){
    //create instance of audio class
    this.sound = document.createElement("audio");
    //sets source for srcFile
    this.sound.src = srcFile;
    //loads everything needed for audio
    this.sound.setAttribute("preload", "audio");
   //only audio no controls 
    this.sound.setAttribute("controls", "none")
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }

}