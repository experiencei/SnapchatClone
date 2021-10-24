import { AttachFile, Close, Crop, MusicNote, Note, TextFields, Timer } from '@material-ui/icons';
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
    }

    return (
        <div className="Preview"> 
            <Close  onClick={c}  className="preview__close"/>
            <div className="preview__toolbarRight">
                <TextFields/>
                <Create/>
                <Note/>
                <MusicNote/>
                <AttachFile/>
                <Crop/>
                <Timer/>
            </div>
             <img src={cameraImage}
             alt="image"
             />
        </div>
    )
}

export default Preview
