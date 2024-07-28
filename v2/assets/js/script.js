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
var durationDefault = 400;

const galleryFaces = document.querySelectorAll(".galleryFace");

for (let i = 0; i < galleryFaces.length; i++) {
  galleryFaces[i].addEventListener("click", function () {
    actualExpression = galleryFaces[i].getAttribute("data-expresion");
    document.getElementById("actualExpressionTop").innerHTML = actualExpression;
    document.getElementById("actualExpression").innerHTML = actualExpression;
    chooseExpression();
    putExpressionOnPreview();
    updateRecap();
  });
}

function chooseExpression() {
  galleryFacesAll = document.querySelectorAll(".galleryFace");
  for (let i = 0; i < galleryFacesAll.length; i++) {
    galleryFacesAll[i].classList.remove("selectedFace");
  }
  document
    .querySelector("[data-expresion=" + actualExpression + "]")
    .classList.add("selectedFace");
}

function putExpressionOnPreview() {
  var visageExpression = "visage" + actualExpression;
  var levresExpression = "levres" + actualExpression;
  var palaisExpression = "palais" + actualExpression;
  var dentsExpression = "dents" + actualExpression;
  var sourcilGaucheExpression = "sourcilGauche" + actualExpression;
  var sourcilDroitExpression = "sourcilDroit" + actualExpression;
  console.log(visageExpression);

  svgMorphing(
    visage,
    svgPaths["visageNeutre"],
    svgPaths[visageExpression],
    durationDefault
  );

  svgMorphing(
    levres,
    svgPaths["levresNeutre"],
    svgPaths[levresExpression],
    durationDefault
  );
  svgMorphing(
    palais,
    svgPaths["palaisNeutre"],
    svgPaths[palaisExpression],
    durationDefault
  );
  svgMorphing(
    dents,
    svgPaths["dentsNeutre"],
    svgPaths[dentsExpression],
    durationDefault
  );
  svgMorphing(
    sourcilGauche,
    svgPaths["sourcilGaucheNeutre"],
    svgPaths[sourcilGaucheExpression],
    durationDefault
  );
  svgMorphing(
    sourcilDroit,
    svgPaths["sourcilDroitNeutre"],
    svgPaths[sourcilDroitExpression],
    durationDefault
  );
}

function playAnimation() {
  var visageExpression = "visage" + actualExpression;
  var levresExpression = "levres" + actualExpression;
  var palaisExpression = "palais" + actualExpression;
  var dentsExpression = "dents" + actualExpression;
  var sourcilGaucheExpression = "sourcilGauche" + actualExpression;
  var sourcilDroitExpression = "sourcilDroit" + actualExpression;

  var durationTransition = parseInt(
    document.getElementById("durationTransition").value
  );
  var durationPose = parseInt(document.getElementById("durationPose").value);
  console.log("Transition: " + durationTransition);
  console.log("Pose: " + durationPose);

  console.log("playing");

  svgMorphing(
    visage,
    svgPaths["visageNeutre"],
    svgPaths[visageExpression],
    durationTransition
  );
  svgMorphing(
    levres,
    svgPaths["levresNeutre"],
    svgPaths[levresExpression],
    durationTransition
  );
  svgMorphing(
    palais,
    svgPaths["palaisNeutre"],
    svgPaths[palaisExpression],
    durationTransition
  );
  svgMorphing(
    dents,
    svgPaths["dentsNeutre"],
    svgPaths[dentsExpression],
    durationTransition
  );
  svgMorphing(
    sourcilGauche,
    svgPaths["sourcilGaucheNeutre"],
    svgPaths[sourcilGaucheExpression],
    durationTransition
  );
  svgMorphing(
    sourcilDroit,
    svgPaths["sourcilDroitNeutre"],
    svgPaths[sourcilDroitExpression],
    durationTransition
  );
  setTimeout(() => {
    console.log("changin");

    svgMorphing(
      visage,
      svgPaths[visageExpression],
      svgPaths["visageNeutre"],
      durationTransition
    );

    svgMorphing(
      levres,
      svgPaths[levresExpression],
      svgPaths["levresNeutre"],
      durationTransition
    );
    svgMorphing(
      palais,
      svgPaths[palaisExpression],
      svgPaths["palaisNeutre"],
      durationTransition
    );
    svgMorphing(
      dents,
      svgPaths[dentsExpression],
      svgPaths["dentsNeutre"],
      durationTransition
    );
    svgMorphing(
      sourcilGauche,
      svgPaths[sourcilGaucheExpression],
      svgPaths["sourcilGaucheNeutre"],
      durationTransition
    );
    svgMorphing(
      sourcilDroit,
      svgPaths[sourcilDroitExpression],
      svgPaths["sourcilDroitNeutre"],
      durationTransition
    );
  }, durationTransition + durationPose);
}

document.getElementById("playBtn").addEventListener("click", playAnimation);

function updateRecap() {
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
