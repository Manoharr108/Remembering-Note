let title = document.getElementById("floatingInputGroup1")
let note = document.getElementById("floatingTextarea2")
let submit = document.getElementById("sub_btn")
let clear = document.getElementById("clear_btn")
let wash_out = document.getElementById("pakka_clear")
let sib = document.getElementsByClassName("cards")[0]
let count = 0;

let title_val
let note_val

function createNote(){
    if((title.value != "") && (note.value != "")){
        title_val = title.value
        note_val = note.value
        localStorage.setItem(title_val, note_val)
        let div = document.createElement("div")
        document.getElementsByClassName("cards")[0].appendChild(div)
        let node0 = document.createElement("h2")
        node0.setAttribute("style","text-transform :capitalize;")
        let node1 = document.createElement("h3")
        node1.setAttribute("style","text-transform :capitalize;")
        node0.innerHTML = title_val
        node1.innerHTML = note_val
        
        div.insertAdjacentElement("afterbegin",node0)
        div.insertAdjacentElement("beforeend",node1)
        document.getElementById("floatingInputGroup1").value = ""
        document.getElementById("floatingTextarea2").value = ""
        
        if(count == 0){
        let div_c = document.createElement("div")
        div_c.setAttribute("class", "cards");
        document.getElementsByClassName("special_container")[0].append(div_c)
    }
    count++
    // console.log(count)
}
}

//On enter
title.addEventListener("keypress",(e)=>{
    if(e.key == "Enter"){
        document.getElementById("floatingTextarea2").focus()
    }
})
note.addEventListener("keypress",(e)=>{
    if(e.key == "Enter"){
        createNote()
    }
    document.getElementById("floatingInputGroup1").focus()
})
//

submit.addEventListener("click",()=>{
    if(true){
        createNote()
    }
    
})

clear.addEventListener("click",()=>{
    document.getElementById("floatingInputGroup1").value = ""
    document.getElementById("floatingTextarea2").value = ""
})
async function deleteAll(){
        let wait = await confirm("are you sure to delete!")
        if(wait && count !=0){
            localStorage.clear()
            document.getElementsByClassName("special_container")[0].removeChild(document.getElementsByClassName("cards")[0])
            count = 0;
        }
}


console.log(localStorage.length)
console.log(localStorage.key(0))