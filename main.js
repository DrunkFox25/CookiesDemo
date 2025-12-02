//https://cookiestore.spec.whatwg.org/
let doc = document.documentElement;


let text = document.getElementById("text").innerHTML;


let msg = document.getElementById("msg");
let MSG = {
    tout: null,
    set: function(str){
        if(MSG.tout != null) clearTimeout(MSG.tout);
        msg.innerHTML = str;
        MSG.tout = setTimeout(function(){msg.innerHTML = ""; MSG.tout = null;}, 5000);
    }
};







function setCook(str){
    MSG.set("Cookie Set!");

    if(str.length > 0) text = str;

    cookieStore.set('text', text);
}


text = cookieStore.get('text');