const inputs = document.querySelectorAll('input'); 
inputs.forEach(input => {input.addEventListener('input', () => {
console.log(input.value)
if(input.value != ""){
input.nextElementSibling.classList.add('filled')
}
else{
input.nextElementSibling.classList.remove('filled');
}
}
)
} )




//matching passwords
//and password strength

const cpassword = document.querySelector('#cpass')
const hint = document.querySelector('.hint')

const password = document.querySelector('#pass'); 
password.addEventListener('input',() => {
    if(!isStrongPassword(password.value)){
        hint.classList.remove('correct')
        hint.classList.add('incorrect')
    }
    else{
        hint.classList.remove('incorrect')
        hint.classList.add('correct')
    }
})

const matchingMessage = document.querySelector('.match')

function validate(event){
    if((!isPasswordsMatch())||(!isStrongPassword(password.value))){
        event.preventDefault();        
        return false;
    }
}


cpassword.addEventListener('input', () => {
    if(!isPasswordsMatch()){
        matchingMessage.innerHTML = "Passwords do not match!"
        matchingMessage.classList.remove('correct')
    }
    else{
        matchingMessage.classList.add('correct')
        matchingMessage.innerHTML= "Passwords match!"
    }

})

function isPasswordsMatch(){
    if(password.value != cpassword.value){
        return false;
    }
    else{
        return true;
    }
}


function isStrongPassword(password){
    const isContainsUppercase = /^(?=.*[A-Z])/;
    const isContainsLowercase = /^(?=.*[a-z])/;
    const isContainsNumber = /^(?=.*[0-9])/;
    const isContainsSymbol =  /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/;

    if(isContainsLowercase.test(password) && isContainsNumber.test(password) && isContainsSymbol.test(password) && isContainsUppercase.test(password))
    {
    
        return true; 
    }
    return false;

}