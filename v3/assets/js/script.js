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
// EXPORT AND RESET SCREEN
var soonTo = null;

function showInfoScreen() {
  document.getElementById("infoScreen").style.display = "flex";
  document.title = "[👉] Info";

  soonTo = "info";
  console.log(soonTo);
}

function showExportScreen() {
  document.getElementById("exportScreen").style.display = "flex";
  document.title = "✅ Exporter?";

  soonTo = "export";
  console.log(soonTo);
}

function showResetScreen() {
  document.getElementById("resetScreen").style.display = "flex";
  document.title = "🚨 Réinitialiser?";

  soonTo = "reset";
  console.log(soonTo);
}

function hideScreen() {
  document.getElementById("exportScreen").style.display = "none";
  document.getElementById("resetScreen").style.display = "none";
  document.getElementById("infoScreen").style.display = "none";
  document.title = "🤨 Visage Animé Perlin";
  soonTo = "null";
}

function clickButton(who) {
  document.getElementById(who).classList.add("active");
  setTimeout(function () {
    document.getElementById(who).classList.remove("active");
  }, 200);
  document.getElementById(who).click();
}

document.addEventListener("keydown", function (event) {
  // console.log(event);
  if (event.code === "Space") {
    event.preventDefault();
    clickButton("playBtn");
  } else if (event.code === "KeyR") {
    event.preventDefault();
    clickButton("resetBtn");
  } else if (event.code === "KeyE") {
    event.preventDefault();
    clickButton("exportBtn");
  } else if (event.code === "Escape") {
    event.preventDefault();
    hideScreen();
  } else if (event.code === "Enter") {
    event.preventDefault();
    if (soonTo == "export") {
      alert("Export en cours!");
    } else if (soonTo == "reset") {
      document.getElementById("btnReload").click();
    } else if (soonTo == "null") {
    }
  }
});

// EXPRESSION INFO TEXT
var actualExpression = "-";
var durationTransition = 0;
var durationPose = 0;
var durationDefault = 400;

const galleryFaces = document.querySelectorAll(".galleryFace");

for (let i = 0; i < galleryFaces.length; i++) {
  galleryFaces[i].addEventListener("click", function () {
    actualExpression = galleryFaces[i].getAttribute("data-expresion");
    chooseExpression();
    // putExpressionOnPreview();
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
  document.getElementById("face").classList.add("changeFace");
  setTimeout(function () {
    document.getElementById("face").classList.remove("changeFace");
  }, 500);
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

function updateRecap() {
  document.getElementById("actualExpression").innerHTML = actualExpression;

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

updateRecap();
