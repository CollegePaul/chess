//make the board
board = document.querySelector("#board")

for (let row = 0; row < 8; row ++){
    for(let s = 0; s < 8; s++ ){

        square = document.createElement("div")
        square.classList.add("square")

        if (row % 2 == 0){
            if (s % 2 == 0){
                square.classList.add("white")
            }else{
                square.classList.add("black")
            }
        }else{
            if (s % 2 == 0){
                square.classList.add("black")
            }else{
                square.classList.add("white")
            }
        }
        
        board.appendChild(square)
    }
}