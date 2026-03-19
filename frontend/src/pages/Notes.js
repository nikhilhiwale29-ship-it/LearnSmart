import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaPython } from "react-icons/fa";
import { SiC, SiCplusplus } from "react-icons/si";
import { updateProgress } from "../utils/statsHelper"; // Ensure this is imported
import "../styles/courses.css"; 

const notesList = [
  { name: "HTML", icon: <FaHtml5 color="#e34c26" />, fileName: "html.pptx" },
  { name: "CSS", icon: <FaCss3Alt color="#264de4" />, fileName: "css.pptx" },
  { name: "JavaScript", icon: <FaJs color="#f0db4f" />, fileName: "javascript.pptx" },
  { name: "C", icon: <SiC color="#00599C" />, fileName: "c.pptx" },
  { name: "C++", icon: <SiCplusplus color="#004482" />, fileName: "cpp.pptx" },
  { name: "Java", icon: <FaJava color="#f89820" />, fileName: "java.pptx" },
  { name: "Python", icon: <FaPython color="#306998" />, fileName: "python.pptx" },
];

function NotesHome() {
  const handleDownload = (fileName) => {
    // 1. Update Dashboard Progress
    // We strip the extension to send just the language name to the tracker
    const langId = fileName.split('.')[0] + "_notes";
    updateProgress(langId);

    // 2. Trigger PPT Download
    const pptPath = `/assets/ppt/${fileName}`;
    
    const link = document.createElement("a");
    link.href = pptPath;
    
    // The 'download' attribute forces the browser to download instead of opening
    link.setAttribute("download", fileName); 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="courses-container">
      <h1>Download Presentation Slides 📊</h1>
      <div className="courses-grid">
        {notesList.map((lang, index) => (
          <div
            key={index}
            className="course-card"
            onClick={() => handleDownload(lang.fileName)}
          >
            <div className="icon">{lang.icon}</div>
            <h2>{lang.name} PPT</h2>
            <p>Click to download slides</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotesHome;