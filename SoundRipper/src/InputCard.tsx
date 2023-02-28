import React from "react";
import Button from "react-bootstrap/Button"


export default function InputCard(){

    return (
        <div className="input-card">
            <div className="input-group">
                <input type="text" aria-label="First name" placeholder="Link" className="form-control"/>

                <select className="form-select" aria-label="Default select example">
                    <optgroup label="Audio Interchange File">
                        <option value="1">.aif - 32k</option>
                        <option value="2">.aif - 64k</option>
                        <option selected value="3">.aif - 128k </option>
                    </optgroup>

                    <optgroup label="MPEG-1 Audio Layer 3">
                        <option value="1">.mp3 - 32k</option>
                        <option value="2">.mp3 - 64k</option>
                        <option value="3">.mp3 - 128k </option>
                    </optgroup>

                    <optgroup label="Waveform Audio File">
                        <option value="1">.wav - 32k</option>
                        <option value="2">.wav - 64k</option>
                        <option value="3">.wav - 128k </option>
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
    //Handle form submit
}