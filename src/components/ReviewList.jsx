const ReviewList = () => {
  const reviews = [
    { id: 1, content: 'Great movie!', author: 'John Doe' },
    { id: 2, content: 'Not bad.', author: 'Jane Smith' },
    // Add more reviews here
  ];

  return (
    <div>
      <h2>Reviews</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {reviews.map(review => (
          <div key={review.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            <p>{review.content}</p>
            <p><strong>- {review.author}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewList;