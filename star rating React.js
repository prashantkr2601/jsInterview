function RatingReview({ rating, setRating }) {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => {
        return (
          <span
            className="start"
            style={{
              cursor: "pointer",
              color: rating >= star ? "gold" : "gray",
              fontSize: `35px`,
            }}
            onClick={() => {
              setRating(star);
            }}
          >
            {" "}
            ★{" "}
          </span>
        );
      })}
    </div>
  );
}

function App() {
  const [rating, setRating] = useState(0);
  return <RatingReview rating={rating} setRating={setRating} />;
}
export default App;
