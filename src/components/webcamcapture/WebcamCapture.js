import { RadioButtonUnchecked } from '@material-ui/icons';
import React, { useCallback, useRef, useState } from 'react'
import Webcam from 'react-webcam'

const videoConstraints = {
    width: 250,
    height: 400,
    facingMode : "user",
}



function WebcamCapture() {
     const webcamRef = useRef(null);
     const [image , setImage] = useState(null);

     const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();

        //    setImage(imageSrc)
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
