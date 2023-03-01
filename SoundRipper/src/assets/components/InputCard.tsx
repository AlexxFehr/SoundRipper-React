import React from "react";
import Button from "react-bootstrap/Button"


export default function InputCard(){

    const [formData, setFormData] = React.useState({
        link : "",
        format : "" 
    });

    function handleFormChange(event){
        //TODO Validate the current YT link

        setFormData((pFormData) => {

            return {
                ...pFormData,
                [event.target.name] : event.target.value
            };
        });
    }

    function handleSubmit(){
        //TOOD Handle form submit
        console.log(formData);
    }

    return (
        <div className="input-card">
            <div className="input-group">
                <input type="text" placeholder="Link" className="form-control" name="link" onChange={handleFormChange}/>

                <select className="form-select" aria-label="Default select example" name="format" onChange={handleFormChange}>
                    <optgroup label="Audio Interchange File">
                        <option value=".aif - 32k">.aif - 32k</option>
                        <option value=".aif - 64k">.aif - 64k</option>
                        <option selected value=".aif - 128k">.aif - 128k </option>
                    </optgroup>

                    <optgroup label="MPEG-1 Audio Layer 3">
                        <option value=".mp3 - 32k">.mp3 - 32k</option>
                        <option value=".mp3 - 64k">.mp3 - 64k</option>
                        <option value=".mp3 - 128k">.mp3 - 128k </option>
                    </optgroup>

                    <optgroup label="Waveform Audio File">
                        <option value=".wav - 32k">.wav - 32k</option>
                        <option value=".wav - 64k">.wav - 64k</option>
                        <option value=".wav - 128k">.wav - 128k </option>
                    </optgroup>
                </select>
            </div>
            <div className="download-button">
                <Button onClick={handleSubmit}>Download</Button>
            </div>
        </div>
    )
}