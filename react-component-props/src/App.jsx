import StudentCard from './components/StudentCard';

const First = (props) => {
  console.log(props);
  return (
    <div>
      <h1>This is the FIRST component</h1>
      {props.children}
    </div>
  );
};

const Second = () => {
  return (
    /* REACT FRAGMENT */
    <>
      <h4>This is the SECOND component</h4>
      <h5>Still in the second component</h5>
    </>
  );
};

function App() {
  return (
    <div>
      <First>
        <h2>This is a special message</h2>
        <h3>Another message</h3>
        <Second />
      </First>
      <StudentCard
        name="James Dean"
        favoriteColor="cyan"
        /* Any JavaScript value can be passed to a component through "attributes" */
        birthDate={new Date(1940, 4, 10)}
        location="Los Angeles"
        vegan={false}
        favoriteBeverages={['beer', 'whisky']}
      />
      <StudentCard
        name="Marylin Monroe"
        favoriteColor="pink"
        birthDate={new Date(1950, 8, 21)}
        location="New York"
        vegan={true}
        favoriteBeverages={['water', 'orange juice']}
      />
    </div>
  );
}

export default App;
