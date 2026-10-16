import TaskForm from "./components/TaskForm";
import TaskControls from "./components/TaskControls";


const App = () => {
  return (
    <div style={{
      fontFamily: "Arial",
      padding: "20px",
      maxWidth: "800px",
      margin:"auto"
    }}>
      <h1 style={{textAlign:"center"}}>
       Welcome to the Todo-List App
      </h1>

      <TaskForm />
      <TaskControls />
    </div>
  );
};  


export default App;