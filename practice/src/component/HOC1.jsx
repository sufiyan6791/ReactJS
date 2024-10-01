const Books = ({books})=>{
    return (
    <>
    <h1>Books</h1>
    {books.map((item,i)=>(
        <ul key={i}>
    <li>title : {item.title}</li>
    <li>author: {item.author}</li>
        </ul>
    ))}
    </>
    
    
    
    )
    
    
    }
    
    const Songs = ({songs})=>{
        return (
        <>
        <h1>songs</h1>
        {songs.map((item,i)=>(
            <ul key={i}>
        <li>songs : {item.songs}</li>
        <li>singer: {item.singer}</li>
            </ul>
        ))}
        </>
        
        
        
        )
        
        
        }
    
    
        export { Books, Songs };