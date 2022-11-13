import React from 'react'

const Test = () => {

    const num1 = {array:[1,2,3,4,5]}
    const num2 = {array: [...num1.array,6,7,8,9]}

    return (
    <div>{num2.array}</div>
    )
}

export default Test