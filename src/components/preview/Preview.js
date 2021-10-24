import React from 'react'
import { useSelector } from 'react-redux';
import { selectcameraImage} from '../../features/cameraSlice';
import "./Preview.css";

function Preview() {
  const cameraImage = useSelector(selectcameraImage)

    return (
        <div className="Preview"> 
          <h2>what good</h2>
             <img src={cameraImage}
             alt="image"
             />
        </div>
    )
}

export default Preview
