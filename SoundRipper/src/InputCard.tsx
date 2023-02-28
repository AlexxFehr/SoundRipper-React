import React from "react";
import Button from "react-bootstrap/Button"


export default function InputCard(){

    return (
        <div className="input-card">
            <div className="input-group">
                <input type="text" aria-label="First name" className="form-control"/>

                <select className="form-select" aria-label="Default select example">
                    <option selected>Format</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="download-button">
                <Button>Download</Button>
            </div>
        </div>
    )
}