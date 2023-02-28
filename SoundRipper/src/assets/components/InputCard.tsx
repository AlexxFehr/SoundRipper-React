import React from "react";
import Button from "react-bootstrap/Button"


export default function InputCard(){

    return (
        <div className="input-card">
            <div className="input-group">
                <input type="text" aria-label="First name" placeholder="Link" className="form-control"/>

                <select className="form-select" aria-label="Default select example">
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
                <Button>Download</Button>
            </div>
        </div>
    )
}

function handleSubmit(){
    //TOOD Handle form submit
}