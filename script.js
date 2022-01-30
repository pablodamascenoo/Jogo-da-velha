
let last = ""
let count = 0

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

        count++
    }

    
}

function clear_game(){
    
    if(count >=9){

        let all = document.querySelectorAll(".object")

        for (i in all){
            if(all[i].classList.contains("circle")){
                all[i].classList.remove("circle")
            }
            else if(all[i].classList.contains("cross")){
                all[i].classList.remove("cross")
            }
            count--;
            if(count == 0){
                break
            }
        }
    }
}