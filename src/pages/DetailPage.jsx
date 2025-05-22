import React from "react";
import PropTypes from "prop-types";
import { useParams, useNavigate } from "react-router-dom";

export default function DetailPage({
  getNote,
  onDelete,
  onArchive,
  onUnarchive,
  showFormattedDate,
}) {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = getNote(id);

  if (!note) {
    return (
      <div className="notes-list-empty">
        <p>Catatan tidak ditemukan</p>
      </div>
    );
  }

  const handleArchiveToggle = () => {
    note.archived ? onUnarchive(id) : onArchive(id);
    navigate("/");
  };

  const handleDelete = () => {
    onDelete(id);
    navigate("/");
  };

  return (
    <section className="detail-page">
      <h2 className="detail-page__title">{note.title}</h2>
      <p className="detail-page__createdAt">
        {showFormattedDate(note.createdAt)}
      </p>
      <p className="detail-page__body">{note.body}</p>

      <div className="detail-page__action">
        <button type="button" className="action" onClick={handleArchiveToggle}>
          {note.archived ? "↩️" : "📥"}
        </button>
        <button type="button" className="action" onClick={handleDelete}>
          🗑️
        </button>
      </div>
    </section>
  );
}

DetailPage.propTypes = {
  getNote: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
  showFormattedDate: PropTypes.func.isRequired,
};
