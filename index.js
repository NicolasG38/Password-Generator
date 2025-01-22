// JavaScript Document
const characters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

let lengthStr=document.getElementById("length")
let specialStr=document.getElementById("special")
let lowerStr=document.getElementById("lower")
let upperStr=document.getElementById("upper")
let numberStr=document.getElementById("number")
let btnPswd=document.getElementById("btn-generate")
let passwordEl=document.getElementById("password-el")
let toggleBtn=document.getElementById("toggle").checked

function GeneratePswrd(){
    passwordEl.textContent= ""
    let settings=getSetting()
    if (settings.length > 0 && (settings.lower || settings.upper || settings.number || settings.special)){
    for (let i=0; i<settings.length; i++){
        
    passwordEl.textContent+=randomNum(filterCharacters(characters, settings.lower, settings.upper, settings.number, settings.special))
    }
}
}

function randomNum(arr){
    
        return arr[Math.floor(Math.random()* arr.length)]
}

function getSetting(){
    let settings={
        length:lengthStr.valueAsNumber,
        special:specialStr.checked,
        lower:lowerStr.checked,
        upper:upperStr.checked,
        number:numberStr.checked
    }
    return settings
    }

    function filterCharacters(input, includeLowercase, includeUppercase = true, includeNumbers = true, includeSpecial = true) {
        const regexMap = {
            lowercase: includeLowercase ? /[a-z]/ : null,
            uppercase: includeUppercase ? /[A-Z]/ : null,
            numbers: includeNumbers ? /[0-9]/ : null,
            special: includeSpecial ? /[^a-zA-Z0-9]/ : null
        };
    
        return input.filter(char => Object.values(regexMap).some(regex => regex && regex.test(char))
        );
    }

    function toggleDayNightMode() {
        var body = document.body;
        body.classList.toggle("night-mode");
        body.classList.toggle("day-mode");

    }

function copyToClipboard() {
    var copyText = document.getElementById("password-el");
    var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Mot de passe copié dans le presse-papier !");
}