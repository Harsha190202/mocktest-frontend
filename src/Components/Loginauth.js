import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useLoginAuth() {
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userdata"));
    if (userData) {
      navigate("/");
    }
  }, [navigate]);
}
