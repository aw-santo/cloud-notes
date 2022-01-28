import React, { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = ( props ) => {
    const s1 = {
        name: "harry",
        class: "Eng"
    };

    const [state, setState] = useState(s1);
    const update = () => {
        setTimeout(() => {
            setState({
                name: "san",
                class: "mtexh"
            });
        }, 2000);
    }

    return(
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;