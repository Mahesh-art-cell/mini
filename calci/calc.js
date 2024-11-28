let p=document.querySelector("p")

function Validation(z){
    p.textContent +=z
}

function vanish(){
    p.textContent =""
}

function total(){
    p.textContent=eval(p.textContent)
}