const contacts = [
  { id: '1', name: 'James' },
  { id: '2', name: 'Jane' }
];

const App = () => {
  const [list, setList] = useState([]);

  const handleContactAddition = () => {
    const contactsThatHaveNotYetBeenAdded = contacts.filter((contact) => {
      return !list.includes(contact);
    });

    if (contactsThatHaveNotYetBeenAdded.length) {
      const randomIndex = Math.floor(
        contactsThatHaveNotYetBeenAdded.length * Math.random()
      );
      const randomContact = contactsThatHaveNotYetBeenAdded[randomIndex];
      setList([...list, randomContact]);
    }
  };

  return (
    <>
      <ul>
        {list.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
      <button onClick={handleContactAddition}>Add contact</button>
    </>
  );
};
