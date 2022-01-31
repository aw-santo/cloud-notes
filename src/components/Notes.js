import React, { useState, useContext, useEffect, useRef } from 'react';
import NotesContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';
// import { display } from '@mui/system';

const Notes = () => {

    const nCon = useContext(NotesContext);
    const { notes, getNotes, editNote } = nCon;

    useEffect(() => {
        getNotes();
        // eslint-disable-next-line
    }, []);

    const editRef = useRef(null);
    const cancelRef = useRef(null);

    const [note, setNote] = useState({title:'', desc:'', tag:'Personal'});

    const handleEdit = (Note) => {
        setNote(Note)
        editRef.current.click();
    }


    const handleSave = (e) => {
        editNote(note._id, note.title, note.desc, note.tag);
        cancelRef.current.click();
    }

    const onChange = (e) => {
        const { name, value } = e.target;
        setNote({...note, [name]: value});
        // console.table(note);
    }

    return (
        <>
        {console.log(note)}
            <AddNote />
            <button ref={editRef} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ display: 'none' }}>
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="etitle" className="form-label">Title</label>
                                <input type="text" className="form-control" id="etitle" name="title" aria-describedby="title" onChange={onChange} value={note.title}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="etag" className="form-label">Tag</label>
                                <input type="text" className="form-control bb" id="etag" name="tag" onChange={onChange} value={note.tag}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="edesc" className="form-label">Description</label>
                                <input type="text" className="form-control bb" id="edesc" name="desc" onChange={onChange}value={note.desc} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button ref={cancelRef} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary" onClick={handleSave}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
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
                        notes.length?
                        notes.map((note) => {
                            return (
                                <Noteitem key={note._id} note={note} handleEdit={handleEdit} />
                            );
                        }): <p className='text-center'>Nothing to show😐...</p>
                    }
                </div>
            </div>
        </>
    );
};

export default Notes;
