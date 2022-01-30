import React, { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) => {

    const notesInitial = [
        {
            "_id": "61f3c201c1c5bb2a8cd05f31",
            "user": "61efd0f7945dc4326efb28e6",
            "title": "Sanket",
            "desc": "sanket is a very Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam deserunt omnis vitae nemo, eum labore cupiditate minima doloremque magni sed adipisci aspernatur accusantium modi nihil officiis dignissimos dolore minus! Ut cumque, doloremque consequuntur iste quis deleniti hic? Consectetur nemo facilis blanditiis fugit laboriosam quis optio libero, ullam sequi sint numquam repudiandae vero quaerat? Perspiciatis quae est mollitia nostrum impedit distinctio odio dolorum excepturi eum veniam nam, saepe quod facere eius soluta magni aperiam architecto. Id reprehenderit ipsum laudantium fugiat, placeat voluptatem quo sed atque libero officiis a soluta deserunima doloremque magni sed adipisci aspernatur accusantium modi nihil officiis dignissimos dolore minus! Ut cumque, doloremque consequuntur iste quis deleniti hic? Consectetur nemo facilis blanditiis fugit laboriosam quis optio libero, ullam sequi sint numquam repudiandae vero quaerat? Perspiciatis quae est mollitia nostrum impedit distinctio odio dolorum excepturi eum veniam nam, saepe quod facere eiunima doloremque magni sed adipisci aspernatur accusantium modi nihil officiis dignissimos dolore minus! Ut cumque, doloremque consequuntur iste quis deleniti hic? Consectetur nemo facilis blanditiis fugit laboriosam quis optio libero, ullam sequi sint numquam repudiandae vero quaerat? Perspiciatis quae est mollitia nostrum impedit distinctio odio dolorum excepturi eum veniam nam, saepe quod facere eiunt cum aut eaque ex eos asperiores non dignissimos. Ab sint labore repellendus minus ipsum cum recusandae similique harum natus neque quis sapiente amet molestiae maiores, cumque pariatur adipisci ex quo hic ut? Facilis facere itaque aperiam commodi, acgood boy, and is a very brilliant student",
            "tag": "Per",
            "date": "2022-01-28T10:14:25.817Z",
            "__v": 0
        },
        {
            "_id": "61f3c236c1c5bb2a8cd05f34",
            "user": "61efd0f7945dc4326efb28e6",
            "title": "Meeting",
            "desc": "meeting at 4pm regarding the weather",
            "tag": "Pro",
            "date": "2022-01-28T10:15:18.261Z",
            "__v": 0
        },
        {
            "_id": "61f3c249c1c5bb2a8cd05f36",
            "user": "61efd0f7945dc4326efb28e6",
            "title": "Class",
            "desc": "college lecture",
            "tag": "Edu",
            "date": "2022-01-28T10:15:37.907Z",
            "__v": 0
        },
        {
            "_id": "61f3c249gc1c5bb2a8chtd05f36",
            "user": "61efd0f7945dc4326efb28e6",
            "title": "Dinner",
            "desc": "done with dinner",
            "tag": "Per",
            "date": "2022-01-28T10:15:37.907Z",
            "__v": 0
        },
        {
            "_id": "61f3c249c1zrc5bb2a8cd05f36",
            "user": "61efd0f7945dc4326efb28e6",
            "title": "Class",
            "desc": "college lecture",
            "tag": "Edu",
            "date": "2022-01-28T10:15:37.907Z",
            "__v": 0
        },
    ]

    // eslint-disable-next-line
    const [notes, setNotes] = useState(notesInitial);

    const host = "http://localhost:5000/";

    // Add a note
    const addNote = async (title, desc, tag="default") => {
        // to-do api-call

        const url = `${host}api/notes/addnote`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFlZmQwZjc5NDVkYzQzMjZlZmIyOGU2In0sImlhdCI6MTY0MzExNDU4Nn0.iz1YK8yaGOyWgrTt3jyus_M7fjkbRqbI_MmjslExf1E'
            },
            body: JSON.stringify({title, desc, tag})
        });
        const json = response.json();

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
    const deleteNote = (ID) => {
        // to-do api-call
        setNotes((prev) => prev.filter((ele, ind, arr) => {
            return ele._id !== ID;
        }));
    }

    // Edit a note
    const editNote = async (id, title, desc, tag) => {
        // to-do api-call
        const url = `${host}api/notes/updatenote/${id}`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFlZmQwZjc5NDVkYzQzMjZlZmIyOGU2In0sImlhdCI6MTY0MzE5MzUzMn0.Fgk-cPJ55cRuX5ePdtM2BwPtAWkpdAP7knuPOCnL558'
            },
            body: JSON.stringify({title, desc, tag})
        });
        const json = response.json();

        for (let i = 0; i < notes.length; i++) {
            const e = notes[i];
            if (e._id === id) {
                e.title = title;
                e.desc = desc;
                e.tag = tag;
                break;
            }
        }
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;