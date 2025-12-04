import { useState } from "react"
import AllTips from "../AllTips/AllTips"
import iconDollar from '../../assets/icon-dollar.svg';
import iconPerson from '../../assets/icon-person.svg'

function Bill({ amount, peopleCount, tip, setAmount, setPeopleCount, setTip }) {
    const [err, setErr] = useState(false);
    const [selected, setSelected] = useState(false)
    const [active, setActive] = useState(false);
    return (
        <div className="bill-container">
            <div className="bill-header">
                <span className="text-preset-5"> Bill</span>
                <div className={`amount-container ${selected ? 'people-input-selected' : ' '} `}>
                    <img src={iconDollar} alt="" />
                    <input placeholder="0" type="number" className='people-input text-preset-3 text-green-900 ' value={amount === 0 ? '' : amount}
                        onChange={(e) => {
                            setAmount(Number(e.target.value))
                        }}
                        onClick={() => { setSelected(true) }}
                        onBlur={() => { setSelected(false) }} />
                </div>
            </div>
            <AllTips setTip={setTip} tip={tip} />
            <div className="people-container">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span className="text-preset-5 text-grey-500">Number of People</span>
                    <span className={`text-preset-5 text-orange-400 ${err ? '' : 'hide'}`}>Can’t be zero</span>
                </div>
                <div className={`people ${active ? 'people-input-selected' : '  '} ${err ? 'people-input-error' : ''}`}>
                    <img src={iconPerson} alt="" />
                    <input min='1' placeholder="0" type="number" className="people-input text-preset-3 text-green-900" value={peopleCount === 0 ? '' : peopleCount

                    }
                        onChange={(e) => {
                            if (Number(e.target.value) === 0) {
                                setErr(true)
                                setPeopleCount('')
                            } else {
                                setErr(false)
                                setPeopleCount(Number(e.target.value))
                            }
                        }
                        }
                        onClick={() => { setActive(true) }}
                        onBlur={() => {
                            setActive(false);
                            setErr(false);
                        }} />
                </div>
            </div>
        </div>
    )
}

export default Bill