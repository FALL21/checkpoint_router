import React from "react";
import { useHistory,useLocation } from "react-router-dom";
import '../App.css';

function Descrption() {
    let history=useHistory()
    const location=useLocation()
    const data = location.state

    function backHome() {
        history.push("/")
    }

    return (
        <>
            <div className="bn">
                <h1>{data.title}</h1>
                <h2><iframe width="560" height="315" src={data.trailler} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></h2>
                <button onClick={backHome}>Aceuil</button>
            </div>
            
        </>
    );
}
export default Descrption; 