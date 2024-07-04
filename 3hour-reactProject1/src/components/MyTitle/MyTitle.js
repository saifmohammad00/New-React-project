import "./MyTitle.css";

const MyTitle=({totalNotes,setSearchQuery, filteredCount})=>{
    return <div className="title">
        <h1>NoteBook</h1>
        <label htmlFor="search">Search Notes:</label>
        <input id="search" onChange={(e)=>setSearchQuery(e.target.value)}/>
        <p>Total Notes:{totalNotes}</p>
        <p>Showing:{filteredCount}</p>
    </div>
}
export default MyTitle;