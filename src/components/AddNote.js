import React, { useState, useContext } from 'react';
import NoteContext from '../context/notes/noteContext';

const AddNote = () => {
    const [note, setNote] = useState({title:'', desc:'', tag:'Personal'});

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
                <form className='my-5' method="post" action="/">
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" aria-describedby="title" onChange={onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control bb" id="tag" name="tag" onChange={onChange} placeholder='Personal'/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Description</label>
                        <input type="text" className="form-control bb" id="desc" name="desc" onChange={onChange} />
                    </div>
                    <button type="button" disabled={note.title.length===0 || note.desc.length===0} className="btn btn-primary grow" onClick={handleAdd}>Add</button>
                    <button type="reset" className="btn btn-danger mx-4 grow">Clear</button>
                </form>
            </div>
        </>
    );
};

export default AddNote;

