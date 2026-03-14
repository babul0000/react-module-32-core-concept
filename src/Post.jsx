import { use } from "react"
import Posting from "./Posting";

export default function Posts({postData}) {
    const posts = use(postData);
    console.log(posts)
    return(
        <div className="card">
            <p>post: {posts.length}</p>
            {
                posts.map(post => <Posting post={post}></Posting>)
            }
        </div>
    )
}