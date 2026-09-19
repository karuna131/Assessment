const style = {
    border:"2px solid black", 
    width: "300px", 
    textAlign:"center", 
    marginBottom:"20px"   
}

function UserCard({id, name, role, isActive}){
    return(
        <div key={id} style={style}>
        <h1>Name: {name}</h1>
        <p>Role: {role}</p>
        {isActive ? <button style={{color: "green", marginBottom:"10px"}}><b>Online</b></button> : <button style={{color: "gray", marginBottom:"10px"}}><b>Offline</b></button>}
        </div>
    )
}

export default UserCard;