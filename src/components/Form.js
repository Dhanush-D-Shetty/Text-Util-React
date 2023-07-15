import react , {useState} from 'react';

 function Textarea(roc){
    
     const [text, setText] = useState("");  //  useState("Enter the text here");
    const  handleUpClick= ()=>{
         console.log("Uppercase buuton was clicked : "+text);
         const newText=text.toUpperCase();
         setText(newText);
         roc.showAlert("converted to Upper Case","success");
    }
    const handleOnChange  =  (event)=>{
       // console.log("text was entered");
        setText(event.target.value);
    }
    const handleLowerClick=()=>{
        const newtxt=text.toLowerCase();
        setText(newtxt);
        roc.showAlert("converted to Lower Case","success");
    }
    const handletoClear=()=>{
        setText("");
        roc.showAlert("Cleared All","success");
    }

    const firLetterUp = () => {
        let newText = text.split(" ");
        let finalArr = []
            newText.forEach((element) => {
                    let afterUp = element[0].toUpperCase();
                    afterUp = afterUp.concat(element.substring(1))
                    finalArr.push(afterUp);
                }  )
         setText(finalArr.join(" "));
      }

    
    const reverseText = () => {
        let newText = text.split('').reverse().join('');
        setText(newText);
    }
    const handleFirCharClick = () => {
        //Converts to Uppercase
        let textArr = text.split(" ");
        for (let i=0; i<textArr.length; i++) {
            textArr[0] = textArr[0].charAt(0).toUpperCase();
                if (textArr[i].endsWith(".")) {
                    textArr[i+1] = textArr[i+1].charAt(0).toUpperCase().concat(textArr[i+1].substring(1));
               }
        }
         // Remove extra spaces
         let newText = textArr.join(" ");
         let newArr = newText.split(/[ ]+/);
         console.log(newArr);
         setText(newArr.join(" "));
    }

    function speaktext() {
        var speech = new SpeechSynthesisUtterance();
        speech.text = text
        speech.volume = 12;
        speech.rate = 1;
        speech.pitch = 1;
        window.speechSynthesis.speak(speech);
      }






    return(
        <>
                    <div className="container">
                        <h1>{roc.title}</h1>    
                        <textarea className="form-control my-3"  rows="8"   id="mybox"  value={text} onChange={handleOnChange}   >  </textarea>
                        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upperCase  </button>
                        <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to Lower-Case  </button>
                        <button className="btn btn-primary mx-2" onClick={handletoClear}> Clear </button>
                        <button className="btn btn-primary mx-2" onClick={firLetterUp}>First Letter Captal</button>
                        <button className="btn btn-primary mx-2" onClick={handleFirCharClick}>Convert to Cap-Letter of Sent </button>
                        <button className="btn btn-primary mx-2" onClick={speaktext}> Read the text</button>

                    </div>
                    <div className="container my-3">
                        <h1>Your text Summary</h1>
                        <p>{text.split(" ").length} words and {text.length} letters</p>
                        <p>{0.008 * text.split(" ").length} Minutes to read</p>
                        <h2>Preview</h2>
                        <p>{text}</p>
                    </div>

        </>
    );
} 

export default  Textarea;