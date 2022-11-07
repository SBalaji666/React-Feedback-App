function Ratings({ select, selected }) {
  const handleChange = ({ target: { value } }) => {
    select(+value);
  };

  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            onChange={handleChange}
            type="radio"
            name="rating"
            id={`num-${i + 1}`}
            value={i + 1}
            checked={selected === i + 1}
          />
          <label htmlFor={`num-${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  );
}

export default Ratings;
