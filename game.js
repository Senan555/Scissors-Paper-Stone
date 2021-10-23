const list = ["paper.png","scissors.png","stone.png"]

const list1 = [ "0-0.jpg","0-1.jpg","0-2.jpg","1-0.jpg","1-1.jpg","1-2.jpg","2-0.jpg","2-1.jpg","2-2.jpg"]


//DOM - Document Object Model

const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const stone = document.getElementById('stone')



const randomShekil = document.getElementById('random-shekil')

const computerChoice = document.getElementById('computer-choice')

const WriteResult = document.getElementById( 'mainresult')

paper.onclick = MakeYourChoice
scissors.onclick = MakeYourChoice
stone.onclick = MakeYourChoice

function MakeYourChoice() {
    const computer = RandomChoice()
    const choice = this.dataset.id


if(computer == 0 && choice == 0){
    result = "Try again"
    }


else if(computer == 0 && choice == 1 ){
        result = "Congratulations! You Won"
}
else if(computer == 0 && choice ==2 ){
    result = "You Lost!"
}
else if(computer == 1 && choice ==0 ){
    result = "You Lost!"
}
else if(computer == 1 && choice ==1 ){
    result = "Try Again!"
}
else if(computer == 1 && choice ==2 ){
    result = "Congratulations!You Won"
}
else if(computer == 2 && choice ==0 ){
    result = "Congratulations!You won"
}
else if(computer == 2 && choice ==1 ){
    result = "You Lost"
}
else if(computer == 2 && choice ==2 ){
    result = "Try again"

}

randomShekil.src = `img/${list[computer]}`
WriteResult.innerHTML = result


}



function RandomChoice(){
    const number = Math.round(Math.random()*2) // 0-2 arasindaki tam ededleri aliriq (0,1,2)
    computerChoice.src =`img/${list[number]}` // template literal --- ${}
    return number
}