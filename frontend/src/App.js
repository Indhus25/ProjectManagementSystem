import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Project Management System</h1>

      <hr />
      <Login />

      <hr />
      <Register />

      <hr />
      <Dashboard />

      <hr />
      <Projects />

      <hr />
      <Tasks />
    </div>
  );
}

export default App;