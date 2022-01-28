import React, { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props) => {

    const notesInitial = [
        {
            "_id": "61f3c201c1c5bb2a8cd05f31",
            "user": "61efd0f7945dc4326efb28e6",
            "title": "Sanket",
            "desc": "sanket is a very good boy, and is a very brilliant student",
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
        {
            "_id": "61f3c249c1ryc5bb2a8cd05f36",
            "user": "61efd0f7945dc4326efb28e6",
            "title": "Class",
            "desc": "college lecture",
            "tag": "Edu",
            "date": "2022-01-28T10:15:37.907Z",
            "__v": 0
        },
        {
            "_id": "61f3c249c1kzc5bb2a8cd05f36",
            "user": "61efd0f7945dc4326efb28e6",
            "title": "Class",
            "desc": "college lecture",
            "tag": "Edu",
            "date": "2022-01-28T10:15:37.907Z",
            "__v": 0
        },
        {
            "_id": "61f3c249ukc1c5bb2a8cd05f36",
            "user": "61efd0f7945dc4326efb28e6",
            "title": "Class",
            "desc": "college lecture",
            "tag": "Edu",
            "date": "2022-01-28T10:15:37.907Z",
            "__v": 0
        },
        {
            "_id": "61f3c24ey9c1c5ubb2a8cd05f36",
            "user": "61efd0f7945dc4326efb28e6",
            "title": "Class",
            "desc": "college lecture",
            "tag": "Edu",
            "date": "2022-01-28T10:15:37.907Z",
            "__v": 0
        },
        {
            "_id": "61f3c249yec1c5bb2a8cd05f36",
            "user": "61efd0f7945dc4326efb28e6",
            "title": "Class",
            "desc": "college lecture",
            "tag": "Edu",
            "date": "2022-01-28T10:15:37.907Z",
            "__v": 0
        },
        {
            "_id": "61f3c24y9c1c5bb2a8cd05f36",
            "user": "61efd0f7945dc4326efb28e6",
            "title": "Class",
            "desc": "college lecture",
            "tag": "Edu",
            "date": "2022-01-28T10:15:37.907Z",
            "__v": 0
        },
        {
            "_id": "61f3c249c1sc5bb2a8cd05f36",
            "user": "61efd0f7945dc4326efb28e6",
            "title": "Class",
            "desc": "college lecture",
            "tag": "Edu",
            "date": "2022-01-28T10:15:37.907Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial);

    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;