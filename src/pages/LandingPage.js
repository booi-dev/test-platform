import React from 'react';
import MainHeader from '../layouts/header/MainHeader';
import MainBody from '../layouts/main/MainBody';

import QUESTION_DATA from '../data/questionData'

function LandingPage() {
    return (
        <div>
            <MainHeader />
            <MainBody questionData={QUESTION_DATA} />
        </div>
    )
}

export default LandingPage