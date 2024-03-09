import { Background } from "./background.js";
const statusPanel = document.getElementById("statusPanel");

const gameCanvas = document.getElementById("gameCanvas");
const ctx = gameCanvas.getContext("2d");
ctx.globalAlpha = 0.5;

const background = new Background();

const loadData = async()=>{
    const file = await fetch("./res/data/characters.json");
    const data = await file.json();
    Car.CarsData = data;
};

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
//                                                    ,iit1;.
//                                                  :fGGGGGGCf;.
//                                                 ;LCfffLCGG08i
//                                                ,GCfffttLGG08C:
//                                                :GLfLftttLCGGC;
//                                                ,Ltftt11ttLC11i
//                                                 1t11ii1t1fLtfi:
//                                                 ,t1i11111fCL11G1:,
//                                                  iL111t1tti;iLGGGGLt;,
//                                              ,it1fGLtt1i;:,itfCGGGG00Gf;.
//                                            :tLGftfCL1i:,::;1tLCCCGGGGGG0L,
//       .;;;;;;;;::::,,,,....               10GCttffCCffttttffLLCCCCCCCLG00Ci
//       .tCCCCGGG000000GGGGCCC1           .tLGCLfffCGGGCffLLLLLLLLLfLCLCGGGGGi
//        iCCCCCCGGG000000888880:          i0ffffff00800CfLLLLLftff1tfLtLCCLCCL.
//        ,LCCCCCGGGG00000000088t         iCGL1ittfG0000CtLfLLftf11ii1t1fLtLCG0i
//         1CCCCCCGGGGG000000008C.     .;f0GLLi;ttfC0000LtffLt1fCLLt111;iifLCGGG:
//         :LCCCCCCGGGG0000000000;    ,fCGCCffi:tfLLG000L1ttf1tLCCCCLLLLtitfttfLf:
//         .tCCCCCCGGGG0000000008f.,:itf11ii;;;:1fftfCCL11ti11tfLLLLLLCGGtLCCftttt,
//          ;CGCCGCGGGGG000000000GtfLCLfi;;;;:,,i11i1iiiitt1iiii1tfffffLCLLffLftft:
//          .tLLLLCCCGGGG000000000tii1111;::;;:,;iii;;i1tt1iiiiiii1tfffLLLLLtfffLf:
//           ...,,,::;;ii11ttfLLLCti1t11iii;:;:,;;;::;iiii;;;;:;;;:::;;11fffLfffft.
//            ..            .....,.itLLLft1i;:,.                ... .....:,,,,:::.
//                 ................,:;:,,...


