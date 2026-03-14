
export default function Posting({post}) {
return(
    <div>
        <p className="card"> {post.id}, {post.title}</p>
    </div>
)
}