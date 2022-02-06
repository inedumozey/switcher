## Switcher
It is a react component package that toggles on true/false value.

## Installation
...

npm i switcher

...

## Usage
Recieves 3 props;
* value: which can either be true or false to toggle the switch. A click event can be maden on a wrapper of the Switch component to switch between true and false
* thumbColor: color of the thumb
* tractColor: color 0f the tract

the last two props can be made dynamic depending on the value

### Example
...

import { useState } from 'react';
import { Switcher } from 'switcher';

function App() {
    const [val, setVal] = useState(false);

    const toogleSwitch=()=>{
        setVal(!val);
    }
    
    return (
    <>
        <div
            style={{
                margin: '20px',
                width:'200px',
                height:'100px',
                background: val ? "#cdc" : '#444',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <div
                onClick={toogleSwitch}
            >
                <Switcher
                    value={val}
                    tractColor={val ? "red" : "black"}
                    thumbColor={val ? "black" : "red"}
                />
            </div>
        </div>
    </>
    );
}

export default App;

...