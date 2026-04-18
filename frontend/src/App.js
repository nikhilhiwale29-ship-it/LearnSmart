import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

// ← Only these load immediately
import Home from "./pages/Home";
import Auth from "./pages/Auth";

// ← Everything else loads only when needed
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const ProtectedRoute = lazy(() => import("./components/ProtectedRoute"));
const Courses = lazy(() => import("./pages/Courses"));
const LearnHTML = lazy(() => import("./pages/LearnHTML"));
const LearnCSS = lazy(() => import("./pages/LearnCSS"));
const LearnJS = lazy(() => import("./pages/LearnJS"));
const LearnJava = lazy(() => import("./pages/LearnJava"));
const LearnC = lazy(() => import("./pages/LearnC"));
const LearnCPP = lazy(() => import("./pages/LearnCPP"));
const LearnPython = lazy(() => import("./pages/LearnPython"));
const Quiz = lazy(() => import("./pages/Quiz"));
const QuizHTML = lazy(() => import("./pages/QuizHTML"));
const QuizCSS = lazy(() => import("./pages/QuizCSS"));
const QuizJS = lazy(() => import("./pages/QuizJS"));
const QuizCPP = lazy(() => import("./pages/QuizCPP"));
const QuizPython = lazy(() => import("./pages/QuizPython"));
const QuizJava = lazy(() => import("./pages/QuizJava"));
const QuizC = lazy(() => import("./pages/QuizC"));
const Notes = lazy(() => import("./pages/Notes"));

// ← Loading screen shown while page loads
const LoadingScreen = () => (
  <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#0f172a",
    color: "white",
    fontSize: "1.2rem"
  }}>
    Loading...
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/login" element={<Navigate to="/auth" replace />} />
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
      </Suspense>
    </BrowserRouter>
  );
}

export default App;