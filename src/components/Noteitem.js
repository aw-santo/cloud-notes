import React from 'react';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import './noteitem.css';
import 'animate.css';

const Noteitem = ({ note }) => {

    // const [visibility, setVisibility] = useState('hidden');

    // const handleHover = () => {
    //     setVisibility('visible animate__fadeIn');
    // }
    // const handleNotHover = () => {
    //     setVisibility('hidden animate__fadeOut');
    // }

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
                        <a href="/" className="btn btn-primary mx-3" style={{width: '30px', height: '30px', padding: 0}}><EditIcon /></a>
                        <a href="/" className="btn btn-danger mx-3" style={{width: '30px', height: '30px', padding: 0}}><DeleteOutlinedIcon /></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Noteitem;