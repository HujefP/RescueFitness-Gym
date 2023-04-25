import { useRef, useState } from "react";

function Bmi() {
    let WeightInput = useRef();
    let HeightInput = useRef();
    let [name, setname] = useState('')

    function calculateHandler() {
        setname(WeightInput.current.value / (HeightInput.current.value * HeightInput.current.value))
    }
    return (
        <div className="App">
            <h1>Calculate Your BMI 💪</h1>
            <h2>{name}</h2>
            <div className="flex">
                <input ref={WeightInput} placeholder="Enter Your Weight in Kg" type="number" />
                <input ref={HeightInput} placeholder="Enter Yor Height in Cm" type="number" />
            </div>
            <button className="btn" onClick={calculateHandler}>Submit</button>
        </div>
    )
}

export default Bmi;