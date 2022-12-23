import React from "react";
import 'bootstrap'



class StartStopInterface extends React.Component{
    displayMediaOptions;
    videoElm;

    constructor(props) {
        super(props);
        this.videoElm = React.createRef()
        this.displayMediaOptions = {
            video: {
                displaySurface: "window"
            },
            audio: false,
            surfaceSwitching: "include",
            selfBrowserSurface: "exclude",
            systemAudio: "exclude"
        }
    }

    startCapture = async () => {
        let captureStream = null;
        console.log('click', this)

        try {
        this.videoElm.current.srcObject = await navigator.mediaDevices.getDisplayMedia(this.displayMediaOptions);
        await this.dumpOptions();
        } catch (err) {
            console.error(`Error: ${err}`);
        }
        return captureStream;
    }
    stopCapture = async () => {
        let tracks = this.videoElm.current.srcObject.getTracks();

        tracks.forEach((track) => track.stop());
        this.videoElm.current.srcObject = null;
    }
    dumpOptions = async () => {
        const videoTrack = this.videoElm.current.srcObject.getVideoTracks()[0];

        console.info("Track settings:");
        console.info(JSON.stringify(videoTrack.getSettings(), null, 2));
        console.info("Track constraints:");
        console.info(JSON.stringify(videoTrack.getConstraints(), null, 2));
    }

    render() {
        return(
            <div>
                <button onClick={this.startCapture}>Start Recording</button>
                <button onClick={this.stopCapture}>Stop Recording</button>
                <video ref={this.videoElm} autoPlay={true} width={650} height={450} controls={true} ></video>
                <strong>Log:</strong>
                <br />
                <pre id="log"></pre>
            </div>
        )
    }
}
export default StartStopInterface