// date wise data code
import React, { useState } from 'react';
import './NotesPage.css'; // Import your CSS file for styling

function NotesPage() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState('');

  const addNote = () => {
    if (currentNote.trim() !== '') {
      const currentDate = new Date();
      const noteWithDate = {
        note: currentNote,
        date: currentDate.toLocaleDateString(),
        year: currentDate.getFullYear(),
      };
      setNotes([...notes, noteWithDate]);
      setCurrentNote('');
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  // Group notes by date
  const groupedNotes = notes.reduce((acc, note) => {
    if (!acc[note.date]) {
      acc[note.date] = [];
    }
    acc[note.date].push(note);
    return acc;
  }, {});

  return (
    <div className="notes-container">
      <h1>Mentoring Session Report</h1>
      <div className="notes-input">
        <textarea
          value={currentNote}
          onChange={(e) => setCurrentNote(e.target.value)}
          placeholder="Write your note here..."
        />
        <button onClick={addNote}>Add Note</button>
      </div>
      <div className="notes-list">
        {Object.keys(groupedNotes).map((date) => (
          <div className="note-group" key={date}>
            <h2>{date}</h2>
            {groupedNotes[date].map((note, index) => (
              <div className="note" key={index}>
                <p>{note.note}</p>
                
                <button onClick={() => deleteNote(index)}>Delete</button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotesPage;

   