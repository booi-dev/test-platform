import React from 'react';
import MainHeader from '../../layouts/header/MainHeader';
import MainBody from '../../layouts/main/MainBody';

import './landing-page.css'

function LandingPage() {
    return (
        <div className='landing-page'>
            <MainHeader />
            <MainBody />
        </div>
    )
}

export default LandingPage