import React from "react";

const HolaMundo = () => {
    const Hello = "¡Holaaaaa!";
    const isTrue = true;
    return (
        <div className="HolaMundo">
            <h1>{Hello}</h1>
            <h2>Curso esencial de React</h2>
            <img
                src="https://arepa.s3.amazonaws.com/react.png"
                alt="React image"
            />
            {isTrue ? <h4>Esto es de verdad</h4> : <h4>Soy falso</h4>}
            {isTrue && <h4>Soy verdadero</h4>}
        </div>
    );
};

export default HolaMundo;
