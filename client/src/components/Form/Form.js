import React, { Component } from "react";
import "./Form.css"
const Form = (props) => {
 return(
    <div className="row mx-auto text-center">
        <div className="col-md-9 mx-auto  border border-dark  tex-center mt-2">

        <div className="card">
            <div className="card-header">
                Search Parameters
            </div>
            <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text">
                    Topic
                    <input onchange={props.onchange} id="search-term" className="form-control" type="text" placeholder=""/>
                    Start Year (Format(YYYYMMDD)):
                    <input id="start-year" className="form-control" type="text" placeholder=""/>
                     End year  (Format(YYYYMMDD))
                    <input id="end-year" className="form-control" type="text" placeholder=""/>
                </p>
                <a href="#" id="search-button" className="btn btn-secondary mr-5">Search</a>
            </div>
        </div>
    </div>
</div>


 )
    

}

export default Form;