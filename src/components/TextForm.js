import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
         
        let newtext= text.toUpperCase();
        setText(newtext)
    }
    const handleLoClick=()=>{
         
        let newtext= text.toLowerCase();
        setText(newtext)
    }
    const handleOnChange=(event)=>{
        
        setText(event.target.value)
    }
    const [text, setText] = useState("");// we can put a placeholder here
    return (
    <>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div class="mb-3">

                <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black', }} value={text} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button className='btn mx-2 my-2 btn-primary'  onClick={handleUpClick}>Convert to upper-case</button>
            <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to lower-case</button>
            
        </div>
        <div className="container my-2 " style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary </h1>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008* text.length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview here"}</p>
    </div>
    </>
        
    
    )
}
