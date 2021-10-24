import { RadioButtonUnchecked } from '@material-ui/icons';
import React, { useCallback, useRef } from 'react'
import Webcam from 'react-webcam'

const videoConstraints = {
    width: 250,
    height: 400,
    facingMode : "user",
}



function WebcamCapture() {
     const webcamRef = useRef(null);

     const capture = useCallback(() => {
          const imageSrc = webcamRef.current.getScreenShot()
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
                    className="webcamCapture"
                     onClick={capture}
                />
        </div>
    )
}

export default WebcamCapture
