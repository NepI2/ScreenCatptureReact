import React, {useRef, useEffect,useState} from "react";
import ScreenCapturePlayer from "../Classes/ScreenCapturePlayer";



function PlayerComponent(){
    const videoElement = useRef(null);
    const [videoStream, streaming] = useState(videoElement.current);
    let player = useRef(new ScreenCapturePlayer(videoElement));
    console.log(videoElement)
    // useEffect(() => {
    //     player = useRef(new ScreenCapturePlayer(videoElement));
    //     console.log("effect" + videoElement)
    // },[videoElement])
    useEffect(() => {
    },[videoStream,streaming])
    return(
        <div>
            <button onClick={player.current.startCapture}>Start Recording</button>
            <button onClick={player.current.stopCapture}>Stop Recording</button>
            <video ref={videoElement} autoPlay={true} width={650} height={450} ></video>
        </div>
    )
}

export default PlayerComponent