import { useEffect, useState } from "react"

import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
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
  return (
    <Container sx={{padding:10}}>
      <Grid container spacing={3}>
        {notes.map(note => (
          <Grid item key={note.id} sm={12} xs={6} md={6} lg={4}>
            <Notes_card note={note} handle_delete={handle_delete}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
