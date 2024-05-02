import { useNavigate } from "react-router-dom";
import "./index.css";

function Error() {
  const navigate = useNavigate();
  return (
    <div className="flex-container">
      <div className="text-center">
        
        <button className="btn btn-primary"
          type="button"
          name="button"
          onClick={() => {
            navigate("/");
          }}
        >
          Return Home
        </button>
      </div>
    </div>
  );
}

export default Error;
