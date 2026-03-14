import { use } from "react"


export default function Users ({fetchUsers}) {
    const users = use(fetchUsers);
    console.log(users);
    
    
    return(
        <div className="card">
            <h2>users data</h2>
            <h5>user: {users.length}</h5>
        </div>
    )
}