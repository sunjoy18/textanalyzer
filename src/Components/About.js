import React from 'react'

export default function About(props) {
  return (
    <div className='about'>
      
        <h1 my-3 style={{color: props.mode==='dark'?'white':'black'}}>About Us</h1>
        <p>Itna khali time hai tere pass ke Word Analyzer website ka about padh raha hai
            <br /><br /><br />
            <p style={{color: props.mode==='dark'?'white':'black'}}> : Fir bhi Sun le agya to : </p>
            <br />
            TextAnalyzer is an utility which is used to manipulate texts the way you want. <br /> Such as convert texts to any case (Upper or Lower), count words and characters, get average read time, remove extra spaces, get it's preview.
        </p>
      
      <br />
    </div>
  )
}
