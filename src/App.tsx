import React, {useState} from 'react';
import './App.css';
import {Display} from "./components/Display/Display";
import {Button} from "./components/Button/Button";

function App() {
    const [count, setCount] = useState<number>(0)
    const MAX_COUNT = 5;

    const incrementOnClickHandler = () => {
        if (count < 5) {
            setCount(count + 1)
        }
    }

    const resetOnClickHandler = () => {
        setCount(0)
    }

    return (
        <div className="app">
            <div className="counterTitle">Counter</div>
            <div className="counterContainer">
                <Display count={count} maxCount={MAX_COUNT}/>
                <div className="buttonsContainer">
                    <Button callback={incrementOnClickHandler} currentDisabled={count === 5}>inc</Button>
                    <Button callback={resetOnClickHandler} currentDisabled={count === 0} className={"resetButton"}>reset</Button>
                </div>
            </div>
        </div>
    );
}

export default App;
