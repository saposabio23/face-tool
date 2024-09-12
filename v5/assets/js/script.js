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
  document.title = "❓ Info";

  soonTo = "info";
  console.log(soonTo);
}

function showTitles() {
  var galleryTitles = document.querySelectorAll(".galleryFace span")

  for (let i = 0; i < galleryTitles.length; i++) {
    galleryTitles[i].classList.toggle("hidden");
  }
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
var actualExpression = "Neutre";
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
  console.log("Emotio nselectionée: " + actualExpression)
}


function playAnimation() {
  var cheveuxExpression = "cheveux" + actualExpression;
  var visageExpression = "visage" + actualExpression;
  var sourcilsExpression = "sourcils" + actualExpression;
  var nezExpression = "nez" + actualExpression;
  var blancExpression = "blanc" + actualExpression;
  var irisExpression = "iris" + actualExpression;
  var pupilleExpression = "pupille" + actualExpression;
  var cacheOeilExpression = "cacheOeil" + actualExpression;
  var ombreSourcilExpression = "ombreSourcil" + actualExpression;
  var contourOeilExpression = "contourOeil" + actualExpression;
  var levresHautExpression = "levresHaut" + actualExpression;
  var levresBasExpression = "levresBas" + actualExpression;
  var gorgeExpression = "gorge" + actualExpression;
  var dentsExpression = "dents" + actualExpression;

  var durationTransition = parseInt(
    document.getElementById("durationTransition").value
  );
  var durationPose = parseInt(document.getElementById("durationPose").value);

  var lineWidth = document.querySelector('.line').offsetWidth;

  document.querySelector(".dot").animate([
    { marginLeft: '0%' },
    { marginLeft: '100%' }
  ], {
    duration: durationTransition + durationPose + durationTransition,
    fill: 'forwards'
  });


  svgMorphing(
    cheveux,
    svgPaths["cheveuxNeutre"],
    svgPaths[cheveuxExpression],
    durationTransition
  );

  svgMorphing(
    visage,
    svgPaths["visageNeutre"],
    svgPaths[visageExpression],
    durationTransition
  );
  svgMorphing(
    sourcils,
    svgPaths["sourcilsNeutre"],
    svgPaths[sourcilsExpression],
    durationTransition
  );
  svgMorphing(
    nez,
    svgPaths["nezNeutre"],
    svgPaths[nezExpression],
    durationTransition
  );
  svgMorphing(
    blanc,
    svgPaths["blancNeutre"],
    svgPaths[blancExpression],
    durationTransition
  );
  svgMorphing(
    iris,
    svgPaths["irisNeutre"],
    svgPaths[irisExpression],
    durationTransition
  );
  svgMorphing(
    pupille,
    svgPaths["pupilleNeutre"],
    svgPaths[pupilleExpression],
    durationTransition
  );
  svgMorphing(
    cacheOeil,
    svgPaths["cacheOeilNeutre"],
    svgPaths[cacheOeilExpression],
    durationTransition
  );
  svgMorphing(
    ombreSourcil,
    svgPaths["ombreSourcilNeutre"],
    svgPaths[ombreSourcilExpression],
    durationTransition
  );
  svgMorphing(
    contourOeil,
    svgPaths["contourOeilNeutre"],
    svgPaths[contourOeilExpression],
    durationTransition
  );
  svgMorphing(
    levresHaut,
    svgPaths["levresHautNeutre"],
    svgPaths[levresHautExpression],
    durationTransition
  );
  svgMorphing(
    levresBas,
    svgPaths["levresBasNeutre"],
    svgPaths[levresBasExpression],
    durationTransition
  );
  svgMorphing(
    gorge,
    svgPaths["gorgeNeutre"],
    svgPaths[gorgeExpression],
    durationTransition
  );
  svgMorphing(
    dents,
    svgPaths["dentsNeutre"],
    svgPaths[dentsExpression],
    durationTransition
  );
  setTimeout(() => {
    svgMorphing(
      cheveux,
      svgPaths[cheveuxExpression],
      svgPaths["cheveuxNeutre"],
      durationTransition
    );

    svgMorphing(
      visage,
      svgPaths[visageExpression],
      svgPaths["visageNeutre"],
      durationTransition
    );
    svgMorphing(
      sourcils,
      svgPaths[sourcilsExpression],
      svgPaths["sourcilsNeutre"],
      durationTransition
    );
    svgMorphing(
      nez,
      svgPaths[nezExpression],
      svgPaths["nezNeutre"],
      durationTransition
    );
    svgMorphing(
      blanc,
      svgPaths[blancExpression],
      svgPaths["blancNeutre"],
      durationTransition
    );
    svgMorphing(
      iris,
      svgPaths[irisExpression],
      svgPaths["irisNeutre"],
      durationTransition
    );
    svgMorphing(
      pupille,
      svgPaths[pupilleExpression],
      svgPaths["pupilleNeutre"],
      durationTransition
    );
    svgMorphing(
      cacheOeil,
      svgPaths[cacheOeilExpression],
      svgPaths["cacheOeilNeutre"],
      durationTransition
    );
    svgMorphing(
      ombreSourcil,
      svgPaths[ombreSourcilExpression],
      svgPaths["ombreSourcilNeutre"],
      durationTransition
    );
    svgMorphing(
      contourOeil,
      svgPaths[contourOeilExpression],
      svgPaths["contourOeilNeutre"],
      durationTransition
    );
    svgMorphing(
      levresHaut,
      svgPaths[levresHautExpression],
      svgPaths["levresHautNeutre"],
      durationTransition
    );
    svgMorphing(
      levresBas,
      svgPaths[levresBasExpression],
      svgPaths["levresBasNeutre"],
      durationTransition
    );
    svgMorphing(
      gorge,
      svgPaths[gorgeExpression],
      svgPaths["gorgeNeutre"],
      durationTransition
    );
    svgMorphing(
      dents,
      svgPaths[dentsExpression],
      svgPaths["dentsNeutre"],
      durationTransition
    );
  }, durationTransition + durationPose);

  document.getElementById("playBtn").classList.remove("btnPlaying");
}

