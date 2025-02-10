const ReviewList = ({ data = [] }) => {

  console.log(data);

  return (
    <div>
      <h2>Reviews</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {Array.isArray(data) ? data.map(review => (
          <div key={review.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            <p>{review.text}</p>
            <p><strong>- {review.name}</strong></p>
          </div>
        )) : <p>No reviews available</p>}
      </div>
    </div>
  );
};

export default ReviewList;