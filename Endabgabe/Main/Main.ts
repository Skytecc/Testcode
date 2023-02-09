/*
Aufgabe: <Endaufgabe Feuerwerk>
Name: <Cindy Nguyen>
Matrikel: <271131>
Datum: <>
Quellen: <Ann-Kathrin Haas>
*/

namespace Feuerwerk {

    export interface Vector {
        x: number;
        y: number;
    }

    let canvas: HTMLCanvasElement;

    let rockets: Rocket[] = [];

    let particles: Rocket[] = [];

    //let coordinates: [] = [];

    window.addEventListener("load", handleload);

    export let crc2: CanvasRenderingContext2D;

    function handleload(): void {

        canvas = <HTMLCanvasElement>document.querySelector("#canvas");

        // Siehe Canvas Lektion
        if (!canvas) {
            return;
        }

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        console.log("Canvas");

        canvas.addEventListener("click", testRocket);

        clearArray(particles);

        window.setInterval(update, 20);

    }

    function update(): void {
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


    function drawRocket(_event: MouseEvent): void {


        //DomRect = getBoundingClientrect gibt wieder an welcher Position das Objekt ist, es auf dem HTML ist.
        //Bzw, Wo das Canvas im HTML ist. Positioniert dieses und somit kann man die x und y Werte vom Canvas lesen. 
        let rect: DOMRect = canvas.getBoundingClientRect();

        let positionX: number = _event.clientX - rect.left;
        let positionY: number = _event.clientY - rect.top;
        console.log(positionX, positionY);


        let position: Vector = { x: positionX, y: positionY };

        //console.log(position);


        let rgba1: number = Math.floor(Math.random() * 255);
        let rgba2: number = Math.floor(Math.random() * 255);
        let rgba3: number = Math.floor(Math.random() * 255);

        let color: string = "RGB" + "(" + rgba1 + "," + rgba2 + "," + rgba3 + ")";

        //rockets.push(new Circle(position, "test", color, color));

        //console.log(rockets);

    }

    function getRandomInt(_min: number, _max: number): number {
        _min = Math.ceil(_min);
        _max = Math.floor(_max);
        return Math.floor(Math.random() * (_max - _min + 1)) + _min;
    }

    function testRocket(_event: MouseEvent): void {

        let rect: DOMRect = canvas.getBoundingClientRect();

        let positionX: number = _event.clientX - rect.left;
        let positionY: number = _event.clientY - rect.top;
        console.log(positionX, positionY);

        //let position: Vector = { x: positionX, y: positionY };


        /* let dx: number = (Math.random() - 0.5) * (Math.random() * 6);
        let dy: number = (Math.random() - 0.5) * (Math.random() * 6);
        let radius: number = Math.random() * 3; */

        let rgba1: number = Math.floor(Math.random() * 255);
        let rgba2: number = Math.floor(Math.random() * 255);
        let rgba3: number = Math.floor(Math.random() * 255);

        let color: string = "RGB" + "(" + rgba1 + "," + rgba2 + "," + rgba3 + ")";

        for (let i: number = 0; i <= 10; i++) {

            let position: Vector = { x: positionX, y: positionY };

            let dx: number = (Math.random() - 0.5) * (Math.random() * 6);
            let dy: number = (Math.random() - 0.5) * (Math.random() * 6);
            let radius: number = Math.random() * 3;

            let circle: Rocket = new Circle(position, "test", color, color, 5, dx, dy);

            particles.push(circle);
        }

        console.log(particles);

        /* particles.forEach(element => {

            rockets.push(element);
            console.log(rockets);
            
        }); */

        /*    for (let elements of particles) {
   
               rockets.push(elements);
               console.log(rockets);
           }
    */
        //rockets(particles.values);

        //rockets.push(new Circle(position, "test", color, color, radius, dx, dy));

        /* console.log(particles);
        console.log(rockets); */
    }

    function testExplode(): void {

        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("#canvas");

        crc2.clearRect(0, 0, canvas.width, canvas.height);

        /*     particles.forEach((circle, i) => {
    
                if (circle.alpha <= 0) {
                    particles.splice(i, 1);
                } else circle.update();
    
            }); */

        for (let circle of particles) {
            if (circle.alpha <= 0) {
                let index: number = particles.indexOf(circle);
                particles.splice(index, 1);
            }
            else {
                circle.update();
            }
        }

        //console.log(particles);

    }

    function clearArray(_array: Rocket[]): void {
        //
    }


}