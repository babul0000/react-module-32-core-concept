import { use } from "react"
import Practice from "./Practice222";

export default function Buying ({apiFinal}) {
const output = use(apiFinal);
console.log(output);
    return(
        <div className="card">
            <h2>buy now {output.length}</h2>
            {
                output.map(out => <Practice out={out}></Practice>)
            }
        </div>
    )
}