let btnTriste = document.getElementById("btnTriste");
let btnNeutre = document.getElementById("btnNeutre");
let btnContent = document.getElementById("btnContent");

// MORPHING FUNCTION
function svgMorphing(target, from, to, duration) {
  let timeline = anime({
    duration: duration,
    targets: target,
    d: [
      {
        value: [from, to],
      },
    ],
    easing: "easeOutCubic",
  });
}

// EXPRESSION INFO TEXT
var actualExpression = "neutre";
console.log(actualExpression);

function updateExpressionInfo() {
  document.getElementById("actualExpression").innerHTML = actualExpression;
}

updateExpressionInfo();

// DURATION+

// BUTTONS LAUNCH EXRPESSION
btnContent.addEventListener("click", () => {
  var duration = document.getElementById("duration").value;
  if (actualExpression == "neutre") {
    svgMorphing(visage, visageNeutre, visageContent, duration);
    svgMorphing(levres, levresNeutre, levresContent, duration);
    svgMorphing(palais, palaisNeutre, palaisContent, duration);
    svgMorphing(
      sourcilGauche,
      sourcilGaucheNeutre,
      sourcilGaucheContent,
      duration
    );
    svgMorphing(
      sourcilDroit,
      sourcilDroitNeutre,
      sourcilDroitContent,
      duration
    );
  }
  if (actualExpression == "content") {
    svgMorphing(visage, visageContent, visageContent, duration);
    svgMorphing(levres, levresContent, levresContent, duration);
    svgMorphing(palais, palaisContent, palaisContent, duration);
    svgMorphing(
      sourcilGauche,
      sourcilGaucheContent,
      sourcilGaucheContent,
      duration
    );
    svgMorphing(
      sourcilDroit,
      sourcilDroitContent,
      sourcilDroitContent,
      duration
    );
  }
  if (actualExpression == "triste") {
    svgMorphing(visage, visageTriste, visageContent, duration);
    svgMorphing(levres, levresTriste, levresContent, duration);
    svgMorphing(palais, palaisTriste, palaisContent, duration);
    svgMorphing(
      sourcilGauche,
      sourcilGaucheTriste,
      sourcilGaucheContent,
      duration
    );
    svgMorphing(
      sourcilDroit,
      sourcilDroitTriste,
      sourcilDroitContent,
      duration
    );
  }
  actualExpression = "content";
  updateExpressionInfo();
});

btnNeutre.addEventListener("click", () => {
  var duration = document.getElementById("duration").value;
  if (actualExpression == "neutre") {
    svgMorphing(visage, visageNeutre, visageNeutre, duration);
    svgMorphing(levres, levresNeutre, levresNeutre, duration);
    svgMorphing(palais, palaisNeutre, palaisNeutre, duration);
    svgMorphing(
      sourcilGauche,
      sourcilGaucheNeutre,
      sourcilGaucheNeutre,
      duration
    );
    svgMorphing(sourcilDroit, sourcilDroitNeutre, sourcilDroitNeutre, duration);
  }
  if (actualExpression == "content") {
    svgMorphing(visage, visageContent, visageNeutre, duration);
    svgMorphing(levres, levresContent, levresNeutre, duration);
    svgMorphing(palais, palaisContent, palaisNeutre, duration);
    svgMorphing(
      sourcilGauche,
      sourcilGaucheContent,
      sourcilGaucheNeutre,
      duration
    );
    svgMorphing(
      sourcilDroit,
      sourcilDroitContent,
      sourcilDroitNeutre,
      duration
    );
  }
  if (actualExpression == "triste") {
    svgMorphing(visage, visageTriste, visageNeutre, duration);
    svgMorphing(levres, levresTriste, levresNeutre, duration);
    svgMorphing(palais, palaisTriste, palaisNeutre, duration);
    svgMorphing(
      sourcilGauche,
      sourcilGaucheTriste,
      sourcilGaucheNeutre,
      duration
    );
    svgMorphing(sourcilDroit, sourcilDroitTriste, sourcilDroitNeutre, duration);
  }
  actualExpression = "neutre";
  updateExpressionInfo();
});

btnTriste.addEventListener("click", () => {
  var duration = document.getElementById("duration").value;
  if (actualExpression == "content") {
    svgMorphing(visage, visageContent, visageTriste, duration);
    svgMorphing(levres, levresContent, levresTriste, duration);
    svgMorphing(palais, palaisContent, palaisTriste, duration);
    svgMorphing(
      sourcilGauche,
      sourcilGaucheContent,
      sourcilGaucheTriste,
      duration
    );
    svgMorphing(
      sourcilDroit,
      sourcilDroitContent,
      sourcilDroitTriste,
      duration
    );
  }
  if (actualExpression == "neutre") {
    svgMorphing(visage, visageNeutre, visageTriste, duration);
    svgMorphing(levres, levresNeutre, levresTriste, duration);
    svgMorphing(palais, palaisNeutre, palaisTriste, duration);
    svgMorphing(
      sourcilGauche,
      sourcilGaucheNeutre,
      sourcilGaucheTriste,
      duration
    );
    svgMorphing(sourcilDroit, sourcilDroitNeutre, sourcilDroitTriste, duration);
  }
  if (actualExpression == "triste") {
    svgMorphing(visage, visageTriste, visageTriste, duration);
    svgMorphing(levres, levresTriste, levresTriste, duration);
    svgMorphing(palais, palaisTriste, palaisTriste, duration);
    svgMorphing(
      sourcilGauche,
      sourcilGaucheTriste,
      sourcilGaucheTriste,
      duration
    );
    svgMorphing(sourcilDroit, sourcilDroitTriste, sourcilDroitTriste, duration);
  }
  actualExpression = "triste";
  updateExpressionInfo();
});
