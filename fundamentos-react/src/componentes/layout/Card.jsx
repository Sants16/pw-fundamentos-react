import React from 'react';

import './Card.css'

export default (props) => {

    const estiloCard = {
        backgroundColor: props.cor,
        borderColor: props.cor
    }

    return(
        <div className='Card' style={estiloCard}>
            <div className='Title'><h2>{props.titulo}</h2></div>
            <div class Name='Content'>
                {props.children}
            </div>
        </div>
    )
}