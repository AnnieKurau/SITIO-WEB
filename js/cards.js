const savingsCards = [
{
    id:"family",
    front:"assets/cards/family.webp",
    back:"assets/cards/family2.webp",
},
{
    id:"life",
    front:"assets/cards/life.webp",
    back:"assets/cards/life2.webp",
},
{
    id:"future",
    front:"assets/cards/future.webp",
    back:"assets/cards/future2.webp",
},
{
    id:"save",
    front:"assets/cards/savings.webp",
    back:"assets/cards/savings2.webp",
}
];

let current=0;
let selectedCard=null;

/*==================================================
    PANTALLA
==================================================*/

function showSavingsCards(){

    const content=document.querySelector(".content-layer");

    content.innerHTML=`

    <div class="cards-screen">

        <h3 class="cards-title">
            ¿Para qué ahorras?
        </h3>

        <p class="cards-subtitle">
            Elige una carta
        </p>

        <div class="coverflow" id="coverflow">

            ${savingsCards.map((card,index)=>`

                <article
                    class="card"
                    data-index="${index}">

                    <div class="card-inner">

                        <div class="card-face back">
                            <img src="${card.back}">
                        </div>

                        <div class="card-face front">
                            <img src="${card.front}">
                        </div>

                    </div>

                </article>

            `).join("")}

        </div>

        <button
            class="btn-yellow"
            id="cardContinue">

            ELEGIR CARTA

        </button>

    </div>

    `;

    initCoverflow();

}

/*==================================================
    COVERFLOW
==================================================*/

function initCoverflow(){

    const cards=[...document.querySelectorAll(".card")];
    const button=document.getElementById("cardContinue");

    let startX=0;

    update();

    function update(){

        cards.forEach((card,index)=>{

            const offset=index-current;

            card.style.setProperty("--offset",offset);
            card.style.setProperty("--abs",Math.abs(offset));

            card.classList.toggle("active",offset===0);

        });

    }

    cards.forEach(card=>{

        card.addEventListener("click",()=>{

            current=Number(card.dataset.index);

            update();

        });

    });

    document.addEventListener("keydown",e=>{

        if(e.key==="ArrowLeft" && current>0){

            current--;
            update();

        }

        if(e.key==="ArrowRight" && current<savingsCards.length-1){

            current++;
            update();

        }

    });

    const cover=document.getElementById("coverflow");

    cover.addEventListener("touchstart",e=>{

        startX=e.touches[0].clientX;

    });

    cover.addEventListener("touchend",e=>{

        const endX=e.changedTouches[0].clientX;

        if(endX-startX>60 && current>0){

            current--;

            update();

        }

        if(startX-endX>60 && current<savingsCards.length-1){

            current++;

            update();

        }

    });

    button.addEventListener("click",()=>{

        selectedCard=savingsCards[current];

        userData.savingsReason=selectedCard.id;
        userData.savingsReasonText=selectedCard.text;

        console.log(userData);

        /*  BOLA DE CRISTAL  */

        showCrystalBall();

    });

}


function getSelectedSavingsCard(){

    return selectedCard;

}

window.showSavingsCards=showSavingsCards;
window.getSelectedSavingsCard=getSelectedSavingsCard;