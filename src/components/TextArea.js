import React, {useState} from 'react'
import './textArea.css'



export default function TextArea(props) {
 
  const UpperCase=()=>{
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleOnChange=(event)=>{
    console.log("on change");
    setText(event.target.value);
  }
 
  const LowerCase=()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  const countWords=(text)=>{
    const trimmedText= text.trim();
    return trimmedText === ''? 0 : trimmedText.split(/\s+/).length;
  }
    const countCharacters =()=>{
      return text.replace(/\s/g, '').length;
    }

 const RemoveExtraSpace =()=>{
  let newText = text.split(/[ \t\n\r]+/).join(" ").trim();
  setText(newText);
 }
 const copyToClipboard = () => {
  navigator.clipboard.writeText(text)
    .then(() => {
      alert("Text copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
};
  const [text, setText] = useState('');

  return (
    <>
    <div className="area">
      <h2>{props.title}</h2>
      <div className="mb-3">

        <textarea className="form-control" id="mybox" rows="8" placeholder='Enter your Text here.. ' value={text} onChange={handleOnChange} ></textarea>
      </div>
      <div className="buttons">
      <button type="button" className="btn btn-outline-primary" onClick={UpperCase} >Uppercase</button>
      <button type="button" className="btn btn-outline-primary"onClick={LowerCase}>Lowercase</button>
      <button type="button" className="btn btn-outline-primary" onClick={RemoveExtraSpace}>Remove Extra Spaces</button> 
      <button type="button" className="btn btn-outline-primary" onClick={copyToClipboard}>Copy to Clipboard</button> 
      </div>
    </div>
    <div className="container mx-0 my-3">
      <h3>Your Text Summary</h3>
      <p>words: {countWords(text)} and Characters: {countCharacters()} </p>
      <p> {0.008 *text.split(" ").length } Minutes to read </p>
      <h3>Summary</h3>
      <p>{text} </p>
    </div>
    </>
  );
}
