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