function updateRecap() {
  document.getElementById("actualExpression").innerHTML = actualExpression;

  var durationTransition = parseInt(
    document.getElementById("durationTransition").value
  );
  var durationPose = parseInt(document.getElementById("durationPose").value);

  var durationTotal = durationTransition + durationPose + durationTransition;

  document.getElementById("durationTransitionRecap").innerHTML =
    durationTransition + " ms";

  document.getElementById("durationPoseRecap").innerHTML = durationPose + " ms";

  document.getElementById("durationAllRecap").innerHTML = durationTotal + " ms";
}


document.querySelector("#durationTransition").addEventListener("input", updateCounters);
document.querySelector("#durationPose").addEventListener("input", updateCounters);

function updateCounters(e) {
  updateRecap();

}

updateRecap()



// function putExpressionOnPreview() {
//   var cheveuxExpression = "cheveux" + actualExpression;
//   var visageExpression = "visage" + actualExpression;
//   var sourcilsExpression = "sourcils" + actualExpression;
//   var nezExpression = "nez" + actualExpression;
//   var blancExpression = "blanc" + actualExpression;
//   var irisExpression = "iris" + actualExpression;
//   var pupilleExpression = "pupille" + actualExpression;
//   var cacheOeilExpression = "cacheOeil" + actualExpression;
//   var ombreSourcilExpression = "ombreSourcil" + actualExpression;
//   var contourOeilExpression = "contourOeil" + actualExpression;
//   var levresExpression = "levres" + actualExpression;
//   var gorgeExpression = "gorge" + actualExpression;
//   var dentsExpression = "dents" + actualExpression;

//   console.log(visageExpression);

//   svgMorphing(
//     cheveux,
//     svgPaths["cheveuxNeutre"],
//     svgPaths[cheveuxExpression],
//     durationDefault
//   );

//   svgMorphing(
//     visage,
//     svgPaths["visageNeutre"],
//     svgPaths[visageExpression],
//     durationDefault
//   );
//   svgMorphing(
//     sourcils,
//     svgPaths["sourcilsNeutre"],
//     svgPaths[sourcilsExpression],
//     durationDefault
//   );
//   svgMorphing(
//     nez,
//     svgPaths["nezNeutre"],
//     svgPaths[nezExpression],
//     durationDefault
//   );
//   svgMorphing(
//     blanc,
//     svgPaths["blancNeutre"],
//     svgPaths[blancExpression],
//     durationDefault
//   );
//   svgMorphing(
//     iris,
//     svgPaths["irisNeutre"],
//     svgPaths[irisExpression],
//     durationDefault
//   );
//   svgMorphing(
//     pupille,
//     svgPaths["pupilleNeutre"],
//     svgPaths[pupilleExpression],
//     durationDefault
//   );
//   svgMorphing(
//     cacheOeil,
//     svgPaths["cacheOeilNeutre"],
//     svgPaths[cacheOeilExpression],
//     durationDefault
//   );
//   svgMorphing(
//     ombreSourcil,
//     svgPaths["ombreSourcilNeutre"],
//     svgPaths[ombreSourcilExpression],
//     durationDefault
//   );
//   svgMorphing(
//     contourOeil,
//     svgPaths["contourOeilNeutre"],
//     svgPaths[contourOeilExpression],
//     durationDefault
//   );
//   svgMorphing(
//     levres,
//     svgPaths["levresNeutre"],
//     svgPaths[levresExpression],
//     durationDefault
//   );
//   svgMorphing(
//     gorge,
//     svgPaths["gorgeNeutre"],
//     svgPaths[gorgeExpression],
//     durationDefault
//   );
//   svgMorphing(
//     dents,
//     svgPaths["dentsNeutre"],
//     svgPaths[dentsExpression],
//     durationDefault
//   );
// }