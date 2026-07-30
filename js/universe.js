// ==========================================
// REVELA TU FUTURO
// Universe Background v2
// ==========================================

let canvas;
let ctx;

let stars = [];

let width;
let height;


function initUniverse(){

    canvas = document.getElementById("universe");

    if(!canvas) return;

    ctx = canvas.getContext("2d");

    resizeCanvas();

    createStars();

    requestAnimationFrame(
        animateUniverse
    );

}



function resizeCanvas(){

    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    updateStarPositions();

}



window.addEventListener(
"resize",
()=>{

    resizeCanvas();

});





function createStars(){

    stars=[];

    const total = 500;


    for(let i=0;i<total;i++){

        stars.push({

            // posición universal
            xPercent:
            Math.random(),


            yPercent:
            Math.random(),


            x:0,
            y:0,


            size:
            Math.random()>0.93
            ?
            2
            :
            1,


            opacity:
            Math.random()*0.45+0.15,


            speed:
            Math.random()*0.008+0.001,


            phase:
            Math.random()*Math.PI*2,


            drift:
            Math.random()*0.08+0.01

        });

    }


    updateStarPositions();

}




function updateStarPositions(){

    stars.forEach(star=>{

        star.x =
        star.xPercent * width;


        star.y =
        star.yPercent * height;


    });

}





function animateUniverse(time){

    ctx.clearRect(
        0,
        0,
        width,
        height
    );


    stars.forEach(star=>{


        // movimiento horizontal extremadamente lento

        star.x += star.drift * 0.02;



        // cuando sale por la derecha vuelve al inicio

        if(star.x > width){

            star.x = 0;

        }



        // tintineo

        let flicker =
        star.opacity +
        Math.sin(
            time * star.speed +
            star.phase
        ) * 0.15;



        flicker = Math.max(
            0.05,
            flicker
        );



        ctx.fillStyle =
        `rgba(255,255,255,${flicker})`;



        // pixel

        ctx.fillRect(

            Math.floor(star.x),

            Math.floor(star.y),

            star.size,

            star.size

        );


    });



    requestAnimationFrame(
        animateUniverse
    );

}