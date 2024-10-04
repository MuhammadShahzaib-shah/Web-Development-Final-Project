let color = "white";
let colorChange = () => {
    if (color == "white") {
        let dev = document.getElementById("sab")
        let man =document.getElementById("man")
        // man.style.backgroundColor="rgba(68, 67, 67, 0.6)"
        man.style.color="white"
        dev.style.justifyContent = "end";
        dev.style.boxShadow="5px 12px 16px black "
        dev.style.backgroundColor="white"
        let dav=document.getElementById("hi")
        dav.style.backgroundColor="black";
        let colours = document.querySelector("body")
        colours.style.backgroundColor = "black";
        color = "black"

    }
    else {
        let dev = document.getElementById("sab")
        // dev.style.boxShadow="5px 12px 16px white "
        dev.style.justifyContent = "start";
        dev.style.backgroundColor="black"
        let dav=document.getElementById("hi")
        man.style.backgroundColor="whitesmoke"
        man.style.color="black"
        dav.style.backgroundColor="white";
        let colours = document.querySelector("body")
        colours.style.backgroundColor = "white"
        color = "white"

    }


}