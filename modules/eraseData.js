import printData from "./printData.js";

export default function erase(btn,element,tag,div){
    btn.forEach(e=>{
        e.addEventListener('click', e=>{
            e.preventDefault();
            const myObj = JSON.parse(localStorage.getItem("user"));
            myObj.splice(e.target.dataset.id - 1, 1);
            localStorage.setItem("user", JSON.stringify(myObj));
            printData(element,tag)
            if(myObj.length===0){
                element.replaceChild(tag, div);
            }
        })
    })
}