import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../utils";

export default function NoteItem({
  id,
  title,
  body,
  createdAt,
  archived,
  onDelete,
  onArchive,
  showActions,
}) {
  return (
    <div className="note-item">
      <h3 className="note-item__title">
        <Link to={`/note/${id}`}>{title}</Link>
      </h3>
      <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="note-item__body">
        {body.length > 100 ? `${body.slice(0, 100)}...` : body}
      </p>
      {showActions && (
        <div className="note-item__actions">
          <button className="action" onClick={() => onDelete(id)}>
            🗑
          </button>
          <button className="action" onClick={() => onArchive(id)}>
            {archived ? "↩" : "📥"}
          </button>
        </div>
      )}
    </div>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  showActions: PropTypes.bool,
};
NoteItem.defaultProps = {
  showActions: true,
};
