import React from "react";
import 'bootstrap'



class StartStopInterface extends React.Component{
    startCapture;
    stopCapture;
    displayMediaOptions;
    startElm;
    stopElm;
    videoElm;
    logElm;
    dumpOptions;

    constructor(props) {
        super(props);
        this.displayMediaOptions = {
            video: {
                displaySurface: "window"
            },
            audio: false,
            surfaceSwitching: "include",
            selfBrowserSurface: "exclude",
            systemAudio: "exclude"
        }
        this.startCapture = async () => {
            let captureStream = null;
            console.log('click')

            // try {
            this.videoElm = document.getElementById('video');
                this.videoElm.srcObject = await navigator.mediaDevices.getDisplayMedia(this.displayMediaOptions);
                this.dumpOptions();
            // } catch (err) {
            //     console.error(`Error: ${err}`);
            // }
            return captureStream;
        }
        // this.startElm = document.getElementById('start');
        // this.stopElm = document.getElementById('stop');
        // this.logElm = document.getElementById('log');
        // this.videoElm = document.getElementById('video');
        this.stopCapture = async () => {
            this.videoElm = document.getElementById('video');
            let tracks = this.videoElm.srcObject.getTracks();

            tracks.forEach((track) => track.stop());
            this.videoElm.srcObject = null;
        }
        this.dumpOptions = async () => {
            this.videoElm = document.getElementById('video');
            const videoTrack = this.videoElm.srcObject.getVideoTracks()[0];

            console.info("Track settings:");
            console.info(JSON.stringify(videoTrack.getSettings(), null, 2));
            console.info("Track constraints:");
            console.info(JSON.stringify(videoTrack.getConstraints(), null, 2));
        }

    }


    render() {
        return(
            <div>
                <button onClick={this.startCapture}>Start Recording</button>
                <button onClick={this.stopCapture}>Stop Recording</button>
                <video id={'video'}></video>
                <strong>Log:</strong>
                <br />
                <pre id="log"></pre>
            </div>
        )
    }
}
export default StartStopInterface