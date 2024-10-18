//Reem's Clicker 

let count = 0; 
let savedCounts = [];

function increment() {
    count += 1;
    document.getElementById("count-el").innerText = count; 
}

function save() {
    savedCounts.push(count);
    document.getElementById("save-el").innerText = savedCounts.join(" - "); 
    count = 0; 
    document.getElementById("count-el").innerText = count; 
}
