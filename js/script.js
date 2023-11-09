var allProducts = document.querySelectorAll(".container .parent .card ")
var div1 = document.querySelector("#div1")
var btn1 = document.querySelector("#btn1")
// var totalPrice = document.querySelector(".container .total")
var totalPrice =0

allProducts.forEach(function (item){
    item.querySelector(".btn").onclick = function(){
        totalPrice += +(item.querySelector(".cost").getAttribute("price"))
        div1.innerHTML += item.querySelector(".title").textContent + " " +" /"+ ""
        if(div1.innerHTML != ""){
            btn1.style.display ="block"

        }
    }
}
    )
    btn1.onclick = function(){
        btn1.style.backgroundColor="#aaaaaa2b"
      
        console.log(totalPrice)
        document.querySelector(".container .total").innerHTML = totalPrice
    }
    





