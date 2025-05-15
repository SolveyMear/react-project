import { useState } from "react";

export function Form({onBookCreate}) {
     
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [img, setImg] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        onBookCreate(title, author, img, 1);
        setTitle("");
        setAuthor("");
        setImg("");
    }

    return (
        <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange= {(event) => setTitle(event.target.value)} placeholder='Titre du livre'/>
        <input type="text" value={author} onChange= {(event) => setAuthor(event.target.value)} placeholder='Auteurice du livre'/>
        <input type="text" value={img} onChange= {(event) => setImg(event.target.value)} placeholder='Image du livre'/>
        <button type='submit'>Enregistrer</button>
      </form>
    )
}