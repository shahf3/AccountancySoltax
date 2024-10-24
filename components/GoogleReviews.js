import React, { useState, useEffect } from 'react';
import { useLoadScript } from '@react-google-maps/api';
import { FaStar, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const GoogleReviews = ({ placeId }) => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

  useEffect(() => {
    if (isLoaded && !loadError) {
      try {
        const service = new window.google.maps.places.PlacesService(document.createElement('div'));
        service.getDetails(
          {
            placeId: placeId,
            fields: ['reviews'],
          },
          (place, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
              setReviews(place.reviews || []);
            } else if (status === window.google.maps.places.PlacesServiceStatus.NOT_FOUND) {
              setError('Unable to fetch reviews. Our team has been notified and is working on a fix.');
            } else {
              setError(`Unable to fetch reviews. Please try again later.`);
            }
          }
        );
      } catch (error) {
        setError(`An error occurred while fetching reviews. Please try again later.`);
      }
    }
  }, [isLoaded, loadError, placeId]);

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  if (loadError) return <div className="error-message">Error loading Google Maps API. Please try again later.</div>;
  if (!isLoaded) return <div className="loading-message">Loading Google Reviews...</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="google-reviews">
      <h2 className="reviews-title">What Our Clients Say</h2>
      {reviews.length > 0 ? (
        <div className="reviews-carousel">
          <div className="reviews-track">
            {[...reviews, ...reviews].map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-header">
                  <div className="author-avatar">
                    {getInitials(review.author_name)}
                  </div>
                  <div>
                    <p className="author-name">{review.author_name}</p>
                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < review.rating ? 'star filled' : 'star'} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="review-content">
                  <FaQuoteLeft className="quote-icon left" />
                  <p className="review-text">{review.text}</p>
                  <FaQuoteRight className="quote-icon right" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="no-reviews">No reviews available at the moment. Check back later!</p>
      )}
      <style jsx>{`
        .google-reviews {
          margin: 4rem auto;
          padding: 2rem;
          max-width: 100%;
          background-color: #f8f9fa;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        .reviews-title {
          font-size: 2.5rem;
          color: #333;
          text-align: center;
          margin-bottom: 2rem;
        }
        .reviews-carousel {
          overflow: hidden;
          width: 100%;
        }
        .reviews-track {
          display: flex;
          animation: scroll 30s linear infinite;
        }
        .reviews-carousel:hover .reviews-track {
          animation-play-state: paused;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .review-card {
          flex: 0 0 300px;
          background-color: white;
          border-radius: 8px;
          padding: 1.5rem;
          margin-right: 2rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .review-header {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }
        .author-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin-right: 1rem;
          background-color: #3498db;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.2rem;
        }
        .author-name {
          font-weight: bold;
          margin: 0;
        }
        .rating {
          display: flex;
          margin-top: 0.25rem;
        }
        .star {
          color: #e0e0e0;
          font-size: 1rem;
        }
        .star.filled {
          color: #ffc107;
        }
        .review-content {
          position: relative;
          padding: 0 1.5rem;
        }
        .quote-icon {
          position: absolute;
          font-size: 1.2rem;
          color: #e0e0e0;
        }
        .quote-icon.left {
          top: 0;
          left: 0;
        }
        .quote-icon.right {
          bottom: 0;
          right: 0;
        }
        .review-text {
          font-style: italic;
          color: #555;
          margin: 1rem 0;
        }
        .error-message, .loading-message, .no-reviews {
          text-align: center;
          font-size: 1.2rem;
          color: #666;
          padding: 2rem;
        }
        @media (max-width: 768px) {
          .google-reviews {
            padding: 1rem;
          }
          .reviews-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default GoogleReviews;
