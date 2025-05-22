import React from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";

export default function ArchivePage({ notes, onDelete, onUnarchive }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("search") || "";

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <section className="archive-page">
      <h2>Catatan Arsip</h2>

      <SearchBar
        keyword={keyword}
        onSearch={(value) => {
          const params = {};
          if (value) params.search = value;
          setSearchParams(params);
        }}
      />

      {filteredNotes.length > 0 ? (
        <NoteList
          notes={filteredNotes}
          onDelete={onDelete}
          onArchive={onUnarchive}
          showActions={false}
        />
      ) : (
        <div className="notes-list-empty">
          <p>Arsip kosong</p>
        </div>
      )}
    </section>
  );
}

ArchivePage.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
};
