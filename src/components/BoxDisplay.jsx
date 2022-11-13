import React, {useState} from 'react'

// i spent a long time messing around with this when i could have just done it all on one pageXOffset. i assumed we would need to lift state. if we were supposed to and i missed it, i would liek to know what i did wrong.

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