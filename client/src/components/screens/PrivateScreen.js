import { useState, useEffect } from "react";
import axios from "axios";
import "./PrivateScreen.css";
import { Link } from "react-router-dom";

const PrivateScreen = () => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");

  useEffect(() => {
    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/private/dashboard", config);
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        console.log(error);
        setError("Error");
      }
    };

    fetchPrivateDate();
  }, []);
  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    <section>
      <div>{privateData} Hello </div>
      <div>
        <Link to="/dashboard" onClick={() => localStorage.clear()}>
          Logout
        </Link>
      </div>
    </section>
  );
};

export default PrivateScreen;
