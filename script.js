
let last = ""

function change_square(obj){

    square = obj.querySelector(".object")

    if(!square.classList.contains("circle") && !square.classList.contains("cross")){

        if(last == "" || last=="circle"){
            square.classList.add("cross")
            last = "cross"
        }

        else{
            square.classList.add("circle")
            last = "circle" 
        }
    }

}