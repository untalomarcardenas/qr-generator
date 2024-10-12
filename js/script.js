const button = document.querySelector('.card__button');
const input = document.querySelector('.card__input');
const qrMsg = document.querySelector('.card__error');
const qrImg = document.querySelector('.card__img');


let f= 1, n = 14;
for(let i = 1;  i<=n ; i++){
    f= f*i;
    console.log(i+"--"+f);
}

input.addEventListener('focus', function(){
    input.value = ''
    qrImg.style.display = 'none';
    qrMsg.textContent = '';
});

button.addEventListener('click', generarQR);

function generarQR(){
    let qrText = document.querySelector('.card__input').value;

    console.log(qrText.length);
    if(qrText.length == 0){
        qrMsg.innerHTML = "Por favor ingrese el texto"
        
    }else{
        qrImg.style.display = 'block';
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=" + qrText;
    }
}