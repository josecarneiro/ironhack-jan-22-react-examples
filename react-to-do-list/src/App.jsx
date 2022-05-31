import { useState } from 'react';
import ToDoListItem from './components/ToDoListItem';
import ToDoListItemInput from './components/ToDoListItemInput';

const storeData = (key, value) =>
  window.localStorage.setItem(key, JSON.stringify(value));

const loadData = (key) => JSON.parse(window.localStorage.getItem(key));

const STORAGE_KEY = 'to-do-list';

function App() {
  const initialList = loadData(STORAGE_KEY) || [];
  const [list, setList] = useState(initialList);

  const handleListItemDeletion = (id) => {
    const remainingToDoListItems = list.filter((item) => {
      return item.id !== id;
    });
    setList(remainingToDoListItems);
    storeData(STORAGE_KEY, remainingToDoListItems);
  };

  const handleListItemAddition = (message) => {
    const item = { id: String(Math.random()), message: message };
    const updatedList = [...list, item];
    setList(updatedList);
    storeData(STORAGE_KEY, updatedList);
  };

  return (
    <div>
      <ul>
        {list.map((item) => (
          <ToDoListItem
            key={item.id}
            message={item.message}
            onDelete={() => handleListItemDeletion(item.id)}
          />
        ))}
      </ul>
      <ToDoListItemInput onAdd={handleListItemAddition} />
    </div>
  );
}

export default App;
