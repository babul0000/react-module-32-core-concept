import { use } from "react"
import Friend from "./Forever";

export default function Friends ({friendsPromiss}) {
const friends = use(friendsPromiss);
console.log(friends);

    return(
        <div className="card">
            <h3>hello world</h3>
            <p>friends: {friends.length}</p>

            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    )
}