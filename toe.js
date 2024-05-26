const button = document.querySelectorAll('.js-button');
const result = document.querySelector('.js-result');
const restart1 =document.querySelector('.js-restart');
const gamearr =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
]

let todolist =["","","","","","","","","",]
button.forEach((button,index)=>{
button.addEventListener('click',inputdata)
});

player='x'
function inputdata(){
  i=this.getAttribute('data');
  if(player==='x'){
    let x = 'x';
    this.innerHTML=x;
    todolist[i]=x;
    player='o';
    turn="o's turn"
    }
    else{
    let o = 'o';
    this.innerHTML=o;
    todolist[i]=o;
    player='x';
    turn="x's turn"
}
gamewon()
}

function gamewon(){
  for(i=0;i<gamearr.length;i++){
    const value = gamearr[i];
    const a = todolist[value[0]];
    const b = todolist[value[1]];
    const c = todolist[value[2]];
    if(a===b && b===c && a!=="" && b!=="" && c!==""){
      result.innerHTML=`${a} win`;
      return
    }
    else if(!todolist.includes("")){
      result.innerHTML='GAME DRAW';
    }else {
      result.innerHTML=turn;
      console.log(turn)
    }
    }
}

function restart(){
  todolist=["","","","","","","","",""];
  result.innerHTML="x'turn";
  button.forEach(cell => cell.innerHTML =" ");
}