import React, {useState} from 'react'

const BoxForm = (props) => {
    const [colr, setColr] = useState();
    const [boxen, setBoxen] = useState({array:[]})
    const [height, setHeight] = useState()
    const [width, setWidth] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        // setBoxen([...boxen,colr])
        // props.onNewColor (colr);
        const makeNew = {
            height: `${height}cm`,
            width: `${width}cm`,
            margin: '1cm',
            background: colr
        }
        setBoxen({array:[...boxen.array, makeNew]})
        setColr("");
        setHeight("");
        setWidth("");
    }
console.log(boxen)
    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="colorSelect">Color:</label>
            <input type="text" id='colorSelect' onChange={ (e) => setColr(e.target.value)} value={colr}/>
            <label htmlFor="heightSelect">Height(in cm):</label>
            <input type="text" id='heightSelect' onChange={ (e) => setHeight(e.target.value)} value={height}/>
            <label htmlFor="widhtSelect">Width (in cm):</label>
            <input type="text" id='widthSelect' onChange={ (e) => setWidth(e.target.value)} value={width}/>
            <input type="submit" value="Add" />
        </form>
        <div className='holdingBox'>
            {
                boxen.array.map((item, index) =>
                <div key={index} style={item}></div>)
            }
        </div>
        </>
    )
    
}

export default BoxForm