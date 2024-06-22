var rand1= Math.floor(Math.random()*6)+1;
var rand2= Math.floor(Math.random()*6)+1;

var image1=document.getElementsByClassName("img1")[0];
image1.setAttribute("src","images/dice"+rand1+".png");
var image2=document.getElementsByClassName("img2")[0];
image2.setAttribute("src","images/dice"+rand2+".png");
var result=document.createElement("h3");
result.style.backgroundColor="yellow";

if(rand1>rand2){
    result.textContent="🚩Player1 Wins !";

}
else if(rand1<rand2){
    result.textContent="🚩Player2 Wins !";
}
else{
    result.textContent="It's a draw refresh again";
}

var container=document.querySelector(".container > h1");
container.textContent=result.textContent;



