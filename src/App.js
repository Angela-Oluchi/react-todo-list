import Todo from "./components/Todo";
import FilterButton from "./components/FilterButton";
import Form from "./components/Forms";

function App(props) {
  const taskList = props.tasks?.map((task) => (<Todo 
    id={task.id} 
  name={task.name} 
  completed={task.completed}
  key={task.id}
  />
));


  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      <div className="filters btn-group stack-exception">
      <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>

      {/* unordered list */}
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}

      </ul>
    </div>
  );
}

export default App;
