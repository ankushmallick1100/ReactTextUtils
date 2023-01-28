import React, {useState} from 'react'

export default function Textform(props) {
    
    const handleUpClick = ()=> {
        // console.log("Uppercase was clicked " + text)
        let newText = text.toUpperCase();
        setText(newText);
        // setText("You have clicked on handelOnChange")
        props.showAlert("Converted to uppercase","success")
    }

    const handleLoClick = ()=> {
        // console.log("Uppercase was clicked " + text)
        let newText = text.toLowerCase();
        setText(newText);
        // setText("You have clicked on handelOnChange")
        props.showAlert("Converted to lowercase","success")

    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
        props.showAlert("Textbox cleared","success")
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to clipboard","success")

    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces Removed","success")
    }

    const handleOnChange = (event)=> {
        // console.log("On change")
        setText(event.target.value)
    }

    const [text,setText] = useState('');
        // text = "new text"   // Wrong way to change the state
        // setText("new text") // Correct way to change the state

    return ( 
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h2 className="mb-4">{props.heading}</h2>
            <div className="mb-3" >
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#adb5bd':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="9"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy to clipboard</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove extra spaces</button>

        </div>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </> 
    )
}
