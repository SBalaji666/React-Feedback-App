import React, { createContext, useState, useEffect } from 'react';
import FeedbackData from '../data/FeedbackData';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const LOCAL_STORAGE_KEY = 'feedback';
  const [feedback, setFeedback] = useState(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    const feedbackJson = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    if (feedbackJson) setFeedback(feedbackJson);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(feedback));

    return () => {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    };
  }, [feedback]);

  const addFeedback = newFeedback => {
    setFeedback(prev => [newFeedback, ...prev]);
  };

  const deleteFeedback = id => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(prev => prev.filter(f => f.id !== id));
    }
  };

  const updateFeedback = (id, updItem) => {
    // setFeedback(prev =>
    //   prev.map(item => (item.id === id ? { ...prev, ...updItem } : item))
    // );

    let newFeedback = [...feedback];
    const index = feedback.findIndex(f => f.id === id);
    newFeedback[index] = updItem;
    setFeedback(newFeedback);

    setFeedbackEdit({
      item: {},
      edit: false,
    });
  };

  const editFeedback = item => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const FeedbackContextValue = {
    feedback,
    deleteFeedback,
    addFeedback,
    editFeedback,
    updateFeedback,
    feedbackEdit,
  };

  return (
    <FeedbackContext.Provider value={FeedbackContextValue}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
