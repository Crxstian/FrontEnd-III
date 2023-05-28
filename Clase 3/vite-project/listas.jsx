import React from "react";

function Lista({elementos}){
    return(
        <ul>
            {elementos.map((elemento,index) => (
                <li key={index}>{elemento}</li>
            ))}
        </ul>
    );
}
export default Lista;