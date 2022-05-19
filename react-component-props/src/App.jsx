import StudentCard from './components/StudentCard';

function App() {
  return (
    <div>
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
