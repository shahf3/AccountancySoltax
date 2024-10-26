import React from 'react';

const GoogleReviews = ({ placeId }) => {
  // ... existing code ...

  return (
    <div className="google-reviews">
      <h2>What Our Clients Say</h2>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <div className="reviewer-info">
              <img src={review.profile_photo_url} alt={review.author_name} />
              <div>
                <h3>{review.author_name}</h3>
                <div className="stars">{'★'.repeat(review.rating)}</div>
              </div>
            </div>
            <p>{review.text}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .google-reviews {
          padding: 2rem 1rem;
          background-color: #f8f9fa;
        }

        h2 {
          text-align: center;
          color: #2c3e50;
          margin-bottom: 2rem;
        }

        .reviews-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2rem;
        }

        .review {
          background-color: white;
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          width: calc(33.333% - 2rem);
          min-width: 250px;
        }

        .reviewer-info {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }

        .reviewer-info img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin-right: 1rem;
        }

        .stars {
          color: #f1c40f;
        }

        p {
          font-size: 0.9rem;
          line-height: 1.6;
        }

        @media (max-width: 992px) {
          .review {
            width: calc(50% - 2rem);
          }
        }

        @media (max-width: 768px) {
          .google-reviews {
            padding: 1.5rem 1rem;
          }

          h2 {
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
          }

          .reviews-container {
            gap: 1.5rem;
          }

          .review {
            width: 100%;
            padding: 1.2rem;
          }

          .reviewer-info img {
            width: 40px;
            height: 40px;
          }

          p {
            font-size: 0.85rem;
          }
        }

        @media (max-width: 576px) {
          .google-reviews {
            padding: 1rem;
          }

          h2 {
            font-size: 1.6rem;
            margin-bottom: 1rem;
          }

          .reviews-container {
            gap: 1rem;
          }

          .review {
            padding: 1rem;
            min-width: 200px;
          }

          .reviewer-info img {
            width: 35px;
            height: 35px;
          }

          p {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default GoogleReviews;
