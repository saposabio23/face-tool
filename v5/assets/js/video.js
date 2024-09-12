let preview = document.getElementById("preview");
let recording = document.getElementById("recording");
let startButton = document.getElementById("startButton");
let downloadButton = document.getElementById("downloadButton");

function wait(delayInMS) {
    return new Promise(resolve => setTimeout(resolve, delayInMS));
}
function startRecording(stream, lengthInMS) {
    let recorder = new MediaRecorder(stream);
    let data = [];

    recorder.ondataavailable = event => data.push(event.data);
    recorder.start();

    let stopped = new Promise((resolve, reject) => {
        recorder.onstop = resolve;
        recorder.onerror = event => reject(event.name);
    });

    let recorded = wait(lengthInMS).then(
        () => recorder.state == "recording" && recorder.stop()
    );

    return Promise.all([
        stopped,
        recorded
    ])
        .then(() => data);
}

startButton.addEventListener("click", async function () {
    try {
        // Get the media stream
        const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });

        // Update the UI elements
        document.querySelector(".gallery").style.display = "none";
        // document.querySelector(".line").style.display = "none";
        document.querySelector(".editor").style.display = "none";
        document.querySelector(".header").style.display = "none";
        document.querySelector(".content").style.height = "100%";
        document.querySelector(".preview").style.opacity = "0.5";

        hideScreen();
        openFullscreen()

        // Check time to record
        var durationTransition = parseInt(
            document.getElementById("durationTransition").value
        );
        var durationPose = parseInt(document.getElementById("durationPose").value);

        var durationTotal = durationTransition + durationPose + durationTransition;

        let recordingTimeMS = durationTotal + 80;

        console.log(recordingTimeMS)

        // Set up the video preview
        preview.srcObject = stream;
        downloadButton.href = stream;
        preview.captureStream = preview.captureStream || preview.mozCaptureStream;

        // Wait until the video is playing
        await new Promise(resolve => (preview.onplaying = resolve));

        // Start countdown timer before recording
        document.getElementById("timer").innerHTML = "5";
        document.getElementById("timer").style.display = "block";

        setTimeout(function () {
            document.getElementById("timer").innerHTML = "4";
            setTimeout(function () {
                document.getElementById("timer").innerHTML = "3";
                setTimeout(function () {
                    document.getElementById("timer").innerHTML = "2";
                    setTimeout(function () {
                        document.getElementById("timer").innerHTML = "1";
                        setTimeout(function () {
                            document.getElementById("timer").style.display = "none";
                            document.querySelector(".preview").style.opacity = "1";
                            setTimeout(function () {
                                playAnimation();  // Play animation after countdown

                                // Start recording after the countdown
                                startRecording(preview.captureStream(), recordingTimeMS).then(recordedChunks => {
                                    // Handle recorded video
                                    const recordedBlob = new Blob(recordedChunks, { type: "video/webm" });
                                    recording.src = URL.createObjectURL(recordedBlob);
                                    downloadButton.href = recording.src;
                                    downloadButton.download = "Visage" + actualExpression + "_t" + durationTransition + "-p" + durationPose + ".webm";
                                    downloadButton.click();


                                    document.querySelector(".gallery").style.display = "grid";
                                    // document.querySelector(".line").style.display = "none";
                                    document.querySelector(".editor").style.display = "flex";
                                    document.querySelector(".header").style.display = "flex";
                                    document.querySelector(".content").style.height = "calc(100% - 70px)";
                                    alert("Visage" + actualExpression + "_t" + durationTransition + "-p" + durationPose + ".webm téléchargé!");
                                    closeFullscreen()
                                });
                            }, 80);
                        }, 1000);  // After "1"
                    }, 1000);  // After "2"
                }, 1000);  // After "3"
            }, 1000);  // After "4"
        }, 1000);  // After "5"
    } catch (error) {
        console.error("An error occurred while recording the video:", error);
    }

}, false);



function openFullscreen() {
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}


function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
}