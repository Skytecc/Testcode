"use strict";
/*
Aufgabe: <Endaufgabe Feuerwerk>
Name: <Cindy Nguyen>
Matrikel: <271131>
Datum: <>
Quellen: <Ann-Kathrin Haas>
*/
var Feuerwerk;
(function (Feuerwerk) {
    let canvas;
    let rockets = [];
    let particles = [];
    //let coordinates: [] = [];
    window.addEventListener("load", handleload);
    function handleload() {
        canvas = document.querySelector("#canvas");
        // Siehe Canvas Lektion
        if (!canvas) {
            return;
        }
        Feuerwerk.crc2 = canvas.getContext("2d");
        console.log("Canvas");
        canvas.addEventListener("click", testRocket);
        clearArray(particles);
        window.setInterval(update, 20);
    }
    function update() {
        //Update Funktion
        /*    for (let circle of rockets) {
               //circle.draw();
   
               //circle.update();
   
               /* rockets.forEach((circle, i) => {
   
                   if (circle.alpha <= 0) {
                        rockets.splice(i, 1);
                   }
                   
               });
           } */
        requestAnimationFrame(testExplode);
    }
    function drawRocket(_event) {
        //DomRect = getBoundingClientrect gibt wieder an welcher Position das Objekt ist, es auf dem HTML ist.
        //Bzw, Wo das Canvas im HTML ist. Positioniert dieses und somit kann man die x und y Werte vom Canvas lesen. 
        let rect = canvas.getBoundingClientRect();
        let positionX = _event.clientX - rect.left;
        let positionY = _event.clientY - rect.top;
        console.log(positionX, positionY);
        let position = { x: positionX, y: positionY };
        //console.log(position);
        let rgba1 = Math.floor(Math.random() * 255);
        let rgba2 = Math.floor(Math.random() * 255);
        let rgba3 = Math.floor(Math.random() * 255);
        let color = "RGB" + "(" + rgba1 + "," + rgba2 + "," + rgba3 + ")";
        //rockets.push(new Circle(position, "test", color, color));
        //console.log(rockets);
    }
    function testRocket(_event) {
        let rect = canvas.getBoundingClientRect();
        let positionX = _event.clientX - rect.left;
        let positionY = _event.clientY - rect.top;
        console.log(positionX, positionY);
        //let position: Vector = { x: positionX, y: positionY };
        /* let dx: number = (Math.random() - 0.5) * (Math.random() * 6);
        let dy: number = (Math.random() - 0.5) * (Math.random() * 6);
        let radius: number = Math.random() * 3; */
        let rgba1 = Math.floor(Math.random() * 255);
        let rgba2 = Math.floor(Math.random() * 255);
        let rgba3 = Math.floor(Math.random() * 255);
        let color = "RGB" + "(" + rgba1 + "," + rgba2 + "," + rgba3 + ")";
        for (let i = 0; i <= 10; i++) {
            let position = { x: positionX, y: positionY };
            let dx = (Math.random() - 0.5) * (Math.random() * 6);
            let dy = (Math.random() - 0.5) * (Math.random() * 6);
            let radius = Math.random() * 3;
            let circle = new Feuerwerk.Circle(position, "test", color, color, radius, dx, dy);
            particles.push(circle);
        }
        /* particles.forEach(element => {

            rockets.push(element);
            console.log(rockets);
            
        }); */
        for (let elements of particles) {
            rockets.push(elements);
            console.log(rockets);
        }
        //rockets(particles.values);
        //rockets.push(new Circle(position, "test", color, color, radius, dx, dy));
        /* console.log(particles);
        console.log(rockets); */
    }
    function testExplode() {
        let canvas = document.querySelector("#canvas");
        Feuerwerk.crc2.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((circle, i) => {
            if (circle.alpha <= 0) {
                particles.splice(i, 1);
            }
            else
                circle.update();
        });
    }
    function clearArray(_array) {
        //
    }
})(Feuerwerk || (Feuerwerk = {}));
//# sourceMappingURL=Main.js.map