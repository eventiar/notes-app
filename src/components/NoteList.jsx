import React from "react";
import PropTypes from "prop-types";
import NoteItem from "./NoteItem";

export default function NoteList({ notes, onDelete, onArchive, showActions }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          {...note}
          onDelete={onDelete}
          onArchive={onArchive}
          showActions={showActions}
        />
      ))}
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      ﾠid: PropTypes.string.isRequired,
      ﾠtitle: PropTypes.string.isRequired,
      ﾠbody: PropTypes.string.isRequired,
      ﾠcreatedAt: PropTypes.string.isRequired,
    })
  ),
};
NoteList.defaultProps = {
  showActions: true,
};
