import { AttachFile, Close, Create, Crop, MusicNote, Note, Send, TextFields, Timer } from '@material-ui/icons';
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

    const closePreview = () => {
            dispatch(resetCameraImage());
    }

    return (
        <div className="Preview"> 
            <Close  
            onClick={closePreview}  className="preview__close"/>
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
             alt="imageI"
             />
             <div className="preview__footer">
                 <h2>Send Now</h2>
                 <Send  fontSize="small" className="preview__sendIcon"/>
             </div>
        </div>
    )
}

export default Preview
