let container =<HTMLElement> document.getElementById('container');

function random():string{
    let num = Math.floor(Math.random () * 6) + 1
return  num.toString()
}

class Die {
    public die : HTMLElement
    public value: string
    constructor(){
        this.die = document.createElement('div');
        this.die.setAttribute('class','btn btn-outline-dark btn-lg');
        container.appendChild(this.die); 
        this.value = random();
        this.die.innerHTML = this.value;
        this.die.addEventListener('click',() =>{
        this.roll()
        })         
    }
    roll(){ 
        this.value = random()
        this.die.innerHTML = this.value
       }  

}

// Generate Die Event
let btn =<HTMLElement> document.getElementById('sq-button')
function insertDie(){
    new Die();
}
btn.addEventListener('click',insertDie);


//Roll All Dice Event
let btn2 = <HTMLElement> document.getElementById('sq-button2')
function rollDice(){
let dieValues =  document.querySelectorAll('.btn')
dieValues.forEach((key) :string=> key.innerHTML=random())
}
btn2.addEventListener('click',rollDice)

