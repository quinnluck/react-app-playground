import React, { useState } from "react";

function CounterButton() {
    let [counter, setCounter] = useState(0);

    return (
        <button>TEST</button>
    );
}

export default CounterButton
//ReactDOM.render(<CounterButton/>, document.getElementById('mountNode'));