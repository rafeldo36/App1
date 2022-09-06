
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
   const notesInitial = [
    {
      "_id": "6312f1a95e08bae002f75c46",
      "user": "63123d23f71a0c300b41b664",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2022-09-03T06:18:17.565Z",
      "__v": 0
    },
    {
      "_id": "6312f1aa5e08bae002f75c48",
      "user": "63123d23f71a0c300b41b664",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2022-09-03T06:18:18.231Z",
      "__v": 0
    },
    {
      "_id": "6312f1aa5e08bae002f75c4a",
      "user": "63123d23f71a0c300b41b664",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2022-09-03T06:18:18.749Z",
      "__v": 0
    }
  ]
  const [notes, setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
    }
export default NoteState;