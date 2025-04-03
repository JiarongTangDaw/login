const cambio = document.getElementById('cambio');
const style = document.querySelector("link[rel='stylesheet']");
console.log(style);
cambio.addEventListener('click',function (){
    if(style.href.includes("style.css")){
        style.href="./styles/styleAlternative.css";
    }else{
        style.href = "./styles/style.css";
    }
    
})