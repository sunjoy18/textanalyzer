import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
  //state
  const[text, setText] = useState('');
  
  const handleUpClick = () =>{
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to UpperCase!","success")
  }

  const handleDownClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!","success")
  }

  const copyIt = () =>{
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Copied to clipboard!","success")
  }

  const clearIt = () =>{
    setText("");
    props.showAlert("Cleared!","success")
  }
  
  const handleBlank = () => {
    var blank = text.length; 
    if(blank === 0)
    {
      return(blank);
    }
    else{
      let word = text.split(" ");
      word = word.filter(function(entry) { return entry.trim() !== ''; });
      return(word.length);
    }
  }

  const handleSpace = () => {
    let c = 0; 
    let word = text;
    for (let i = 0; i < word.length; i++) {
      if (word[i] === " ") {
        continue;
      }
      else{
        c += 1;
      }
    }
    return(c);
  }

  const handleExtraSpace = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!","success")
  }
  const handleOnChange = (event) =>{
    setText(event.target.value);
  }

  let a = handleBlank();
  let s = handleSpace();

  return (
    <div className='/'>
    <br />
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
          <h1>{props.heading}  </h1>
          <div className="mb-3">              
              <textarea className="form-control" id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'?'#fffae4':'white'}} value={text} onChange={handleOnChange}></textarea>
              <br />
              <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
              <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to LowerCase</button>
              <button className="btn btn-primary mx-2" onClick={copyIt}>Copy Text</button>
              <button className="btn btn-primary mx-2" onClick={clearIt}>Clear Text</button>
              <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Ex-Space</button>
          </div>
      </div>
      <div className="container" style={{color : props.mode === 'dark'?'white' : 'black'}}>
        <h2>Your Text Summary</h2>
        <p>{a} words and {s} characters.</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview : </h2>
        <p>{text.length>0?text:"Enter text above to preview it here."}</p>
      </div>
    </div>
  )
}

TextForm.propTypes = {
  heading : PropTypes.string,
}

TextForm.defaultProps = {
  heading : 'Enter text to analyze : '
}

