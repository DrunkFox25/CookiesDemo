//https://cookiestore.spec.whatwg.org/
let doc = document.documentElement;
let text = document.getElementById("text");
let msg = document.getElementById("msg");








text.value = cookieStore.get('text');

text.addEventListener('keyup', event => function(){
    if(event.key === "Enter"){
        msg.innerHTML = "Cookie Set!";
        setTimeout(function(){msg.innerHTML = "";}, 5000);
        cookieStore.set('text', text.value);
    }
});