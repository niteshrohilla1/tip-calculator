import { useEffect, useState } from "react"

function FinalBill({ amount, peopleCount, tip, totalTip, tipPerPerson, setTipPerPerson, setTotalTip, setAmount, setPeopleCount, setTip, setSelectedTip }) {

    const [isDisable, setIsDisable] = useState(true);
    useEffect(() => {
        if (amount && peopleCount && tip) {
            setIsDisable(false);
        } else {
            setIsDisable(true);
            setTipPerPerson(0);
            setTotalTip(0)
        }
    }, [amount, peopleCount, tip])
    return (
        <div className="final-bill-container">
            <div className="wrapper">
                <div className="final-amount-container">
                    <div className="final">
                        <div className="title">
                            <span className="text-preset-5 text-white">Tip Amount</span>
                            <span className="text-preset-6 text-grey-400">/ person</span>
                        </div>
                        <span className="text-preset-2 new-text-preset-1 text-green-400">${tipPerPerson === 0 ? '0.00' : tipPerPerson}</span>
                    </div>
                    <div className="final">
                        <div className="title">
                            <span className="text-preset-5 text-white">Total</span>
                            <span className="text-preset-6 text-grey-400">/ person</span>
                        </div>
                        <span className="text-preset-2  new-text-preset-1 text-green-400">${totalTip === 0 ? '0.00' : totalTip}</span>
                    </div>
                </div>
                <div className={`btn-reset text-preset-4 ${isDisable ? 'btn-reset-disable' : ''}`}
                    onClick={() => {
                        setAmount(0);
                        setPeopleCount(0);
                        setTip(0);
                        setTipPerPerson(0);
                        setTotalTip(0);
                    }}>
                    RESET
                </div>
            </div>
        </div>
    )
}

export default FinalBill