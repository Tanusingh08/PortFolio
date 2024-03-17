import { Link } from 'react-router-dom';
import { useState } from 'react';
import "./NamePage.css";
import Cute from '../../assets/Beautiful.gif';
import  ViewerPageBackImg  from '../../assets/ViewerPage-Background-Image.jpg';

function NamePage() {
    const[inputValue,setInputValue] = useState('');

    function handleChange(e){
        setInputValue(e.target.value);
    }

    function handleClose(){
        setInputValue('');
    }

  return (
    <div className="MainPage" style={{ backgroundImage: `url(${Cute})` }}>
    <div className="BackGroundPage" style={{ backgroundImage: `url(${ViewerPageBackImg})` }}>
      <div className="contentPage">
        <p>Hey, To know about me firstly please, May I  know your good name.</p>
        <input type="text" value = {inputValue} onChange = {handleChange}/>

        <div className="buttons">
          <button className="ViewerBtn"onClick = {handleClose}>Close</button>
          {inputValue.length != 0 && <Link to='/Info'> <button className="ViewerBtn">Ok</button></Link>}
         
        </div>
      </div>
    </div>
    </div>
  );
}

export default NamePage;
