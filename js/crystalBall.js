/*==================================================
    CRYSTAL BALL SCREEN
==================================================*/

function showCrystalBall(){

    const content=document.querySelector(".content-layer");

    content.innerHTML=`

    <div class="crystal-screen">

        <div class="crystal-title">
            Leyendo tu futuro...
        </div>

        <div class="crystal-container">

            <div class="crystal-glow"></div>

            <div class="crystal-ball">
                
                <div class="crystal-mist"></div>
                <div class="crystal-energy"></div>
                <div class="crystal-stars">
                    ✦ ✧ ✦
                </div>

            </div>

            <div class="crystal-base"></div>

        </div>

        <div 
        class="crystal-message"
        id="crystalMessage">
            Consultando tus señales...
        </div>


    </div>

    `;

    startCrystalSequence();
}

function startCrystalSequence(){

    const message=document.getElementById("crystalMessage");


    const texts=[

        "Consultando tus señales...",
        "Analizando tus sueños...",
        "Revelando tu camino..."
    ];

    let index=0;

    const interval=setInterval(()=>{

        index++;

        if(index < texts.length){

           message.classList.remove("vision");

setTimeout(()=>{

    message.innerHTML=texts[index];
    message.classList.add("vision");

},150);
        }
    },900);

    setTimeout(()=>{
        clearInterval(interval);
        revealFuture();
    },3500);

}

function revealFuture(){

    document.querySelector(".crystal-screen")
    .classList.add("crystalReveal");


    setTimeout(()=>{

        switch(userData.savingsReason){

            case "family":
                showFutureResult();
            break;

            case "life":
                showFutureResult();
            break;

            case "future":
                showFutureResult();
            break;

            case "save":
                showFutureResult();
            break;

        }

    },800);

}


window.showCrystalBall=showCrystalBall;