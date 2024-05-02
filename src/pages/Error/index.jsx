import { useNavigate } from "react-router-dom";
import "./index.css";

function Error() {
  const navigate = useNavigate();
  return (
    <div className="flex-container">
      <div className="text-center ">
        <h1 className="text-8xl text-[red] font-bold">404 Not Found</h1>
        <p className="text-5xl text-[red] mb-8">you entered the wrong url</p>
        <button className="btn btn-primary w-[190px]"
          type="button"
          name="button"
          onClick={() => {
            navigate("/");
          }}
        >
          Return Home Pages
        </button>
      </div>
    </div>
  );
}

export default Error;
