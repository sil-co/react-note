
const NoteList = ({ notes, setSelectedNoteId }) => {
	return (
		<div className="note-list">
			{notes.map(note => (
				<div
					key={note.id}
					className="note-list-item"
					onClick={() => setSelectedNoteId(note.id)}
				>
					{note.title}
				</div>
			))}
		</div>
	);
};

export default NoteList;
