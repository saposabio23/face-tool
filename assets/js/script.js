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
var actualExpression = "-";
var durationTransition = 0;
var durationPose = 0;

const galleryFaces = document.querySelectorAll(".galleryFace");

for (let i = 0; i < galleryFaces.length; i++) {
  galleryFaces[i].addEventListener("click", function () {
    actualExpression = galleryFaces[i].getAttribute("data-expresion");
    selectFace();
    chooseExpression();
    updateRecapNumbers();
  });
}

function selectFace() {
  galleryFacesAll = document.querySelectorAll(".galleryFace");
  for (let i = 0; i < galleryFacesAll.length; i++) {
    galleryFacesAll[i].classList.remove("selectedFace");
  }
  document
    .querySelector("[data-expresion=" + actualExpression + "]")
    .classList.add("selectedFace");
}

function chooseExpression() {
  if (actualExpression == "joie") {
    document.getElementById("actualExpressionTop").innerHTML = "Joie";

    document.getElementById("actualExpression").innerHTML = "Joie";

    svgMorphing(visage, visageContent, visageContent);
    svgMorphing(levres, levresContent, levresContent);
    svgMorphing(palais, palaisContent, palaisContent);
    svgMorphing(dents, dentsContent, dentsContent);
    svgMorphing(sourcilGauche, sourcilGaucheContent, sourcilGaucheContent);
    svgMorphing(sourcilDroit, sourcilDroitContent, sourcilDroitContent);
  }
}

function playAnimation() {
  console.log("play");
}

document.getElementById("playBtn").addEventListener("click", playAnimation);

function updateRecapNumbers() {
  var durationTransition = parseInt(
    document.getElementById("durationTransition").value
  );

  var durationPose = parseInt(document.getElementById("durationPose").value);

  var durationTotal = durationTransition + durationPose;

  document.getElementById("durationTransitionRecap").innerHTML =
    durationTransition + " ms";

  document.getElementById("durationPoseRecap").innerHTML = durationPose + " ms";

  document.getElementById("durationAllRecap").innerHTML = durationTotal + " ms";

  // console.log(actualExpression);
  // console.log(durationTransition);
  // console.log(durationPose);
  // console.log(durationTotal);
}
