function Tip({ value, setTip, selected }) {
    return (
        <div onClick={() =>
            setTip(value)
        } className={`tip text-preset-3 ${selected ? 'tip-selected' : ''}`}>
            <span  >{value}%</span>
        </div>
    )
}
export default Tip;