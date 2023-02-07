var song=new Audio("./assests/song.mp3")

document.querySelector("#btn").addEventListener("click",e=>{
    document.querySelector("#h1").innerHTML="This One is for You"
    document.querySelector("img").style.display="none"
    setTimeout(function(){
        document.querySelector("#h1").innerHTML=1
        song.play()
    },3000)

    setTimeout(function(){
        document.querySelector("#h1").innerHTML=2
    },4000)

    setTimeout(function(){
        document.querySelector("#h1").innerHTML=3
    },5000)

    setTimeout(function(){
        document.querySelector("img").setAttribute("src","./assests/1.jpg")
        document.querySelector("#h1").innerHTML="Happy Birthday 🥳🙌"
        document.querySelector("img").style.display="block"
    },7000)

    setTimeout(function(){
        document.querySelector("img").setAttribute("src","./assests/2.jpg")
    },9000)

    setTimeout(function(){
        document.querySelector("img").setAttribute("src","./assests/4.jpg")
    },10000)

    setTimeout(function(){
        document.querySelector("img").setAttribute("src","./assests/3.jpg")
    },11000)

})