import React, {useState} from 'react';
import './App.css';
import {Display} from "./components/Display/Display";
import {Button} from "./components/Button/Button";

function App() {
    const [count, setCount] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [startValue, setStartValue] = useState<number>(0)
    const [curSettings, setCurSettings] = useState({max: 5, start: 1})
    const [applySettings, setApplySettings] = useState(true)

    const incrementOnClickHandler = () => {
        if (count < curSettings.max) {
            setCount(count + 1)
        }
    }

    const resetOnClickHandler = () => {
        setCount(curSettings.start)
    }

    const setCounterSettings = () => {
        if (maxValue !== startValue && maxValue > startValue) {
            setCurSettings({max: maxValue, start: startValue})
            setApplySettings(true)
            setCount(startValue)
        } else {
            setApplySettings(false)
        }
    }

    const onChaneMaxValue = (number: string) => {
        setMaxValue(Number(number))
        setApplySettings(false)
    }

    const onChaneStartValue = (number: string) => {
        setStartValue(Number(number))
        setApplySettings(false)
    }

    return (
        <div className="app">
            <div className="settings">
                <div className="counterTitle">Counter settings</div>
                <div className="valueSettings">
                    <div className="value">
                        <label htmlFor="maxValue">max value</label>
                        <input type="number" id="maxValue" value={maxValue}
                               onChange={(e) => onChaneMaxValue(e.currentTarget.value)}/>
                    </div>
                    <div className="value">
                        <label htmlFor="startValue">start value</label>
                        <input type="number" id="startValue" value={startValue}
                               onChange={(e) => onChaneStartValue(e.currentTarget.value)}/>
                    </div>
                </div>
                <Button className="settingsButton" callback={setCounterSettings}
                        currentDisabled={applySettings}>set</Button>
            </div>
            <div className="counter">
                <div className="counterTitle">Counter</div>
                <div className="counterContainer">
                    <Display count={count} maxCount={maxValue}/>
                    <div className="buttonsContainer">
                        <Button callback={incrementOnClickHandler}
                                currentDisabled={count === curSettings.max}>inc</Button>
                        <Button callback={resetOnClickHandler} currentDisabled={count === curSettings.start}
                                className={"resetButton"}>reset</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;
