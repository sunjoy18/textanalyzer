import React from 'react'

function Contact() { 

    const sentLetter = (event)=> {
        document.body.classList.add("sent");
      }
      
  return (    
    <div className='contact'> 
        <small>Enter message (optional) and click button "Send"</small>
        <form action="mailto:sanjayguptasarvjeet342@gmail.com" method="post" enctype="text/plain">
            <div className="wrapper centered">
            <article className="letter">
                <div className="side">
                <h1>Contact us</h1>
                <p>
                    <textarea placeholder="Your message" name='Message'></textarea>
                </p>
                </div>
                <div className="side">
                <p>
                    <input type="text" placeholder="Your name" name='Name'/>
                </p>
                <p>
                    <input type="tel" size="13" placeholder="Your contact" name="Contact"/>
                </p>
                <p>
                    <button id="sendLetter" onClick={sentLetter}>Send</button>
                </p>
                </div>
            </article>
            <div className="envelope front"></div>
            <div className="envelope back"></div>
            </div>
        </form>
        <p className="result-message centered">Thank you for your message</p>
    </div>
  )
}

export default Contact
