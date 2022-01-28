import React from 'react';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';

const Noteitem = ({ note }) => {
    return (
        <>
            <div className="card" style={
            {
                width: '300px',
                minHeight: '220px',
                marginRight: '20px',
                marginBottom: '30px'
            }}>
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{note.tag}</h6>
                    <p className="card-text">{note.desc}</p>
                    <div style={{
                        width: '266px',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        marginTop: '10px',
                        bottom: '10px'
                    }}>
                        <a href="/" className="btn btn-primary mx-3" style={{width: '30px', height: '30px', padding: 0}}><EditIcon /></a>
                        <a href="/" className="btn btn-danger mx-3" style={{width: '30px', height: '30px', padding: 0}}><DeleteOutlinedIcon /></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Noteitem;