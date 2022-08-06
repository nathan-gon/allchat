import { useState } from "react"


const Test = () => {
    const [num, setNum] = useState(0)
    console.log('hihi um ')
    return (
        <div>

            <div>{num}</div>
            <button onClick={() => setNum(num + 1)} >plus</button>
        </div>
    )
}

export default Test