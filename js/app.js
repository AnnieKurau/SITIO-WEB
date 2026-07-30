const screen = document.getElementById("screen");

const userData = {

    name:"",
    age:"",
    savings:"",
    extraSavings:"",
    extraSavingsAmount:"",
    monthlyContribution:"",
    savingsCards:"",

};

function getContent(){
    return document.querySelector(".content-layer");
}

function changeScreen(nextScreen){

    const content = document.querySelector(".content-layer");

    content.classList.remove("fade-in");
    content.classList.add("fade-out");

    setTimeout(nextScreen, 800);

}

function renderScreen(html){

    const content = getContent();

    content.innerHTML = html;

    content.classList.remove("fade-out");
    content.classList.add("fade-in");

}


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
            <a href="index.html"><img
                src="assets/images/Logo.svg"
                class="logo-sura"
                alt="SURA">
             </a>
        </div>

        <div class="content-layer">

            <h1>
                Revela<br>
                tu Futuro
            </h1>

            <p>
                <span>
                <br>El futuro no está escrito.<br>
                </span>
                <b>Cada decisión</b> que tomas <b>hoy,</b> puede
                <br>acercarte a la vida que imaginas.
            </p>
            <br><br>

            <button id="startBtn">
                DESCUBRIR
            </button>
        </div>
    </section>

    `;
}

//-----------------------//
//                       //
//        NOMBRE         //
//                       //
//-----------------------//

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    const content = document.querySelector(".content-layer");

    content.classList.remove("fade-in");
    content.classList.add("fade-out");

    setTimeout(() => {

        content.innerHTML = `
            <h2>
                Antes de comenzar...
            </h2>

            <p>
                ¿Cuál es tu nombre?
            </p>

            <input
                type="text"
                id="nameInput"
                placeholder="Escribe tu nombre"
                autocomplete="off"
                autocorrect="off"
                autocapitalize="words"
            >

            <button id="continueBtn">
                CONTINUAR
            </button>
        `;

        content.classList.remove("fade-out");
        content.classList.add("fade-in");

        // Botón Continuar
        const continueBtn = document.getElementById("continueBtn");

        continueBtn.addEventListener("click", () => {

            const name = document
                .getElementById("nameInput")
                .value
                .trim();

            if (name === "") {
                alert("Por favor escribe tu nombre.");
                return;
            }

            userData.name = name;

            changeScreen(showAge)

        });

    }, 800);

});

//-----------------------//
//                       //
//         EDAD          //
//                       //
//-----------------------//

function showAge() {

    const content = document.querySelector(".content-layer");

    content.innerHTML = `

        <h2>
            ¿Qué edad tienes?
        </h2>

        <p>
            Descuida, no contamos los años...
            <br>contamos la experiencia ✨
        </p>

        <div class="age-slider-container">

            <span id="ageValue">30</span>

            <input
            type="range"
            id="ageInput"
            min="18"
            max="64"
            value="30"
            >
        
        </div>

        <button id="continueAgeBtn">
            CONTINUAR
        </button>

    `;

    content.classList.remove("fade-out");
    content.classList.add("fade-in");

    const ageInput = document.getElementById("ageInput");
	const ageValue = document.getElementById("ageValue");

	ageValue.textContent = ageInput.value;

	ageInput.addEventListener("input", () => {
    	ageValue.textContent = ageInput.value;
	});

    document
        .getElementById("continueAgeBtn")
        .addEventListener("click", () => {

            const age = Number(ageInput.value);
            userData.age = age;

            changeScreen(showSavings);

        });

}


//-----------------------//
//                       //
//         AHORRO        //
//                       //
//-----------------------//



function showSavings() {

    const content = document.querySelector(".content-layer");

    content.innerHTML = `

        <h2>
            ¿Cuánto tienes reunido en tu Plan de Pensión?
        </h2>

        <p>
            Estamos descifrando tu constelación financiera...
        </p>

           <input
            type="text"
            id="savingInput"
            placeholder="$250,000"
            inputmode="numeric"
        >

        <small>
            No importa si es mucho o poco.
            <br>Lo importante es que ya comenzaste ✨
        </small>

        <button id="continueSavingsBtn">
            CONTINUAR
        </button>

    `;

    content.classList.remove("fade-out");
    content.classList.add("fade-in");

    document
        .getElementById("continueSavingsBtn")
        .addEventListener("click", () => {

            const savingsText = document
                .getElementById("savingInput")
                .value
                .replace(/[$,\s]/g, "");

            if (savingsText === "") {
                alert("Por favor indica cuánto tienes ahorrado.");
                return;
            }

            const savings = Number(savingsText);

            if (isNaN(savings) || savings < 0) {
                alert("Introduce un monto válido.");
                return;
            }

            userData.savings = savings;

            changeScreen(showExtraSavings);

        });
}

//----TERMINA AHORRO----//


//-----------------------//
//                       //
//    AHORRO ADICIONAL   //
//                       //
//-----------------------//

function showExtraSavings() {

    const content = document.querySelector(".content-layer");

    content.innerHTML = `

        <div class="text-block">

            <h2>
                ¿Tu futuro tiene
                <br>otro aliado?
            </h2>

            <p>
                Además de tu Plan de Pensión,
                <br><b>¿cuentas con algún ahorro adicional?</b>
            </p>

            <small>
                Algunas decisiones brillan más cuando se suman ✨
            </small>

        </div>

        <div class="button-group">

            <button
                id="yesBtn"
                class="btn-yellow">
                SÍ
            </button>

            <button
                id="noBtn"
                class="btn-blue">
                NO
            </button>

        </div>

    `;

    content.classList.remove("fade-out");
    content.classList.add("fade-in");

    const textBlock = content.querySelector(".text-block");
    const buttons = content.querySelector(".button-group");

    //==========================
    // BOTÓN SÍ
    //==========================

    document.getElementById("yesBtn").addEventListener("click", () => {

        userData.extraSavings = true;

        textBlock.classList.add("move-up");

        document
            .getElementById("yesBtn")
            .classList.add("button-selected");

        document
            .getElementById("noBtn")
            .classList.add("button-hidden");

        setTimeout(() => {

            buttons.innerHTML = `

                <div class="extra-saving-group slide-up">

                    <input
                        type="text"
                        id="extraSavingInput"
                        placeholder="$50,000"
                        inputmode="numeric"
                    >

                    <button id="continueExtraBtn">
                        CONTINUAR
                    </button>

                </div>

            `;

            document.getElementById("extraSavingInput").focus();

            document
                .getElementById("continueExtraBtn")
                .addEventListener("click", () => {

                    const value = document
                        .getElementById("extraSavingInput")
                        .value
                        .replace(/[$,\s]/g, "");

                    if (value === "") {
                        alert("Ingresa el monto de tu ahorro.");
                        return;
                    }

                    userData.extraSavingsAmount = Number(value);

                    changeScreen(showMonthlyContribution);

                });

        }, 180);

    });


    //==========================
    // BOTÓN NO
    //==========================

    document.getElementById("noBtn").addEventListener("click", () => {

        userData.extraSavings = false;
        userData.extraSavingsAmount = 0;

        changeScreen(showMonthlyContribution);

    });

}


function showMonthlyContribution(){

    const content = document.querySelector(".content-layer");

    content.innerHTML = `

        <h2>
            ¿Cuánto te gustaría aportar mensualmente?
        </h2>

        <p>
            Incluso una pequeña cantidad constante puede 
            <br>cambiar por completo la historia de tu futuro.
        </p>

        <input
            type="text"
            id="monthlyInput"
            placeholder="$2,000"
            inputmode="numeric"
        >

        <button id="revealBtn">
            CONTINUAR 
        </button>

    `;

    content.classList.remove("fade-out");
    content.classList.add("fade-in");

    document.getElementById("monthlyInput").focus();

    document.getElementById("revealBtn").addEventListener("click",()=>{

        const value = document
            .getElementById("monthlyInput")
            .value
            .replace(/[$,\s]/g,"");

        if(value===""){
            alert("Ingresa un monto.");
            return;
        }

        userData.monthlyContribution = Number(value);

        console.log(userData);

        showSavingsCards();

    });

}


initUniverse();
