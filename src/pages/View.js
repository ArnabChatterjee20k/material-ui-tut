import { useEffect, useState } from "react"
import Grid from "@mui/material/Grid";
export default function View() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/notes")
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])

  return (
      <Grid container spacing={3}>
        {notes.map(note => (
          <Grid item key={note.id} xs={12} md={6} lg={4}>
            <h3>{note.title}</h3>
            <p>{note.detail}</p>
            <p>{note.category}</p>
          </Grid>
        ))}
      </Grid>
  )
}
