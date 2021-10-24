import { RadioButtonUnchecked } from '@material-ui/icons';
import React, { useCallback, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Webcam from 'react-webcam';
import "./WebcamCapture.css"
import { setCameraImage } from '../../features/cameraSlice';

const videoConstraints = {
    width: 250,
    height: 400,
    facingMode : "user",
}



function WebcamCapture() {
     const webcamRef = useRef(null);
     const history = useHistory();
     const dispatch = useDispatch();

     const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        dispatch(setCameraImage(imageSrc))
        history.push("/preview")
     } , [webcamRef])

    return (
        <div className="webcamCapture">
            <Webcam
              audio={false}
              height={videoConstraints.height}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={videoConstraints.width}
              videoConstraints={videoConstraints}
                />

                <RadioButtonUnchecked
                    className="webcamCapture__button"
                     onClick={capture}
                     fontSize="large"
                />

                {/* <img src={image}
                    alt="image"
                /> */}
        </div>
    )
}

export default WebcamCapture
