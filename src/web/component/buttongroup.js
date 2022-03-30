import React, { useState } from "react";



export default function ButtonHolder({ buttons }) {

    const [buttonHolder, setButtonHolder] = useState(-1);
    return (

        <div className='btn-group ' role="group" aria-label="Basic example">
            {buttons.map((buttonLabel, i) => (
                <button className={i === buttonHolder ? "btn button-holder active" : "btn button-holder"} onClick={() => setButtonHolder(i)} key={i} name={buttonLabel}>
                    {buttonLabel}
                </button>
            ))}

        </div>

    )
}



