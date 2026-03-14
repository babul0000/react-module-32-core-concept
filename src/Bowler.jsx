import { useState } from "react"

export default function Bowler() {
    const [ball, setBall] = useState(0)
    const ballCount = () => {
        const singleBall = ball + 1;
        setBall(singleBall)
    }


    return(
        <div>
            <h1>Bowler name: </h1>
            {
                ball === 6  && <p>over</p>
            }

            <p>ball: {ball}</p> <br />
            <button onClick={ballCount}>ball: </button>
            <br /><br />
            
        </div>
    )
}