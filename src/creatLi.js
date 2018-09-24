function creatLi(ul, name) {
    let li = document.createElement('li')
    li.className = 'list-group-item d-flex'
    li.innerHTML = name
    
    let span = document.createElement('span')
    span.innerHTML = 'X'
    span.className = 'ml-auto'
    span.style.color = 'red'
    span.style.cursor = 'pointer'
    span.addEventListener('click', function () {
        ul.removeChild(li)
    })

    li.appendChild(span)
    ul.appendChild(li)
    
}


export default creatLi

