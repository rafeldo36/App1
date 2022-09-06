import React, { useState } from "react";

function IncDecCounter() {
    let [num, setNum] = useState(0);
    let incNum = () => {
        if (num < 10) {
            setNum(Number(num) + 1);
        }
    };
    let decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    }
    let handleChange = (e) => {
        setNum(e.target.value);
    }

    return (
        <>
            <div className="row-xl-2">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <button class="btn btn-outline-dark mx-2" type="button" onClick={decNum}>-</button>
                    </div>
                    <div class="col-2">
                        <input type="text" class="form-control" value={num} onChange={handleChange} />
                    </div>
                    <div class="input-group-prepend">
                        <button class="btn btn-outline-dark mx-2" type="button" onClick={incNum}>+</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IncDecCounter;