import { useEffect , useState } from "react"

export default function View() {
  const [notes,setNotes] = useState([]);
  useEffect( () => {
    fetch("http://localhost:3001/notes")
    .then(res => res.json())
    .then(data => setNotes(data))
  }, [])
  
  return (
    <div>
      {notes.map(note => (
        <div key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.detail}</p>
          <p>{note.category}</p>
        </div>
      ))}
    </div>
  )
}
