/*
Component gets rendered by React
and each attribute and corresponding value
are passed as properties in the props object
*/
const StudentCard = (props) => {
  return (
    <div style={{ backgroundColor: props.favoriteColor }}>
      <h1>{props.name}</h1>
      <small>{props.location}</small>
      <p>
        <strong>Birth Date:</strong> {props.birthDate.toLocaleDateString()}
        {/* We can output strings, numbers, null,
        undefined, and arrays of any of the former */}
      </p>
      <span>This student is {props.vegan ? '' : 'not '}vegan</span>
      <br />
      <span>
        Their favorite beverages are {props.favoriteBeverages.join(', ')}
      </span>
    </div>
  );
};

export default StudentCard;
