import React from 'react';  
import './PopUp.css';  

class Popup extends React.Component {  
  render() {  
return (  
<div className='popup' onClick={this.props.closePopup}>  
<div className='popup\_inner text-center'>
    <img src={this.props.image} className="" width="40%" height="40%"></img>  
<h1>{this.props.text}</h1>  
<button className="btn btn-secondary" onClick={this.props.closePopup}>Close</button>  
</div>  
</div>  
);  
}  
}  

export default Popup;