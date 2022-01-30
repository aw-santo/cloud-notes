import React, { useState, useContext } from 'react';
import NoteContext from '../context/notes/noteContext';

const AddNote = () => {
    const [note, setNote] = useState({title:'', desc:'', tag:''});

    const context = useContext(NoteContext);
    const { addNote } = context;

    const handleAdd = (e) => {
        addNote(note.title, note.desc, note.tag);
    }

    const onChange = (e) => {
        const { name, value } = e.target;
        setNote({...note, [name]: value});
    }
    return (
        <>
            <div className="container my-2">
                <div className='my-5'>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" aria-describedby="title" onChange={onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Description</label>
                        <input type="text" className="form-control bb" id="desc" name="desc" onChange={onChange} />
                    </div>
                    <button type="submit" className="btn btn-primary grow" onClick={handleAdd}>Add</button>
                </div>
            </div>
        </>
    );
};

export default AddNote;

