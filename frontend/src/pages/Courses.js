import { useNavigate } from "react-router-dom";
import "../styles/courses.css";

// Import icons
import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaPython, FaPhp, FaNodeJs } from "react-icons/fa";
import { SiC, SiCplusplus, SiReact } from "react-icons/si";

const languages = [
  { name: "HTML", icon: <FaHtml5 color="#e34c26" /> },
  { name: "CSS", icon: <FaCss3Alt color="#264de4" /> },
  { name: "JavaScript", icon: <FaJs color="#f0db4f" /> },
  { name: "Java", icon: <FaJava color="#f89820" /> },
  { name: "C", icon: <SiC color="#00599C" /> },
  { name: "C++", icon: <SiCplusplus color="#004482" /> },
  { name: "Python", icon: <FaPython color="#306998" /> },
];

function Courses() {
  const navigate = useNavigate();

  return (
    <div className="courses-container">
      <h1>Select Language to learn 📚</h1>

      <div className="courses-grid">
        {languages.map((lang, index) => (
          <div
            key={index}
            className="course-card"
            onClick={() => navigate(`/learn/${lang.name.toLowerCase()}`)}
          >
            <div className="icon">{lang.icon}</div>
            <h2>{lang.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
