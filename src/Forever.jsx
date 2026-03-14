
export default function Friend ({friend}) {
    console.log(friend);
    const {name, email,phone} = friend;
    
    return(
        <div className="card">
            <h2>name: {name}</h2>
            <p>email: {email}</p>
            <p>phone number: {phone}</p>
        </div>
    )
}