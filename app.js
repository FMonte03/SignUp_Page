const inputs = document.querySelectorAll('input'); 
inputs.forEach(input => {input.addEventListener('input', () => {
console.log(input.value)
if(input.value != ""){
input.classList.add('filled')
}
else{
input.classList.remove('filled');
}
}
)
} )


