
function calculate(){
    const nameValue = document.querySelector('.name');
    const crash = document.querySelector('.crashName');
    const num = Math.floor(Math.random() * 101);
    if(nameValue.value.toString() != '' && crash.value.toString() != ''){
        console.log(num);
        document.querySelector('.percent').innerHTML = `${num}%`;
    } else {
        alert('Name or crash Name is empty!');
    }
}