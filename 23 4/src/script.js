const preguntas = [
"¿Por donde nos conocimos?",
"¿Porque nos conocimos?",
"¿Quién respondió primero?",
"¿Cual fue el primer apodo que te puse?",
"¿Que haciamos juntas?",
"¿En qué fecha empezamos?"
];

const respuestas = [
"tiktok",
"porque te conteste un video",
"yo",
"lunita",
"jugar roblox",
"23 de agosto"
];
 const cartas = [

`Mi amor, felices 7 meses estoy muy feliz por poder estar contigo y porque a pesar de tantas cosas que han pasado entre nosotras y las veces que nos hemos separado, este amor sigue intacto y seguimos estando la una para la otra siempre. No sabes lo agradecida que estoy por tanto, por conocerte, por estar a tu lado por poder ser quien te ame y este contigo, ya que eso es la mejor cosa que me ha pasado en la vida y preferiría dejar de ser cualquier cosa antes que dejar de ser tu novia (para siempre me refiero JAJAJ). No me veo con nadie más que no seas tu y sé que hay acciones que han hecho parecer lo contrario, pero es en serio. Cada vez que te digo que eres el amor de mi vida y que lo quiero todo contigo es verdad, porque esto que siento por vos no me paso nunca antes y no creo que me vuelva a pasar Lunita, porque eres tú no quiero a nadie mas y podrían pasar miles de cosas pero toda la vida seguirá siendo así.`,

`Te quiero pedir perdón por todos lo que he hecho mal y por todas las veces que te he hecho sentir mal, pero mas específicamente lo que paso este último mes y por que se que por eso pude haber perdido esto para siempre y haberte perdido a ti que eres lo que mas me importa en la vida y quien quiero tener a mi lado siempre, ya que tu misma le diste un sentido diferente a mi vida y si ya no estas en ella no volvería a ser tan horrible como antes y estoy muy segura de eso. Perdón porque las cosas no sean ya como antes y no hagamos tantas cosas juntas pero mi amor eso no significa que ya no te ame y que no quiera hacer nada contigo, solo que bueno ya sabes que estos últimos meses mi vida a estado cambiando mucho y eso me ha hecho ser medio distante, pero bueno.`,

`Te pienso siempre sin importar donde este, con quien este o lo que sea que este haciendo, prácticamente eres en lo único que esta en mi mente 24/7 y ese amor que siento por ti es cada día mas enorme que nunca ya que yo jamás te dejaría de querer porque eres la persona que mas amo en el mundo y la única que me importa verdaderamente porque no me veo con nadie mas y me incomodo solo imaginármelo. Se que tengo que mejorar muchas cosas pero igual yo quiero que seas tu para todas y toda la vida.`,

`Siento que jamás en la vida me van a alcanzar las palabras para expresar todo el amor que siento por ti y lo agradecida que estoy de tener en mi vida a alguien como tú. Porque no es solo lo que eres, sino todo lo que pocas en mi, toda esa calma que me das incluso en los días en los que ni yo misma sé sentirme bien. Y es que nunca me voy a cansar de decírtelo, porque es verdad, te volviste ese lugar en el que siempre quiero estar, eso que está bien incluso cuando todo lo demás se siente bastante mal. Aunque a veces discutamos por cualquier cosa, sigues siendo esa persona que me da paz, seguridad y una tranquilidad que solo tú sabes cómo brindármela, con momentos bonitos que nunca son incomodos. Eres también lo que me motiva a ser mejor solo para poder estar mas tiempo a tu lado y poder cumplir lo que queremos juntas.`,

`Mi princesa, para mí siempre serás la mejor niña de todas, la mas tierna, la mas linda, la mas cariñosa, la mas inteligente, la mas cansona (Mentira eso no JAJAJ), en fin, la mejor de todas. No podría describirte lo perfecta que eres ante mis ojos y como siempre lo serás, tampoco puedo describir lo mucho que amo cada cosa de ti, hasta lo mas pequeño o mas bobo lo amo solo porque es de ti o viene de ti y no se si en algún momento te lo dije pero tu eres la niña que siempre había querido a mi lado y me haz dado la mejor relación que he tenido y de seguro la mas linda que tendré en mi vida`,

`En conclusión: Gracias por soportarme, por amarme tanto, por ser tan bonita y por seguir acá a pesar de todo. Perdón por todo lo que he hecho mal y por mi estupidez ante muchas situaciones. Espero que podamos pasar el resto de nuestras vidas juntas y que estos meses se vuelvan años en los cuales podamos coleccionar más recuerdos lindos y podamos cumplir lo que queramos. Espero que nunca mas terminemos porque es muy horrible estar sin ti y sin poder tratarte como mi novia. Felices 7 meses mi amor, te amo un mundo y muchooo pero muchoo mass, jamas lo olvides.`

];
const clases = ["robleis","miko","alondrissa","snoopy","pocoyo","kuromi"];

let desbloqueadas = 0;

function renderBotones() {
  const cont = document.getElementById("cartas");
  cont.innerHTML = "";

  for(let i=0;i<cartas.length;i++){
    let btn = document.createElement("button");
    btn.innerText = i === cartas.length-1 ? "Carta Final ❤️" : "Carta " + (i+1);

    if(i > desbloqueadas){
      btn.disabled = true;
    }

    btn.onclick = () => abrirPregunta(i);
    cont.appendChild(btn);
  }
}

function abrirPregunta(i){
  const modal = document.getElementById("modal");
  const content = document.getElementById("modalContent");

  content.innerHTML = `
    <h3>${preguntas[i]}</h3>
    <input id="inputRespuesta" placeholder="Escribe aquí...">
    <div class="modal-buttons">
      <button onclick="verificar(${i})">Responder</button>
      <button onclick="cerrar()">Cerrar</button>
    </div>
  `;

  modal.style.display = "block";
}

function verificar(i){
  let val = document.getElementById("inputRespuesta").value.toLowerCase().trim();

  if(val === respuestas[i]){
    mostrarCarta(i);
    if(i === desbloqueadas) desbloqueadas++;
    renderBotones();
  } else {
    alert("Respuesta incorrecta");
  }
}

function mostrarCarta(i){
  const content = document.getElementById("modalContent");

  content.innerHTML = `
    <div class="${clases[i]}">
      <h2>${i === cartas.length-1 ? "Carta Final ❤️" : "Carta " + (i+1)}</h2>
      <p>${cartas[i]}</p>
      <div class="modal-buttons">
        <button onclick="cerrar()">Cerrar</button>
      </div>
    </div>
  `;
}

function cerrar(){
  document.getElementById("modal").style.display = "none";
}

renderBotones();