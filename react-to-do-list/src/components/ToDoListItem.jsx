const ToDoListItem = (props) => (
  <li>
    <span>{props.message}</span>
    <button onClick={props.onDelete}>X</button>
  </li>
);

export default ToDoListItem;
