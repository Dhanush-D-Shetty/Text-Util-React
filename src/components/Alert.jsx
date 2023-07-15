import React from 'react'

 function Alert(props) {
 
          let captalze=(word)=>{
            let lower=word.toLowerCase();
            return lower.charAt(0).toUpperCase()+lower.slice(1);
          }



  return (
    // since props.alert is null initially so we are writing     props.alert &&   //  alert consist of    msg and type   so    alert.msg alert.type
    props.alert &&   <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong> { captalze(props.alert.type) } </strong>   {props.alert.msg}
                   
           </div>
  )
}

export default Alert;
