import React, {useState} from 'react'

export default function Textform(props) {
    
    const handleUpClick = ()=> {
        // console.log("Uppercase was clicked " + text)
        let newText = text.toUpperCase();
        setText(newText);
        // setText("You have clicked on handelOnChange")
    }

    const handleLoClick = ()=> {
        // console.log("Uppercase was clicked " + text)
        let newText = text.toLowerCase();
        setText(newText);
        // setText("You have clicked on handelOnChange")
    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
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
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy to clipboard</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>

        </div>
        <div className='container'>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </> 
    )
}
