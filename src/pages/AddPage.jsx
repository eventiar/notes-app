import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function AddPage({ onAdd }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTitle = title.trim() || "(untitled)";
    const newBody = body.trim() || "";
    onAdd({ title: newTitle, body: newBody });
    navigate("/");
  };

  return (
    <section className="add-new-page">
      <form className="add-new-page__input" onSubmit={handleSubmit}>
        <input
          type="text"
          className="add-new-page__input__title"
          placeholder="Judul..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="add-new-page__input__body"
          placeholder="Isi catatan..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </form>

      <div className="add-new-page__action">
        <button
          type="submit"
          form="add-note-form"
          className="action"
          onClick={handleSubmit}
        >
          ✔️
        </button>
      </div>
    </section>
  );
}

AddPage.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
