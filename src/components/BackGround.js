import React from 'react';
import device from '../images/illustration-devices.svg'
import '../style/BackGround.css'


const BackGround = () => {
    return (
        <div className="background">
            <img src={device} 
                alt="background" />
            <div className="rect">
            </div>
        </div>
    );
}

export default BackGround;
