import { useNavigate } from "react-router-dom";
import "../styles/courses.css"; // Reuse your existing grid styling
import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaPython } from "react-icons/fa";
import { SiC, SiCplusplus } from "react-icons/si";

const quizList = [
  { name: "HTML", icon: <FaHtml5 color="#e34c26" /> },
  { name: "CSS", icon: <FaCss3Alt color="#264de4" /> },
  { name: "JavaScript", icon: <FaJs color="#f0db4f" /> },
  { name: "C", icon: <SiC color="#00599C" /> },
  { name: "C++", icon: <SiCplusplus color="#004482" /> },
  { name: "Java", icon: <FaJava color="#f89820" /> },
  { name: "Python", icon: <FaPython color="#306998" /> },
];

function QuizHome() {
  const navigate = useNavigate();

  return (
    <div className="courses-container">
      <h1>Test Your Knowledge 🧠</h1>

      <div className="courses-grid">
        {quizList.map((lang, index) => (
          <div
            key={index}
            className="course-card"
            onClick={() => navigate(`/quiz/${lang.name.toLowerCase()}`)}
          >
            <div className="icon">{lang.icon}</div>
            <h2>{lang.name} Quiz</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuizHome;