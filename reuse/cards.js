/*==================================================
    CONFIGURACIÓN
==================================================*/

const savingsCards = [

    {
        id: 0,
        front: "assets/cards/family.webp",
        back: "assets/cards/family2.webp",
        title: "Para ayudar a<br>mi familia"
    },

    {
        id: 1,
        front: "assets/cards/life.webp",
        back: "assets/cards/life2.webp",
        title: "Tener una<br>mejor vida"
    },

    {
        id: 2,
        front: "assets/cards/future.webp",
        back: "assets/cards/future2.webp",
        title: "Me preocupa<br>el futuro"
    },

    {
        id: 3,
        front: "assets/cards/savings.webp",
        back: "assets/cards/savings2.webp",
        title: "Me cuesta trabajo<br>ahorrar"
    }

];


/*==================================================
    VARIABLES
==================================================*/

let currentCard = 0;

let selectedSavingsCard = null;

let coverflow;
let cardElements;
let titleElement;

let touchStartX = 0;
let touchEndX = 0;


/*==================================================
    PANTALLA
==================================================*/

function showSavingsCards(){

    const content = document.querySelector(".content-layer");

    content.innerHTML = `

        <div class="cards-scene">

            <h2 class="cards-title">
                ¿Para qué ahorras?
            </h2>

            <p class="cards-subtitle">
                Elige una carta
            </p>

            <div
                class="cards-coverflow"
                id="cardsCoverflow">

                ${createCardsHTML()}

            </div>

            <div
                class="selected-card-title"
                id="selectedCardTitle">

                ${savingsCards[0].title}

            </div>

            <button
                class="cards-button"
                id="confirmCard">

                ELEGIR CARTA

            </button>

        </div>

    `;

    coverflow = document.getElementById("cardsCoverflow");

    cardElements = [
        ...document.querySelectorAll(".saving-card")
    ];

    titleElement =
        document.getElementById(
            "selectedCardTitle"
        );

    initializeCards();

}

/*==================================================
    CREAR HTML DE LAS CARTAS
==================================================*/

function createCardsHTML(){

    return savingsCards.map((card,index)=>`

        <div
            class="saving-card"
            data-index="${index}">

            <div class="card-inner">

                <div class="card-face card-back">

                    <img
                        src="${card.back}"
                        draggable="false">

                </div>

                <div class="card-face card-front">

                    <img
                        src="${card.front}"
                        draggable="false">

                </div>

            </div>

        </div>

    `).join("");

}


/*==================================================
    INICIALIZAR
==================================================*/

function initializeCards(){

    updateCards();

    addCardEvents();

    addSwipeEvents();

    addKeyboardEvents();

    document
        .getElementById("confirmCard")
        .addEventListener(
            "click",
            confirmCard
        );

}


/*==================================================
    POSICIONES
==================================================*/

function updateCards(){

    cardElements.forEach((card,index)=>{

        card.className="saving-card";

        const distance=index-currentCard;

        if(distance===0){

            card.classList.add("active");

        }

        else if(distance===-1){

            card.classList.add("left");

        }

        else if(distance===1){

            card.classList.add("right");

        }

        else if(distance<-1){

            card.classList.add("far-left");

        }

        else{

            card.classList.add("far-right");

        }

    });

    updateTitle();

}


/*==================================================
    CAMBIAR TEXTO
==================================================*/

function updateTitle(){

    titleElement.classList.remove("show");

    setTimeout(()=>{

        titleElement.innerHTML=
            savingsCards[currentCard].title;

        titleElement.classList.add("show");

    },180);

}


/*==================================================
    CAMBIAR CARTA
==================================================*/

function nextCard(){

    if(currentCard>=savingsCards.length-1)
        return;

    currentCard++;

    updateCards();

}


function previousCard(){

    if(currentCard<=0)
        return;

    currentCard--;

    updateCards();

}

/*==================================================
    EVENTOS CLICK
==================================================*/

function addCardEvents(){

    cardElements.forEach((card,index)=>{

        card.addEventListener("click",()=>{

            if(index===currentCard){

                card.classList.add("pulse");

                setTimeout(()=>{

                    card.classList.remove("pulse");

                },350);

                return;

            }

            currentCard=index;

            updateCards();

        });

    });

}


/*==================================================
    SWIPE TOUCH
==================================================*/

function addSwipeEvents(){

    coverflow.addEventListener("touchstart",(e)=>{

        touchStartX=e.changedTouches[0].clientX;

    });

    coverflow.addEventListener("touchend",(e)=>{

        touchEndX=e.changedTouches[0].clientX;

        const distance=touchStartX-touchEndX;

        if(Math.abs(distance)<40) return;

        if(distance>0){

            nextCard();

        }else{

            previousCard();

        }

    });

}


/*==================================================
    TECLADO
==================================================*/

function addKeyboardEvents(){

    document.onkeydown=(e)=>{

        switch(e.key){

            case "ArrowLeft":

                previousCard();

                break;

            case "ArrowRight":

                nextCard();

                break;

            case "Enter":

                confirmCard();

                break;

        }

    };

}


/*==================================================
    CONFIRMAR CARTA
==================================================*/

function confirmCard(){

    selectedSavingsCard=savingsCards[currentCard];

    userData.savingsReason=selectedSavingsCard.id;

    userData.savingsReasonText=selectedSavingsCard.title;

    console.log(userData);

    const active=document.querySelector(".saving-card.active");

    if(active){

        active.classList.add("selected");

    }

    setTimeout(()=>{

        /*
            SIGUIENTE PANTALLA

            Cambia esta línea por la función
            de tu siguiente pantalla.

            Ejemplo:

            changeScreen(showResult);

        */

        console.log("Continuar...");

    },650);

}


/*==================================================
    OBTENER CARTA
==================================================*/

function getSelectedSavingsCard(){

    return selectedSavingsCard;

}


/*==================================================
    API
==================================================*/

window.showSavingsCards=showSavingsCards;

window.getSelectedSavingsCard=getSelectedSavingsCard;