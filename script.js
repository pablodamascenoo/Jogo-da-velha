
let last = ""
let count = 0
let players = document.querySelectorAll(".player-score")
let player_1 = {
    name: players[0].querySelector(".player"),
    score: players[0].querySelector(".score")
}
let player_2 = {
    name: players[1].querySelector(".player"),
    score: players[1].querySelector(".score")
}
let score_1 = 0
let score_2 = 0


function change_square(obj){

    square = obj.querySelector(".object")

    if(!square.classList.contains("circle") && !square.classList.contains("cross")){

        if(last == "" || last=="circle"){
            square.classList.add("cross")
            last = "cross"
            if(check_win("cross")){
                score_1 +=1
                player_1.score.innerText = score_1
            }
        }

        else{
            square.classList.add("circle")
            last = "circle" 
            if(check_win("cross")){
                score_2 += 1
                player_2.score.innerText = score_2
            }
        }

        count++
    }

    
}

function clear_game(){

    last=""

    let all = document.querySelectorAll(".object")

    for (let i=0; i<9; i++){

        if(all[i].classList.contains("circle")){
            all[i].classList.remove("circle")
        }
        else if(all[i].classList.contains("cross")){
            all[i].classList.remove("cross")
        }
    }

    count = 0
}

function check_win(last_played){

    let all = document.querySelectorAll(".object")
    let matrix = []
    let row = []

    for(let i=0; i<9; i++){
        for (let j = i; j < i+3; j++) {
            if(all[j].classList.contains(last_played)){
                row.push(1)
            }
            else{
                row.push(0)
            }
        }
        matrix.push(row)
        row = []
        i+= 2
    }

    if(check_column(matrix) || check_row(matrix) || check_diagonal(matrix)){
        return true
    }

    return false

}

function check_row(mat){

    let row_count = [0,0,0]

    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            if(mat[i][j] == 1){
                row_count[i] += 1
            }
        }
    }

    for(let i=0; i<3; i++){
        if(row_count[i] == 3){
            return true
        }
    }
    return false
}

function check_column(mat){

    let column_count = [0,0,0]

    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            if(mat[i][j] == 1){
                column_count[j] += 1
            }
        }
    }

    for(let i=0; i<3; i++){
        if(column_count[i] == 3){
            return true
        }
    }
    return false
}

function check_diagonal(mat){

    if(mat[0][0] == 1 && mat[1][1] == 1 && mat[2][2] == 1 ){
        return true
    }

    else if(mat[0][2] == 1 && mat[1][1] == 1 && mat[2][0] == 1 ){
        return true
    }

    else{
        return false
    }
}