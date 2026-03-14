import { useState } from "react"

export default function Batsman() {
    const [runs, setRuns] = useState(0)
    const [sixes, setSixes] = useState(0);

    const handleRun = () => {
        const run = runs + 1;
        setRuns(run);
    }

    const handleFour = () => {
        const four = runs + 4;
        setRuns(four)
    }

    const handleSix = () => {
        const six = runs + 6;
        const sixesCount = sixes + 1;
        setSixes(sixesCount)
        setRuns(six)
    }
    return(
        <div>
            <h1>player Bangladesh</h1>
            <h2>name: </h2>
            <h4>sixes: {sixes}</h4>
            {
                runs >= 50 && <p>your score : 50</p>
            }
            <h4>score: {runs}</h4>
            <button onClick={handleRun}>single: </button>
            <br /> <br />
            <button onClick={handleFour}>four: </button>
            <br /> <br />
            <button onClick={handleSix}>six: </button>
        </div>
    )
}