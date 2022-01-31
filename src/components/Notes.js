import React, { useContext, useEffect } from 'react';
import NotesContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';

const Notes = () => {

    const nCon = useContext(NotesContext);
    const { notes, getNotes } = nCon;

    useEffect(() => {
        getNotes();
    }, []);
    

    return (
        <>
            <AddNote />
            <div className="">
                <h2> Your notes</h2>
                <div className="notes" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    marginTop: '4rem',
                    marginBottom: '4rem',
                    rowGap: '30px',
                    columnGap: '15px'
                }}>
                    {
                        notes.map((note) => {
                            return (
                                <Noteitem key={note._id} note={note} />
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Notes;
