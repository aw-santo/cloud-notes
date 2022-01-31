import React, { useContext } from 'react';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import './noteitem.css';
// import 'animate.css';

import NoteContext from '../context/notes/noteContext';

const Noteitem = ({ note, handleEdit }) => {

    const context = useContext(NoteContext);
    const { deleteNote } = context;

    const handleDelete = () => {
        deleteNote(note._id);
    }

    return (
        <>
            <div className="card my-card" style={
            {
                width: '300px',
                margin: '0 auto',
                alignSelf: 'stretch'
            }} >
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{note.tag}</h6>
                    <p className="card-text" style={{marginBottom: '40px'}}>{`${note.desc.length>=250?note.desc.slice(0, 250)+'...':note.desc}`}</p>
                    <div className={`buttons`}>
                        <i className="btn btn-primary mx-3" style={{width: '30px', height: '30px', padding: 0}}onClick={() => handleEdit(note)}><EditIcon /></i>
                        <i className="btn btn-danger mx-3" style={{width: '30px', height: '30px', padding: 0}} onClick={handleDelete}><DeleteOutlinedIcon /></i>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Noteitem;