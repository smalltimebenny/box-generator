import React, {useState} from 'react'

const BoxDisplay = (props) => {
    console.log("this is backgorund color", props.backgroundColor)
    const boxStyle = {
        margin: '1cm',
        width: '3cm',
        height: '3cm',
        background: 'red',
    }
    // boxStyle.background = props.backgroundColor

    return (
        <>
        
            {
                props.backgroundColor.map( (item, index) =>
                boxStyle.background={item},
                <div style={boxStyle}></div>
                )
            }
        </>
    )
}

export default BoxDisplay