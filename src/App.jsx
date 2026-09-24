import UserCard from "./UserCard";

function App(){
    let userData = [
        { id: 1, name: "Alice", role: "Dev", isActive: true },
        { id: 2, name: "John", role: "HR", isActive: false },
        { id: 3, name: "Sia", role: "Manager", isActive: true }
    ]

    return(
        <>
        {userData.map((data) => (
                <UserCard id={data.key} name={data.name} role={data.role} isActive={data.isActive} />
        ))
        }
        </>
    )
}

export default App;