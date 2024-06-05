import React, { useState } from 'react';
import SimpleMDE from 'react-simplemde-editor';
import ReactMarkdown from 'react-markdown';

const NoteEditor = ({ note, updateNote }) => {
    const [isEditing, setIsEditing] = useState(true);

    return (
        <div className="note-editor">
            {isEditing ? (
                <SimpleMDE
                    value={note.content}
                    onChange={(value) => updateNote(note.id, value)}
                />
            ) : (
                <ReactMarkdown>{note.content}</ReactMarkdown>
            )}
            <button onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? '保存' : '編集'}
            </button>
        </div>
    );
};

export default NoteEditor;
