let display =document.getElementById('display');
let buttons =document.getElementsByClassName('button');

[...buttons].forEach(button =>{
    button.addEventListener('click',(e)=>{
        switch(e.target.innerText){
            case 'Clear':
                display.innerText='';
            break;

            case 'Back':
                display.innerText=display.innerText.slice(0,-1);
            break;

            case '=':
                display.innerText=eval(display.innerText);
            break;

            default:
                display.innerText +=(e.target.innerText)
            break;
        }
    })
})