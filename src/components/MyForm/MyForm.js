import React, { useState } from "react";

const MyForm = ({updateListData, listData,searchQuery}) => {
    const [title,setTitle]=useState("");
    const [textvalue, setTextValue]=useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        const newListData={
            title:title,
            description:textvalue
        }
        updateListData([...listData,newListData]);
        setTitle("");
        setTextValue("");
    }

    const handleDelete = (index) => {
        const updatedList = [...listData];
        updatedList.splice(index, 1);
        updateListData(updatedList);
    }

    const filteredList = listData.filter((notebook) =>
        notebook.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        searchQuery.trim() === ""
    );

    return <form onSubmit={handleSubmit}>
        <div>
            <div>
                <label>NoteBook Title:</label>
                <input type="text" name="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div>
                <label>NoteBook Description:</label><br></br>
                <textarea rows={10} cols={50} name="textvalue" value={textvalue} onChange={(e)=>setTextValue(e.target.value)}></textarea>
            </div>
            <button type="submit">Add to Book</button>
        </div>
        <div>
             <ul>
             {filteredList.map((notebook, index) => (
                        <li key={index}>
                            <h1>{notebook.title}</h1>
                            <p>{notebook.description}</p>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </li>
                    ))}
             </ul>
        </div>

    </form>
}
export default MyForm;