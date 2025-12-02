//https://cookiestore.spec.whatwg.org/
let doc = document.documentElement;

let text = document.getElementById("text");
let enter = document.getElementById("enter");
let msg = document.getElementById("msg");


let MSG = {
    tout: null,
    set: function(str){
        if(MSG.tout != null) clearTimeout(MSG.tout);
        msg.innerHTML = str;
        MSG.tout = setTimeout(function(){msg.innerHTML = ""; MSG.tout = null;}, 5000);
    }
};






text.value = await cookieStore.get('text');

async function setCook(){
    await cookieStore.set('text', text.value);

    MSG.set("Cookie Set!");
}


text.addEventListener('keyup', setCook);
enter.addEventListener('click', setCook);