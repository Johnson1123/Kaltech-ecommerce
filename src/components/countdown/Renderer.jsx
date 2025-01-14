import PropTypes from "prop-types";

const Renderer = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="timer timer-style">
      <div>
        <span className="cdown day">
          {days} <p>Days</p>
        </span>
        <span className="cdown hour">
          {hours} <p>Hours</p>
        </span>
        <span className="cdown minutes">
          {minutes} <p>Minutes</p>
        </span>
        <span>
          {seconds} <p>Secs</p>
        </span>
      </div>
    </div>
  );
};

Renderer.propTypes = {
  days: PropTypes.number,
  hours: PropTypes.number,
  minutes: PropTypes.number,
  seconds: PropTypes.number,
};

export default Renderer;

// Get-ChildItem -Path "src/layouts" -Recurse -Filter "*.js*" | ForEach-Object {
//     (Get-Content $_.FullName) |
//     ForEach-Object {$_ -replace "process\.env\.PUBLIC_URL", "import.meta.env.VITE_PUBLIC_URL"} |
//     Set-Content $_.FullName
// }
