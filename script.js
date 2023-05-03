console.log('Hello!');
const palavras = ["PESSOAS", "AMIGOS", "VOCÊ", "FAMÍLIAS"];
let SELECT = 0;
setInterval(function () {
    
    if (SELECT <= 0 || SELECT < 3)
    {
        SELECT += 1;
    }else if (SELECT == 3)
    {
        SELECT = 0;
    }
   console.log(SELECT);
    document.getElementById("textChanger").innerHTML = palavras[SELECT];
}, 1000);


