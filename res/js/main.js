import { Background } from "./background.js";
import { Car } from "./car.js";
const statusPanel = document.getElementById("statusPanel");

const gameCanvas = document.getElementById("gameCanvas");
const ctx = gameCanvas.getContext("2d");
ctx.globalAlpha = 0.5;

const background = new Background();

const loadData = async()=>{
    const file = await fetch("./res/data/data.json");
    const data = await file.json();
};
const car = new Car(200,300,820,330,"./res/img/cars/peugeot-205-t16.png");
//CLEAR CANVAS--------------------------------------------
const clearCanvas = () =>{
    background.draw(ctx);
};
const resizeCanvas = () => {
        gameCanvas.width = 1280;
        gameCanvas.height = 720;
};  
//UPDATE--------------------------------------------------
const update =() =>{
    car.draw(ctx);
    ctx.fillStyle = "rgba(0, 255, 255, 0.5)";
    ctx.fillRect(klikaciOblasti[0].x,klikaciOblasti[0].y,klikaciOblasti[0].sirka,klikaciOblasti[0].vyska);
    ctx.fillStyle = "rgba(255, 0, 255, 0.5)";
    ctx.fillRect(klikaciOblasti[1].x,klikaciOblasti[1].y,klikaciOblasti[1].sirka,klikaciOblasti[1].vyska);
    ctx.fillRect(klikaciOblasti[2].x,klikaciOblasti[2].y,klikaciOblasti[2].sirka,klikaciOblasti[2].vyska);
    ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
    ctx.fillRect(klikaciOblasti[3].x,klikaciOblasti[3].y,klikaciOblasti[3].sirka,klikaciOblasti[3].vyska);
    ctx.fillStyle = "rgba(255, 255, 0, 0.5)";
    ctx.fillRect(klikaciOblasti[4].x,klikaciOblasti[4].y,klikaciOblasti[4].sirka,klikaciOblasti[4].vyska);
};
//GAMELOOP-------------------------------------------------
const gameLoop = () =>{
    resizeCanvas();
    clearCanvas();
    update();
};
//PO NAČTENÍ STRÁNKY---------------------------------------
window.onload = async()=>{
    window.requestAnimationFrame(gameLoop);
    await loadData();
};
//DEFINOVÁNÍ DÍLŮ------------------------------------------
var klikaciOblasti = [
    { nazev: "Engine", x: 200, y: 300, sirka: 200, vyska: 200},
    { nazev: "RearWheels", x: 280, y: 500, sirka: 120, vyska: 120 },
    { nazev: "FrontWheels", x: 770, y: 500, sirka: 120, vyska: 120 },
    { nazev: "BodyWork", x: 430, y:330, sirka: 330, vyska: 200},
    { nazev: "Chassis", x: 430, y:535, sirka: 330, vyska: 50}
    // Další klikací oblasti...
];


gameCanvas.addEventListener("click", function(event) {
    var canvasBound = gameCanvas.getBoundingClientRect();
    let canvasRatioX = gameCanvas.width / canvasBound.width;
    var mouseX = (event.clientX - canvasBound.left) * canvasRatioX;
    let canvasRatioY = gameCanvas.height / canvasBound.height;
    var mouseY = (event.clientY - canvasBound.top) * canvasRatioY;
    klikaciOblasti.forEach(function(oblast) {
        if (mouseX >= oblast.x && mouseX <= oblast.x + oblast.sirka &&
            mouseY >= oblast.y && mouseY <= oblast.y + oblast.vyska) {
            console.log("Kliknuto na " + oblast.nazev);
            statusPanel.innerText = "Kliknuto na " + oblast.nazev;
            //tady zavolat funkci pro opravu dané oblasti
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


