import { Close } from '@material-ui/icons';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { resetCameraImage, selectcameraImage} from '../../features/cameraSlice';
import "./Preview.css";

function Preview() {

  const history = useHistory()
  const cameraImage = useSelector(selectcameraImage);
  const dispatch = useDispatch();

    useEffect(() => {
      if (!cameraImage){
            history.replace("/")
      }
    }, [cameraImage , history]);

    const cameraImage = () => {
            dispatch(resetCameraImage());
            history.replace("/")
    }

    return (
        <div className="Preview"> 
            <Close  onClick={c}  className="preview__close"/>
             <img src={cameraImage}
             alt="image"
             />
        </div>
    )
}

export default Preview
