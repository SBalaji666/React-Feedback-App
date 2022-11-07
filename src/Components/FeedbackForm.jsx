import { v4 as uuidv4 } from 'uuid';
import React, { useState, useContext, useEffect } from 'react';
import Card from './shared/Card';
import Ratings from './Ratings';
import Button from './shared/Button';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm({ handleAdd }) {
  const [input, setInput] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisblaed] = useState(true);
  const [message, setMessage] = useState('');

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setInput(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
      setBtnDisblaed(false);
    }
  }, [feedbackEdit]);

  const handleInputChange = ({ target: { value } }) => {
    if (value === '') {
      setBtnDisblaed(true);
      setMessage('');
    } else if (value.trim().length < 10) {
      setBtnDisblaed(true);
      setMessage('Text must be at least 10 characters');
    } else {
      setMessage(null);
      setBtnDisblaed(false);
    }
    setInput(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (input.trim().length > 10) {
      const newFeedback = {
        id: uuidv4(),
        text: input,
        rating,
      };

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
    }

    setInput('');
    setBtnDisblaed(true);
    setRating(10);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <Ratings select={setRating} selected={rating} />
        <div className="input-group">
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="Write a review"
            value={input}
          />
          <Button type={'submit'} isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
