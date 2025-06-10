const prompt=require("prompt-sync")({sigint:true}); 

console.log("area: ", findArea()); 

function findArea(){
    const length  = prompt("enter length: "); 
    const breadth = prompt("enter breadth: ");

    return length * breadth; 
}   