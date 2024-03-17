import { useState, useEffect} from 'react';
import { FaArrowUp } from 'react-icons/fa';
import "./GoToTop.css";

function GoToTop(){
    const[isVisible,setIsVisible] = useState(false);
    function handleBtnClick(){
        window.scrollTo({top:0, left:0, behavior:'smooth'});
    }

    function listenToScroll(){
            const heightToHidden = 250;
            const currHeight = document.body.scrollTop || document.documentElement.scrollTop;

            if(currHeight > heightToHidden ){
                setIsVisible(true)
            }else{
                setIsVisible(false);
            }
    }

    useEffect(()=>{
        window.addEventListener('scroll', listenToScroll);
        return ()=> window.removeEventListener('scroll',listenToScroll);
        
    },[]);
    return(
        <div className="Wrapper">
            {isVisible && 
            <div className='btn-top' onClick={handleBtnClick}><FaArrowUp className='upIcon'/></div>}
        </div>

    );
}

export default GoToTop;

