function changeMode(size, weight, transform, background, color){
    return function(){
        document.body.style.fontSize = size
        document.body.style.fontWeight = weight
        document.body.style.textTransform = transform
        document.body.style.backgroundColor = background
        document.body.style.color = color
    }
}

function main(){
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green")
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white")
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black")

    var paragraph = document.createElement("p")
    var btnSpooky = document.createElement("button")
    var btnDarkMode = document.createElement("button")
    var btnScreamMode = document.createElement("button")

    paragraph.innerHTML = "Welcome Holberton!"
    btnSpooky.innerHTML = "Spooky"
    btnDarkMode.innerHTML = "Dark Mode"
    btnScreamMode.innerHTML = "Scream Mode"

    document.body.appendChild(paragraph)
    document.body.appendChild(btnSpooky)
    document.body.appendChild(btnDarkMode)
    document.body.appendChild(btnScreamMode)

    btnSpooky.onclick = spooky
    btnDarkMode.onclick = darkMode
    btnScreamMode.onclick = screamMode
}

main()