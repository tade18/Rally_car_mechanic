import { Background } from "./background.js";
const statusPanel = document.getElementById("statusPanel");

const gameCanvas = document.getElementById("gameCanvas");
const ctx = gameCanvas.getContext("2d");
ctx.globalAlpha = 0.5;

const background = new Background();



//vykreslení auta
    var car = new Image();
    car.src = "./res/img/cars/peugeot-205-t16.png";

const clearCanvas = () =>{
    background.draw(ctx);
}
const resizeCanvas = () => {
        gameCanvas.width = 1280;
        gameCanvas.height = 720;
};  

const update = () =>{
    ctx.drawImage(car, 200, 300,820,330);
    ctx.fillStyle = "rgba(0, 255, 255, 0.5)";
    ctx.fillRect(200,300,200,200);
    ctx.fillRect(280,500,120,120);
    ctx.fillRect(770,500,120,120);
};

const gameLoop = () =>{
    resizeCanvas();
    clearCanvas();
    update();
};
window.onload = ()=>{
    window.requestAnimationFrame(gameLoop);
};


var klikaciOblasti = [
    { nazev: "Engine", x: 200, y: 300, sirka: 200, vyska: 200},
    { nazev: "RearWheels", x: 280, y: 500, sirka: 120, vyska: 120 },
    { nazev: "FrontWheels", x: 770, y: 500, sirka: 120, vyska: 120 },
    // Další klikací oblasti...
];

gameCanvas.addEventListener("click", function(event) {
    var rect = gameCanvas.getBoundingClientRect();
    var mouseX = event.clientX - rect.left;
    var mouseY = event.clientY - rect.top;

    klikaciOblasti.forEach(function(oblast) {
        if (mouseX >= oblast.x && mouseX <= oblast.x + oblast.sirka &&
            mouseY >= oblast.y && mouseY <= oblast.y + oblast.vyska) {
            console.log("Kliknuto na " + oblast.nazev);
            statusPanel.innerText = "Kliknuto na " + oblast.nazev;
            // Zde zavolej funkci pro opravu dané části auta
        }
    })
});
