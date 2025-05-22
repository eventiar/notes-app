import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  getActiveNotes,
  getArchivedNotes,
  addNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
} from "./utils/local-data";
import { showFormattedDate } from "./utils";

import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import DetailPage from "./pages/DetailPage";
import ArchivePage from "./pages/ArchivePage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  const [notes, setNotes] = useState(getActiveNotes());
  const [archivedNotes, setArchivedNotes] = useState(getArchivedNotes());

  const refresh = () => {
    setNotes(getActiveNotes());
    setArchivedNotes(getArchivedNotes());
  };

  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>
            <Link to="/" className="logo">
              Aplikasi Catatan
            </Link>
          </h1>
          <nav className="navigation">
            <ul>
              <li>
                <Link to="/archive">Arsip</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  notes={notes}
                  onDelete={(id) => {
                    deleteNote(id);
                    refresh();
                  }}
                  onArchive={(id) => {
                    archiveNote(id);
                    refresh();
                  }}
                />
              }
            />
            <Route
              path="/add"
              element={
                <AddPage
                  onAdd={(data) => {
                    addNote(data);
                    refresh();
                  }}
                />
              }
            />
            <Route
              path="/note/:id"
              element={
                <DetailPage
                  getNote={(id) =>
                    notes.concat(archivedNotes).find((n) => n.id === id)
                  }
                  onDelete={(id) => {
                    deleteNote(id);
                    refresh();
                  }}
                  onArchive={(id) => {
                    archiveNote(id);
                    refresh();
                  }}
                  onUnarchive={(id) => {
                    unarchiveNote(id);
                    refresh();
                  }}
                  showFormattedDate={showFormattedDate}
                />
              }
            />
            <Route
              path="/archive"
              element={
                <ArchivePage
                  notes={archivedNotes}
                  onDelete={(id) => {
                    deleteNote(id);
                    refresh();
                  }}
                  onUnarchive={(id) => {
                    unarchiveNote(id);
                    refresh();
                  }}
                />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
