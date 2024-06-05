import React, { useState } from 'react';
import 'simplemde/dist/simplemde.min.css';
import './App.css';
import NoteEditor from './NoteEditor';
import NoteList from './NoteList';

const App = () => {
	const [notes, setNotes] = useState([
		{ id: 1, title: 'Note 1', content: 'This is the content of note 1' },
		{ id: 2, title: 'Note 2', content: 'This is the content of note 2' },
	]);
	const [selectedNoteId, setSelectedNoteId] = useState(notes[0].id);

	const updateNote = (id, content) => {
		setNotes(notes.map(note => (note.id === id ? { ...note, content } : note)));
	};

	return (
		<div className="app">
			<NoteList notes={notes} setSelectedNoteId={setSelectedNoteId} />
			<NoteEditor
				note={notes.find(note => note.id === selectedNoteId)}
				updateNote={updateNote}
			/>
		</div>
	);
};

export default App;
