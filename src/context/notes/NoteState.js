import React, { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) => {

    const [notes, setNotes] = useState([]);

    const host = "http://localhost:5000/";

    // Get all notes
    const getNotes = async () => {
        // to-do api-call

        const url = `${host}api/notes/fetchallnotes`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFlZmQwZjc5NDVkYzQzMjZlZmIyOGU2In0sImlhdCI6MTY0MzExNDU4Nn0.iz1YK8yaGOyWgrTt3jyus_M7fjkbRqbI_MmjslExf1E'
            }
        });

        const json = await response.json();

        setNotes(json);

    }

    // Add a note
    const addNote = async (title, desc, tag) => {
        // to-do api-call

        const url = `${host}api/notes/addnote`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFlZmQwZjc5NDVkYzQzMjZlZmIyOGU2In0sImlhdCI6MTY0MzExNDU4Nn0.iz1YK8yaGOyWgrTt3jyus_M7fjkbRqbI_MmjslExf1E'
            },
            body: JSON.stringify({ title, desc, tag })
        });
        console.log(response.json());
        getNotes();

        // const Note = {
        //     "_id": "61f3c236c1c5bb2a8cdf3da4",
        //     "user": "61efd0f7945dc4326efb28e6",
        //     "title": "Added Meeting",
        //     "desc": "added meeting at 4pm regarding the weather",
        //     "tag": " added Pro",
        //     "date": "2022-01-28T10:15:18.261Z",
        //     "__v": 0
        // };

        // setNotes((prev) => prev.concat(Note));
    }

    // Delete a note
    const deleteNote = async (ID) => {
        // to-do api-call

        const url = `${host}api/notes/deletenote/${ID}`;
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFlZmQwZjc5NDVkYzQzMjZlZmIyOGU2In0sImlhdCI6MTY0MzE5MzUzMn0.Fgk-cPJ55cRuX5ePdtM2BwPtAWkpdAP7knuPOCnL558'
            }
        });
        console.log(response);

        getNotes();
    }

    // Edit a note
    const editNote = async (id, title, desc, tag) => {
        // to-do api-call
        const url = `${host}api/notes/updatenote/${id}`;
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFlZmQwZjc5NDVkYzQzMjZlZmIyOGU2In0sImlhdCI6MTY0MzExNDU4Nn0.iz1YK8yaGOyWgrTt3jyus_M7fjkbRqbI_MmjslExf1E'
            },
            body: JSON.stringify({ title, desc, tag })
        });
        console.log(response);
        getNotes();

        // for (let i = 0; i < notes.length; i++) {
        //     const e = notes[i];
        //     if (e._id === id) {
        //         e.title = title;
        //         e.desc = desc;
        //         e.tag = tag;
        //         break;
        //     }
        // }
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;