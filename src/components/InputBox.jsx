import React from "react";

function InputBox({
    label,
    amount,
    onAmtChange,
    onCurrChange,
    currncyOptions = [],
    selectCurr = "usd",
    amtDisable = false,
    currDisable = false,
    className = "",
}) {
   

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label  htmlFor={1} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={1}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amtDisable}
                    value={amount}
                    onChange={(e)=> onAmtChange && onAmtChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    disabled={currDisable}
                    value={selectCurr}
                    onChange={(e)=> onCurrChange && onCurrChange(e.target.value)}
                >
                    
                        
                        {currncyOptions.map((c)=>(<option key={c} value={c}>
                            {c}
                        </option>))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
