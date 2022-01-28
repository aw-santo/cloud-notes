import React, { useContext } from 'react';
import NotesContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';

const Notes = () => {

    const nCon = useContext(NotesContext);
    const { notes, setNotes } = nCon;
    let count= 0;
    return (
        <>
            <h2>Your notes</h2>
            <div className="my-4" style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly'
            }}>
                {notes.map((note) => {
                    return(
                        <Noteitem key={note._id} note={note}/>
                    );
                })}
            </div>
        </>
    );
};

export default Notes;
