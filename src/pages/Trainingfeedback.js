import React from 'react';
// import FeedbackForm from '../component/form/FeedbackForm';
import Trainingdetailpage from '../component/traingform/Trainingdetailpage';
import Cardcontainer from '../component/partial/Cardcontainer';

export default function Trainingfeedback() {
  return (
    <div>
        <Trainingdetailpage />
    <Cardcontainer />
       <h1>Training feedback system</h1>
        <p>A training feedback system is a process for collecting, analyzing, and responding to feedback from participants in a training program. The goal of a training feedback system is to identify areas for improvement and create recommendations for future training.</p>
        {/* <FeedbackForm /> */}
    </div>
  )
}
