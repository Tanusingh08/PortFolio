import "./Skills.css";

function Language({ lang, cssClass }) {
  return (
    <div className="bar">
      <div className="info">
        <span>{lang}</span>
      </div>
      <div className={`progress-line ${cssClass}`}>
        <span></span>
      </div>
    </div>
  );
}

export default Language;
