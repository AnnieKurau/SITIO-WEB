/*==================================================
    FINANCIAL ENGINE
==================================================*/

const suraFunds = [

    {
        id:"SUR2026",
        targetYear:2026,
        rate:0.1047
    },

    {
        id:"SUR2034",
        targetYear:2034,
        rate:0.1242
    },

    {
        id:"SUR2042",
        targetYear:2042,
        rate:0.1368
    },

    {
        id:"SUR2050",
        targetYear:2050,
        rate:0.1463
    },

    {
        id:"SUR2058",
        targetYear:2058,
        rate:0.1556
    },

    {
        id:"SUR2066",
        targetYear:2066,
        rate:0.1618
    }

];


/*==================================================
    FUNCIÓN PARA ELEGIR FONDO
==================================================*/

function getSuraFund(age){


    const currentYear=new Date().getFullYear();


    const retirementYear =
    currentYear + (65-age);



    let fund=suraFunds[0];


    suraFunds.forEach(item=>{


        if(retirementYear >= item.targetYear){

            fund=item;

        }


    });


    return {

        retirementYear,
        fund

    };


}

/*==================================================
    CALCULADORA
==================================================*/


function calculatePPR(){


    const fundData =
    getSuraFund(userData.age);



    const rate =
    fundData.fund.rate;



    const years =
    65-userData.age;



    const initial =
    userData.pension+
    userData.extraSavings;



    const annualContribution =
    userData.monthlyContribution*12;



    const withoutContribution =

    initial *
    Math.pow(
        1+rate,
        years
    );



    const withContribution =

    initial *
    Math.pow(
        1+rate,
        years
    )

    +

    annualContribution *

    (

        (
        Math.pow(
            1+rate,
            years
        )
        -
        1
        )

        /

        rate

    )

    *

    (1+rate);



    return {


        years,

        initial,

        withContribution,

        withoutContribution,

        fund:fundData.fund.id,

        rate:rate,

        retirementYear:fundData.retirementYear


    };


}



window.calculatePPR=calculatePPR;