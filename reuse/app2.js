const screen = document.getElementById("screen");

const userData = {
    name: "",
    age: null,
    savings: 0,
    extraSavings: null
};


//-----------------------//
//                       //
//      BIENVENIDA       //
//                       //
//-----------------------//

showWelcome();

function showWelcome() {

    screen.innerHTML = `

    <div class="background-layer">
        <canvas id="universe"></canvas>
        <div class="nebula"></div>
    </div>

    <section class="welcome">

        <div class="logo-layer">
            <img
                src="assets/images/Logo.svg"
                class="logo-sura"
                alt="SURA">
        </div>

        <div class="content-layer">

            <h1>
                Revela<br>
                tu Futuro
            </h1>

            <p>
                <br>El futuro no está escrito.<br>
                <b>Cada decisión</b> que tomas <b>hoy, </b>puede
                <br>acercarte a la vida que imaginas.
            </p>

            <button id="startBtn">
                COMENZAR
            </button>

        </div>

    </section>

    `;


    document
        .getElementById("startBtn")
        .addEventListener("click", () => {

    const content = document.querySelector(".content-layer");

    content.classList.add("fade-out");

    setTimeout(() => {

        showNameScreen();

    },800);

});


//------NOMBRE------//


    function showNameScreen(){
    const content = document.querySelector(".content-layer");


    content.classList.add("fade-out");

    setTimeout(() => {

        content.innerHTML = `

            <h2>
                Antes de comenzar...
            </h2>

            <p>
                ¿Cómo debo llamarte?
            </p>

            <input
                type="text"
                id="nameInput"
                placeholder="Mi nombre es..."
                autocomplete="off"
                autocorrect="off"
                autocapitalize="words"
            >

            <br>

            <button id="continueBtn">
                CONTINUAR
            </button>

        `;
    });

        content.classList.remove("fade-out");
        content.classList.add("fade-in");

        document.getElementById("nameInput").focus();

        const continueBtn = document.getElementById("continueBtn");

        continueBtn.addEventListener("click", () => {

    userData.name = document
        .getElementById("nameInput")
        .value
        .trim();


    content.classList.remove("fade-in");
    content.classList.add("fade-out");


    setTimeout(() => {

        showAgeScreen();

    },800);
});

}


//-----------------------//
//                       //
//         EDAD          //
//                       //
//-----------------------//

function showAgeScreen(){

    const content = document.querySelector(".content-layer");

    content.innerHTML = `

        <h2>
            ¿Cuál es tu edad en esta línea temporal?
        </h2>

        <p>
            Descuida, no contamos los años... contamos las historias. ✨
        </p>

        <input
            type="number"
            id="ageInput"
            placeholder="Indica tu edad"
            min="18"
            max="80"
        >

        <br>

        <button id="continueAgeBtn">
            CONTINUAR
        </button>

    `;

    content.classList.remove("fade-out");
    content.classList.add("fade-in");

    document.getElementById("ageInput").focus();

    const continueAgeBtn = document.getElementById("continueAgeBtn");

    continueAgeBtn.addEventListener("click", () => {

        userData.age = Number(
            document.getElementById("ageInput").value
        );

        if (userData.age < 18) {
            alert("Esta experiencia está dirigida a personas mayores de edad.");
            return;
        }

        content.classList.remove("fade-in");
        content.classList.add("fade-out");

        setTimeout(() => {

        showSavingsScreen();

},800);


        
//-----------------------//
//                       //
//         AHORRO        //
//                       //
//-----------------------//

function showSavingsScreen(){

    const content = document.querySelector(".content-layer");

    content.innerHTML = `

        <h2>
            ¿Cuánto has reunido hasta hoy en tu Plan de Pensión?
        </h2>

        <p>
            Estamos descifrando tu constelación financiera...
        </p>

        <input
            type="number"
            id="savingInput"
            placeholder="$250,000"
            min="0"
            step="1000"
            inputmode="numeric"
        >

        <small>
            No importa si es mucho o poco.<br>
            Lo importante es que ya comenzaste. ✨
        </small>

        <br><br>

        <button id="continueSavingsBtn">
            CONTINUAR
        </button>

    `;

    content.classList.remove("fade-out");
    content.classList.add("fade-in");

    document.getElementById("savingInput").focus();

    const continueSavingsBtn = document.getElementById("continueSavingsBtn");

    continueSavingsBtn.addEventListener("click", () => {

        userData.savings = Number(
            document.getElementById("savingInput").value
        );

        if (isNaN(userData.savings) || userData.savings < 0) {
            alert("Ingresa una cantidad válida.");
            return;
        }

        content.classList.remove("fade-in");
        content.classList.add("fade-out");

        setTimeout(() => {

        showExtraSavingsScreen();


 },800);

});

}


//-----------------------//
//                       //
//    AHORRO FUTURO      //
//                       //
//-----------------------//

function showExtraSavingsScreen(){

    const content = document.querySelector(".content-layer");

    content.innerHTML = `

        <h2>
            ¿Tienes algún otro ahorro destinado a tus metas futuras?
        </h2>

        <p>
            A veces un pequeño hábito hoy puede convertirse
            en una gran tranquilidad mañana. ✨
        </p>

        <div class="button-group">

            <button id="yesBtn">
                SÍ
            </button>

            <button id="noBtn">
                NO
            </button>

        </div>

    `;

    content.classList.remove("fade-out");
content.classList.add("fade-in");

document
.getElementById("yesBtn")
.addEventListener("click",()=>{

    userData.extraSavings = true;

    console.log(userData);

});


document
.getElementById("noBtn")
.addEventListener("click",()=>{

    userData.extraSavings = false;

    console.log(userData);

});

initUniverse();

}