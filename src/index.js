import creatLi from "./creatLi";

let nameField = document.querySelector('#nameField')
let ul = document.querySelector('#nameList')

nameField.addEventListener('keypress', function(event) {
    if(event.keyCode === 13) {
        let name = event.target.value
        creatLi( ul,name)
        event.target.value = ""
    }
    
})

