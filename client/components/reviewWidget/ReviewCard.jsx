import React from 'react';
import StarAverage from '../shared/StarAverage.jsx';

const ReviewCard = ({ review, index, markReviewHelpful, reportReview }) => {
  // Conditionally render a response if present
  let response = null;
  if (review.response) {
    response = (
      <div className="review-response">
        <h6>Response:</h6>
        <p>{review.response}</p>
      </div>
    );
  }

  // Conditionally render the report button
  let report = <a>Reported</a>;
  if (!review.report) {
    report = (
      <a
        onClick={() => {
          reportReview(review.review_id, index);
        }}
      >
        Report
      </a>
    );
  }

  let dateString = new Date(Date.parse(review.date)).toDateString();


  return (
    <section className="review-card">
      <div className="review-header">
        <StarAverage reviewAverage={review.rating} />
        <span className="review-user">{`${review.reviewer_name}, ${dateString}`}</span>
      </div>
      <div className="review-summary">
        <h4>{review.summary}</h4>
      </div>
      <div className="review-body">
        <p>{review.body}</p>
        <div className="review-images">
          {review.photos.map((photo) => {
            return (
              <img
                src={photo.url}
                alt="Reviewer product image"
                key={photo.id}
                height="100px"
                width="100px"
              />
            );
          })}
        </div>
        {review.recommend ? ReviewCard.recommended : null}
        {response}
      </div>
      <div className="review-footer">
        <div>
          Helpful?{' '}
          <a
            onClick={() => {
              markReviewHelpful(review.review_id, index);
            }}
          >
            Yes
          </a>{' '}
          {`(${review.helpfulness})`}
        </div>
        <div>
          {report}
        </div>
      </div>
    </section>
  );
};

ReviewCard.recommended = (
  <p className="review-recommended">&#10003; I recommended this product</p>
);

export default ReviewCard;
