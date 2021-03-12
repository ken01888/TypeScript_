var container = document.getElementById('container');
function random() {
    var num = Math.floor(Math.random() * 6) + 1;
    return num.toString();
}
var Die = /** @class */ (function () {
    function Die() {
        var _this = this;
        this.die = document.createElement('div');
        this.die.setAttribute('class', 'btn btn-outline-dark btn-lg');
        container.appendChild(this.die);
        this.value = random();
        this.die.innerHTML = this.value;
        this.die.addEventListener('click', function () {
            _this.roll();
        });
    }
    Die.prototype.roll = function () {
        this.value = random();
        this.die.innerHTML = this.value;
    };
    return Die;
}());
// Generate Die Event
var btn = document.getElementById('sq-button');
function insertDie() {
    new Die();
}
btn.addEventListener('click', insertDie);
//Roll All Dice Event
var btn2 = document.getElementById('sq-button2');
function rollDice() {
    var dieValues = document.querySelectorAll('.btn');
    dieValues.forEach(function (key) { return key.innerHTML = random(); });
}
btn2.addEventListener('click', rollDice);
//Random Number
