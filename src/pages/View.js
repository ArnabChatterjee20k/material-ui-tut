import { useEffect, useState } from "react"

import { Container } from "@mui/material";
// import Grid from "@mui/material/Grid";
import Masonry from "react-masonry-css";
import Notes_card from "./notes_card";
export default function View() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/notes")
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])

  /**
   * 
   * @param {int} id 
   */
  const handle_delete = async(id)=>{
    await fetch("http://localhost:3001/notes/"+id, {method:"DELETE"})
    const new_note = await notes.filter(note=>note.id!=id)
    setNotes(new_note)
  }

  // Breakpoints for the Masonry layout
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };
  return (
    <Container sx={{padding:10}} className="view">
        <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
        >
          {notes.map(note => (
            <div key={note.id} sm={12} xs={6} md={6} lg={4}>
              <Notes_card note={note} handle_delete={handle_delete}/>
            </div>
          ))}
        </Masonry>
    </Container>
  )
}
