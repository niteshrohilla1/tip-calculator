import { useState } from "react"
import Tip from "../Tip/Tip"

function AllTips({ setTip ,tip}) {
    const tips = [5, 10, 15, 25, 50]
    const handleSelectTip = (value)=>{
        setTip(value)
    }
    return (
        <div className="tip-container">
            <span className="text-preset-5">Select Tip %</span>
            <div className="all-tip">
                {tips.map((value, index) =>
                    <Tip
                        key={index}
                        value={value}
                        setTip={handleSelectTip}
                        selected = {tip === value}
                    />
                )}
                <div className="tip-custom text-preset-3 text-grey-550">
                    <span>Custom</span>
                </div>
            </div>
        </div>
    )
}
export default AllTips