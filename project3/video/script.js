

var vd1 = document.getElementById('vd1')
    img1 = document.getElementById('img1')

document.getElementById('ply1').onclick = function() {
    setTimeout(function() {
        vd1.play()
    },2000)
    document.getElementById('wo').style.transform = "scale(2)"
    document.getElementById('wo').style.marginLeft = "280px"
    setTimeout(function() {
        document.getElementById("wo").style.transform = "scale(1)"
        document.getElementById("wo").style.marginLeft = "200px"
        document.getElementById("wo").style.opacity = "0"
    },1500)
    vd1.addEventListener('ended', function() {
        document.getElementById('ply1').style.display = ""
        document.getElementById('img1').style.display = ""
        setTimeout(function() {
            document.getElementById('img1').style.opacity = "100"
            document.getElementById('ply1').style.opacity = "100"
        },1000)
    })
    document.getElementById('img1').style.opacity = "0"
    document.getElementById('ply1').style.opacity = "0"
    setTimeout(function() {
        document.getElementById('img1').style.display = "none"
        document.getElementById('ply1').style.display = "none"
    },1000)
}


var fl = document.getElementById('fl')

setInterval(function() {
    fl.style.marginLeft = "2px"
},1000)
setInterval(function() {
        fl.style.marginLeft = "-10px"
},2000)

var fla = document.getElementById('fla')

setInterval(function() {
    fla.style.marginLeft = "15px"
},1000)
setInterval(function() {
        fla.style.marginLeft = "5px"
},2000)


document.getElementById('black').onclick = function() {
    document.getElementById('body').style.background = "#101010"
    document.getElementById('fl').style.fill = "#fff"
    fla.style.fill = "#fff"
    document.querySelector('.w').style.color = "#fff"
    document.querySelector('.d').style.color = "#fff"
    document.querySelector('.f').style.borderLeft = "1px solid #fff"
    document.getElementById('black').style.border = "1px solid #fff"
    document.querySelector('.mm').style.boxShadow = "0px 0px 20px 0px rgba(255, 255, 255, 40%)"
    vd1.style.boxShadow = "0px 0px 20px 1px rgba(255, 255, 255, 40%)"
    vd1.style.border = "0.4px solid #fff"
} 
document.getElementById('white').onclick = function() {
    document.querySelector('#body').style.background = "#fff"
    document.getElementById('fl').style.fill = "#000"
    fla.style.fill = "#000"
    document.querySelector('.w').style.color = "#000"
    document.querySelector('.d').style.color = "#000"
    document.querySelector('.f').style.borderLeft = "1px solid #000"
    document.querySelector('.mm').style.boxShadow = "0px 0px 20px 0px rgba(0, 0, 0, 40%)"
    vd1.style.boxShadow = "0px 0px 20px 6px rgba(0, 0, 0, 40%)"
    
}
