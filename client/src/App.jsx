import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import TaskFormPage from "./pages/TaskFormPage";
import TaskPage from "./pages/TaskPage";
import ProtectedRoute from "./pages/ProtectedRoute";
import SubtaskFormPage from "./pages/SubtaskFormPage";
import Navbar from "./pages/Navbar";
import { AuthProvider } from "./pages/context/AuthContext";
import { TaskProvider } from "./pages/context/TasksContext";
import { SubTaskProvider } from "./pages/context/SubtasksContext";


function App() {
  return (
    <AuthProvider>
      <TaskProvider>
      <SubTaskProvider>
      <BrowserRouter>
      <main className="container mx-auto px-10">
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/tasks" element={<TaskPage/>}></Route>
            <Route path="/add-task" element={<TaskFormPage />}></Route>
            <Route path="/task/:id" element={<TaskFormPage />}></Route>

            <Route path="/tasks/:taskId/subtasks" element={<SubtaskFormPage/>}></Route>

            <Route path="/profile" element={<ProfilePage />}></Route>
          </Route>
        </Routes>
        </main>
      </BrowserRouter>
      </SubTaskProvider>
      </TaskProvider>
    </AuthProvider>)
}
export default App;