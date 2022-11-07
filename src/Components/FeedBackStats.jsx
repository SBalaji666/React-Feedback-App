import React, { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedBackStats() {
  const { feedback } = useContext(FeedbackContext);

  // Calculate average ratings
  let average = Math.round(
    feedback.reduce((acc, { rating }) => acc + rating, 0) / feedback.length
  );

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews </h4>
      <h4>Average Rating : {isNaN(average) ? 0 : average} </h4>
    </div>
  );
}

export default FeedBackStats;