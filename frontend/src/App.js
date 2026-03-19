import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Courses from "./pages/Courses";
import LearnHTML from "./pages/LearnHTML";
import LearnCSS from "./pages/LearnCSS";
import LearnJS from "./pages/LearnJS";
import LearnJava from "./pages/LearnJava";
import LearnC from "./pages/LearnC";
import LearnCPP from "./pages/LearnCPP";
import LearnPython from "./pages/LearnPython";
import Quiz from "./pages/Quiz";
import QuizHTML from "./pages/QuizHTML";
import QuizCSS from "./pages/QuizCSS";
import QuizJS from "./pages/QuizJS";
import QuizCPP from "./pages/QuizCPP";
import QuizPython from "./pages/QuizPython";
import QuizJava from "./pages/QuizJava";
import QuizC from "./pages/QuizC";
import Notes from "./pages/Notes";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/courses" element={<Courses />} />
        <Route path="/learn/html" element={<LearnHTML />} />
        <Route path="/learn/css" element={<LearnCSS />} />
        <Route path="/learn/javascript" element={<LearnJS />} />
        <Route path="/learn/java" element={<LearnJava />} />
        <Route path="/learn/c" element={<LearnC />} />
        <Route path="/learn/c++" element={<LearnCPP />} />
        <Route path="/learn/python" element={<LearnPython />} />

        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz/html" element={<QuizHTML />} />
        <Route path="/quiz/css" element={<QuizCSS />} />
        <Route path="/quiz/javascript" element={<QuizJS />} />
        <Route path="/quiz/c++" element={<QuizCPP />} />
        <Route path="/quiz/python" element={<QuizPython />} />
        <Route path="/quiz/java" element={<QuizJava />} />
        <Route path="/quiz/c" element={<QuizC />} />

        <Route path="/notes" element={<Notes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
