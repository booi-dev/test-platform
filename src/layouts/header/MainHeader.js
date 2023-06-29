import React from 'react';

import Timer from '../../components/timer/Timer';

import './main-header.css'

function MainHeader() {
    return (
        <div className='main-header'>
            <Timer initialHours={.5} />
        </div>
    )
}

export default MainHeader;