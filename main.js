//https://cookiestore.spec.whatwg.org/
let doc = document.documentElement;

let text = document.getElementById("text");
let enter = document.getElementById("enter");
let msg = document.getElementById("msg");








text.value = cookieStore.get('text');

function setCook(){
    msg.innerHTML = "Cookie Set!";
    setTimeout(function(){msg.innerHTML = "";}, 5000);
    cookieStore.set('text', text.value);
}


text.addEventListener('keyup', event => function(){
    if(event.key == "Enter") setCook();
});

GamepadButton.addEventListener('click', setCook);