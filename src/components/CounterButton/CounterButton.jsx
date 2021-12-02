import React, { useState } from "react";

function CounterButton(props) {
    let [counter, setCounter] = useState(0);
    let { valueToIncrement } = props

    return (
        <button onClick={() => setCounter(counter + valueToIncrement)} >{counter}</button>
    );
}

export default CounterButton
//ReactDOM.render(<CounterButton/>, document.getElementById('root'));