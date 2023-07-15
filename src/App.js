
import Nav from './components/Navbar';
import Textarea from './components/Form';
// import About from './components/About';
import  react,{ useState } from 'react';
import Alert from "./components/Alert";

// import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  const[mode, setMode] = useState('light');
  const toggleMode = ()=>{
      if(mode  === 'light'){
            setMode('dark');
         document.body.style.backgroundColor='#2D4356';
         showAlert("dar mode enabled succesfully","success")
      }
      else{
             setMode('light');
             document.body.style.backgroundColor='#CCD5AE';
             showAlert("Light mode enabled succesfully","success")
       }
  }

  const[alert ,setAlert]=useState(null);
  const showAlert=(message ,type)=>{
       setAlert({
        msg:message,
        type:type
       })
  }
  setTimeout(() => {
    setAlert(null);
  }, 3000);

 
 
  return (  
  
   <>  
  {/* <BrowserRouter> */}
      <Nav tittle='TxtShet' bod={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}  /> 
      <Textarea title="Enter the text here to Analyze " showAlert={showAlert} ></Textarea>
      {/* <Routes> */}
          {/* <Route path="/" element={ <Textarea title="Enter the text here to Analyze " showAlert={showAlert} />  } />
          <Route path="about" element={<About />} />                         */}
      {/* </Routes> */}
    {/* </BrowserRouter> */}
   
      </>
    
  );
}

export default App;
