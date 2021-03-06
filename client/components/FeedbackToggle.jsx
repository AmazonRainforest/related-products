/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import style from '../css/feedback.css';

const FeedbackToggle = ({ showLinks, toggleFeedback }) => {
  if (showLinks) {
    return (
      <div className={style['feedback-toggle']}>
        <a href="" onClick={(e) => toggleFeedback(e)}>
          Hide feedback
        </a>
      </div>
    );
  }
  return (
    <div className={style['feedback-toggle']}>
      <a href="" onClick={(e) => toggleFeedback(e)}>
        Ad feedback
      </a>
    </div>
  );
};

export default FeedbackToggle;
