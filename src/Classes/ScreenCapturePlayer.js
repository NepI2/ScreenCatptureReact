




class ScreenCapturePlayer {
    _videoElement;
    _displayMediaOptions = {
        video: {
            displaySurface: "window"
        },
        audio: false,
        surfaceSwitching: "include",
        selfBrowserSurface: "exclude",
        systemAudio: "exclude"
    };

    constructor(videoElement) {
        this._videoElement = videoElement;
        console.log("capture" + `${videoElement}`)
    }

    startCapture = async () => {
        try {
            console.log("startCapture" + `${this._videoElement}` + `${this._videoElement}`)
            this._videoElement.current.srcObject = await navigator.mediaDevices.getDisplayMedia(this._displayMediaOptions?undefined:undefined);

            await this._dumpOptions(this._videoElement.current.srcObject);
        } catch(err){
            console.log(`Class Player error: ${err.toString()}`)
        }
        return this._videoElement
    }
    stopCapture = async () => {
        let tracks = this._videoElement.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop())
        this._videoElement.current.srcObject = null;
    }

    _dumpOptions = async(videoStream) => {
        const videoTrack = videoStream.getVideoTracks()[0];

        console.info("Track settings:");
        console.info(JSON.stringify(videoTrack.getSettings(), null, 2));
        console.info("Track constraints:");
        console.info(JSON.stringify(videoTrack.getConstraints(), null, 2));
    }
}
export default ScreenCapturePlayer