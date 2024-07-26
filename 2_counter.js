const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const resetButton = document.getElementById('reset');
const countLabel = document.getElementById('count_label');
count = 0;

increaseButton.onclick = function(){
    count++;
    countLabel.textContent = count;


}
decreaseButton.onclick = function(){
    count--;
    countLabel.textContent = count;


}
resetButton.onclick = function(){
    count = 0;
    countLabel.textContent = count;


}