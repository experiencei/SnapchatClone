import { Close } from '@material-ui/icons';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { selectcameraImage} from '../../features/cameraSlice';
import "./Preview.css";

function Preview() {

  const history = useHistory()
  const cameraImage = useSelector(selectcameraImage);
    useEffect(() => {
      if (!cameraImage){
            history.replace("/")
      }
    }, [cameraImage , history]);

    const cameraImage = () => {
        
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
