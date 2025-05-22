import React from "react";
import { useNavigate } from "react-router-dom";

export default function FloatingAddButton() {
  const navigate = useNavigate();
  return (
    <div className="homepage__action">
      <button type="button" className="action" onClick={() => navigate("/add")}>
        +
      </button>
    </div>
  );
}
