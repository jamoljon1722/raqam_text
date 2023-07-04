const inp1 = document.querySelector(".inp1");
const inp2 = document.querySelector(".inp2");
const inp3 = document.querySelector(".inp3");
const btn = document.querySelector(".btn");
const btn_copy = document.querySelector(".btn2");
const text = document.querySelector(".text");

btn.addEventListener("click", ()=>{
    let soz = inp1.value
    let son = inp2.value
    let raqam = inp3.value
    
    for (let i = 1; i <= son; i+=1) {
        for (let j = 1; j <= raqam; j+=1) {
            document.getElementById("textcha").innerHTML += soz
        }
        document.getElementById("textcha").innerHTML += ` ${ i } <br>`
    }
    
    // btn_copy.classList.add("open-btn")
})

// btn_copy.addEventListener("click", ()=> {
//     function copyText(htmlElement) {
//         if(!htmlElement) {
//             return;
//         }
        
//         let elementText = htmlElement.innerHTML;
        
//         let inputElement = document.createElement('input');
//         inputElement.setAttribute('value', elementText);
//         document.body.appendChild(inputElement);
//         inputElement.select();
//         document.execCommand('copy');
//         inputElement.parentNode.removeChild(inputElement);
        
//     }
//     copyText(document.querySelector(".text"))
    
//     alert("Nusxa Kochirildi :)")
// })