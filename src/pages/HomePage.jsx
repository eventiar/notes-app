import React from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import NoteList from "../components/NoteList";
import FloatingAddButton from "../components/FloatingAddButton";

export default function HomePage({ notes, onDelete, onArchive }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("search") || "";

  const filtered = notes.filter((n) =>
    n.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <section className="homepage">
      <h2>Catatan Aktif</h2>
      <SearchBar
        keyword={keyword}
        onSearch={(val) => setSearchParams(val ? { search: val } : {})}
      />
      {filtered.length > 0 ? (
        <NoteList
          notes={filtered}
          onDelete={onDelete}
          onArchive={onArchive}
          showActions={false}
        />
      ) : (
        <div className="notes-list-empty">
          <p>Tidak ada catatan</p>
        </div>
      )}
      <FloatingAddButton />
    </section>
  );
}

HomePage.propTypes = {
  notes: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};
