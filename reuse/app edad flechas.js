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
                <br>El futuro no está escrito.<br>
                <b>Cada decisión</b> que tomas <b>hoy,</b> puede
                <br>acercarte a la vida que imaginas.
            </p>

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

            content.classList.remove("fade-in");
            content.classList.add("fade-out");

            setTimeout(() => {
    		showAge();
			}, 800);

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
            <br>contamos la experiencia. ✨
        </p>

        <input
            type="number"
            id="ageInput"
            placeholder="Selecciona tu edad"
            min="18"
            max="90"
        >

        <button id="continueAgeBtn">
            CONTINUAR
        </button>

    `;

    content.classList.remove("fade-out");
    content.classList.add("fade-in");

    document
        .getElementById("continueAgeBtn")
        .addEventListener("click", () => {

            const ageValue = document
                .getElementById("ageInput")
                .value
                .trim();

            if (ageValue === "") {
                alert("Por favor indica tu edad.");
                return;
            }

            const age = Number(ageValue);

            if (age < 18) {
                alert("Esta experiencia está dirigida a personas mayores de edad.");
                return;
            }

            userData.age = age;

            content.classList.remove("fade-in");
            content.classList.add("fade-out");

            setTimeout(() => {
                showSavings();
            }, 800);

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
            <br>Lo importante es que ya comenzaste. ✨
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

            console.log(userData);

        });
}

//----TERMINA AHORRO----//

initUniverse();
