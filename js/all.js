var one = document.querySelector("#show")

var dis = document.querySelectorAll("#display")

var showimg = document.querySelectorAll('#showimg')
var shimg = document.querySelectorAll('#img-open')

var close = document.querySelectorAll("#clos")

var changecl = document.querySelectorAll("#link-img")

var changecol = document.querySelectorAll("#link-img1")

var next = document.querySelector("#next")
var before = document.querySelector("#before")

var next1 = document.querySelector("#next-1")
var before1 = document.querySelector("#before-1")

var next2 = document.querySelector("#next-2")
var before2 = document.querySelector("#before-2")

var next3 = document.querySelector("#next-3")
var before3 = document.querySelector("#before-3")
// imagis didad gadatana
if (window.matchMedia("(min-width: 600px)").matches){
for (let index = 0; index < showimg.length; index++) {
    showimg[index].addEventListener("click", function(){
        shimg[index].style.display = "block"
    })
    
}



// imagis gatishva
for (let index = 0; index < close.length; index++) {
    close[index].addEventListener("click", function(){
        shimg[index].style.display = "none"
    })
    
}
}





// certificate gachena damalva
one.addEventListener("click", toggleVis)


// certificate
for (var index = 0; index < dis.length; index++) {
    dis[index].style.display = "none"
}
function toggleVis() {
    if (dis[0].style.display == "none") {
        for (var index = 0; index < dis.length; index++) {
            dis[index].style.display = "block"
        }
        one.textContent = "Hide"
    } else {
        for (var index = 0; index < dis.length; index++) {
            dis[index].style.display = "none"
        }
        one.textContent = "view all"
    }
}


// feris shecvla
one.addEventListener("mouseover", function(){
    one.style.color = "coral"
})

one.addEventListener("mouseout", function(){
    one.style.color = "white"
})

// feris shecvla
for (let index = 0; index < changecol.length; index++) {
    changecl[index].addEventListener("mouseover", function(){
        changecl[index].style.color = "coral"
    })
    
}


for (let index = 0; index < changecol.length; index++) {
    changecl[index].addEventListener("mouseout", function(){
        changecl[index].style.color = "black"
    })
    
}


// feris shecvla
for (let index = 0; index < changecol.length; index++) {
    changecol[index].addEventListener("mouseover", function(){
        changecol[index].style.color = "coral"
    })
    
}


for (let index = 0; index < changecol.length; index++) {
    changecol[index].addEventListener("mouseout", function(){
        changecol[index].style.color = "black"
    })
    
}

// gadasvlebi
if (window.matchMedia("(min-width: 600px)").matches){
var img_change = ["./images/capture0.jpg","./images/capture1.jpg","./images/capture2.jpg","./images/capture3.jpg"]
document.getElementById("img-1").src = img_change[0]
img_n = 0
next.addEventListener("click", function(){
    img_n += 1
    if (img_n > 3){
        img_n = 0
    }
    document.getElementById("img-1").src = img_change[img_n]
    console.log(img_n);
})
before.addEventListener("click", function(){
    img_n -= 1
    if (img_n < 0){
        img_n = 3
    }
    document.getElementById("img-1").src = img_change[img_n]
    
    console.log(img_n)
})

// 2

var img_change1 = ["./images/lcapture0.jpg","./images/lcapture1.jpg","./images/lcapture2.jpg","./images/lcapture3.jpg"]
document.getElementById("img-2").src = img_change1[0]
img_w = 0
next1.addEventListener("click", function(){
    img_w += 1
    if (img_w > 3){
        img_w = 0
    }
    document.getElementById("img-2").src = img_change1[img_w]
})
before1.addEventListener("click", function(){
    img_w -= 1
    if (img_w < 0){
        img_w = 3
    }
    document.getElementById("img-2").src = img_change1[img_w]
})

// 3

var img_change2 = ["./images/ccapture0.jpg","./images/ccapture1.jpg"]
document.getElementById("img-3").src = img_change2[0]
img_d = 0
next2.addEventListener("click", function(){
    img_d += 1
    if (img_d > 1){
        img_d = 0
    }
    document.getElementById("img-3").src = img_change2[img_d]
})
before2.addEventListener("click", function(){
    img_d -= 1
    if (img_d < 0){
        img_d = 1
    }
    document.getElementById("img-3").src = img_change2[img_d]
})

// 4

var img_change3 = ["./images/UHzQ_Y.png","./images/tMjCnF.png","./images/uv2h9Y.png"]
document.getElementById("img-4").src = img_change3[0]
img_t = 0
next3.addEventListener("click", function(){
    img_t += 1
    if (img_t > 2){
        img_t = 0
    }
    document.getElementById("img-4").src = img_change3[img_t]
})
before3.addEventListener("click", function(){
    img_t -= 1
    if (img_t < 0){
        img_t = 2
    }
    document.getElementById("img-4").src = img_change3[img_t]
})

}

