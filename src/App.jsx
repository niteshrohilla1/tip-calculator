
import { useEffect, useState } from 'react'
import './App.css'
import Bill from './components/Bill/Bill'
import FinalBill from './components/FinalBill/FinalBill'
import logo from './assets/logo.svg'
function App() {
  const [amount, setAmount] = useState(0);
  const [peopleCount, setPeopleCount] = useState(0);
  const [tip, setTip] = useState(0);
  const [tipPerPerson, setTipPerPerson] = useState(0.00);
  const [totalTip, setTotalTip] = useState(0.00);
  const calculate = () => {
    if (tip && peopleCount && amount) {
      setTotalTip((amount * tip / 100).toFixed(2))
      setTipPerPerson((amount * (tip / 100) / peopleCount).toFixed(2))
    }
  }
  useEffect(() => {
    calculate()
  }, [tip, peopleCount, amount])
  return (
    <div className="container">
      <div className="split-container">
        <img src={logo} alt="" />
      </div>
      <div className="main-container">
        <div className="content-container">
          <Bill amount={amount} peopleCount={peopleCount} tip={tip} setAmount={setAmount} setPeopleCount={setPeopleCount} setTip={setTip} />
          <FinalBill amount={amount} peopleCount={peopleCount} tip={tip} tipPerPerson={tipPerPerson} totalTip={totalTip} setTipPerPerson={setTipPerPerson} setTotalTip={setTotalTip} setAmount={setAmount} setPeopleCount={setPeopleCount} setTip={setTip} />
        </div>
      </div>
    </div>
  )
}

export default App
