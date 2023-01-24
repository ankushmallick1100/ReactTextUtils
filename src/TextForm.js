import React, {useState} from 'react'

export default function Textform(props) {
    
    const handleUpClick = ()=> {
        // console.log("Uppercase was clicked " + text)
        let newText = text.toUpperCase();
        setText(newText);
        // setText("You have clicked on handelOnChange")
    }

    const handleOnChange = (event)=> {
        // console.log("On change")
        setText(event.target.value)
    }

    const [text,setText] = useState('Enter text here ');
        // text = "new text"   // Wrong way to change the state
        // setText("new text") // Correct way to change the state

    return ( 
        <>
        <div className='container'>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="9"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
        </div>
        <div className='container'>
            <h2>Your text summary</h2>
        </div>
        </> 
    )
}
