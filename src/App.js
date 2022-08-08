import { Todo } from "./components/Todo";

function App() {
  return (
    <div >
      <h1>My ToDos</h1>
      <Todo text='Start React'/>
      <Todo text ='Create a sample app'/>
      <Todo text='Project Kt'/>
      <Todo text='Finish app' />
    </div>
  );
}

export default App;
