
import React, { useState } from 'react';
import './IFoodCounter.css';

function IFoodCounter(){

    const [value, setValue] = useState(1);
    const [buttonStyle, setButtonStyle] = useState("counter-button-minus-active");

    function down(){
        if(value <= 1){
            setButtonStyle("counter-button-minus-desactive");
        }

        if(value > 0){
            setValue(value-1);
        }
    }

    function up(){
        setValue(value+1);
        setButtonStyle("counter-button-minus-active");
    }

    return(
        <div className="counter-wrapper">
            <button className={ buttonStyle } onClick={down}>
                -
            </button>
            <p>{ value }</p>
            <button className='counter-button-plus-active' onClick={up}>
                +
            </button>
        </div>
    );
}

export default IFoodCounter;