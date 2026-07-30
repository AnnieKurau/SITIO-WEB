function showFutureResult(){


const content=document.querySelector(".content-layer");


const result=calculatePPR();



content.innerHTML=`

<div class="future-screen">


<div class="future-info">


<h2>
${userData.name}, tu futuro comienza hoy ✨
</h2>


<p>

Si decides retirarte a los 65 años y abres ahora tu PPR en SURA,
iniciando tu plan con 

<strong>
${formatMoney(result.initial)}
</strong>

MXN y realizando aportaciones mensuales de

<strong>
${formatMoney(userData.monthlyContribution)}
</strong>

durante 

<strong>
${result.years}</strong>

año(s),

podrás recibir hasta:

</p>



<h1>

${formatMoney(result.withContribution)}

</h1>



<div class="numbers">


<div>

<h3>
${formatMoney(result.withContribution)}
</h3>

<p>
PPR en SURA con aportaciones
</p>

</div>



<div>

<h3>
${formatMoney(result.withoutContribution)}
</h3>

<p>
PPR en SURA sin aportaciones adicionales
</p>

</div>




<div>

<h3>
${formatMoney(result.initial)}
</h3>

<p>
Si lo dejas en el Banco
</p>

</div>


</div>



<p class="legal">


Recuerda que el PPR es una inversión que se coloca en los fondos SURA Soluciones.
Dado que tu plazo es de ${result.years} año(s),
estarás invirtiendo en el fondo ${result.fund},
el cual tiene una tasa de rendimiento anual promedio de los últimos 5 años del ${(result.rate*100).toFixed(2)}% anual.


<br><br>

Reinvirtiendo tu devolución del SAT y aprovechando los rendimientos exentos de tu PPR podrás obtener mayores beneficios.
Proyección estimada basada en rendimientos históricos del fondo correspondiente.

<br><br>

*Para efectos de este cálculo, tus aportaciones mensuales se consideran en una sola exhibición al inicio de cada año.


<br><br>

**Rendimientos pasados no garantizan rendimientos futuros.

</p>


</div>


</div>

`;



}



function formatMoney(value){

return value.toLocaleString(
"es-MX",
{
style:"currency",
currency:"MXN"
}
);

}



window.showFutureResult=showFutureResult;