import logoPath from './logo.svg';
import './App.css';

const name = 'Sina';

/* React Component */
/* We name components using PascalCaseSyntax */
const Message = () => {
  return (
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit
      nesciunt autem vitae voluptate placeat nulla illum sed id? Vel sunt
      aliquid perferendis eligendi laudantium? Saepe eius earum autem amet
      commodi!
    </p>
  );
};

const dogImageDescription = 'A smartly dressed pug';

/* JSX
JavaScript Extended
It allows to mix JavaScript and HTML syntax in a single file
*/
/* App is our React component */
/* A React component is simply a function that returns an "HTML-like" template */
function App() {
  return (
    /*
    We cannot use class attribute to avoid any confusion between JS class and HTML class
    As such, we have "className", which is then converted into "class"
    */
    <div className="App">
      <h1>Hello World</h1>
      <button>Click Me</button>
      {/* We must use "htmlFor" instead of "for" to avoid any confusion */}
      <label htmlFor="abc">Abc</label>
      <input id="abc" type="text" placeholder="Foo Bar" />
      <p>My name is {name}</p>
      {/*
      If it's within the public directory,
      refer to file by path relative to public directory
      */}
      <img src="/pug.jpg" alt={dogImageDescription} width="400" />
      {/*
      If it's within the src directory,
      import the file using the ESModule syntax
      The result refers to the path of the path which you can use
      as the source for an image element
      */}
      <img src={logoPath} alt="Logo" width="400" />
      <Message />
    </div>
  );
}

export default App;
