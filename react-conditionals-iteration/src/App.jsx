import { useState } from 'react';

/*
const value = true;
// With ternary operator
console.log(value ? 'Its true' : 'Its false');
// Shortcircuiting with && or || operators
console.log((value && 'Its true') || 'Its false');
*/

function App() {
  const [displayMessage, setDisplayMessage] = useState(false);
  const [students, setStudents] = useState([
    { id: '1', name: 'Sofiane', location: 'Morocco' },
    { id: '2', name: 'Johanna', location: 'Berlin' },
    { id: '3', name: 'Andrés', location: 'Southampton' }
  ]);

  const handleToggleMessageClick = () => {
    setDisplayMessage(!displayMessage);
  };

  const handleStudentRemoval = (id) => {
    /* We should never directly mutate state */
    /* We should not call .push(), .pop(), .splice(), .shift(), .unshift() */
    /* We can call .filter(), .map(), .reduce(), .slice(), etc */
    /* https://doesitmutate.xyz */
    const remainingStudents = students.filter((student) => {
      return student.id !== id;
    });
    setStudents(remainingStudents);
    /*
    To add to an array stored in component state
    const updatedStudents = [
      ...students,
      { id: '4', name: 'Ezgi', location: 'Berlin' }
    ];
    setStudents(updatedStudents);
    */
  };

  return (
    <div className="App">
      <button onClick={handleToggleMessageClick}>
        {displayMessage ? 'Hide' : 'Show'} Message
      </button>
      {displayMessage && <h1>This is a secret message</h1>}
      <ul>
        {students.map((student) => {
          return (
            <li key={student.id}>
              {student.name} is based in {student.location}{' '}
              <button onClick={() => handleStudentRemoval(student.id)}>
                ✅
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
