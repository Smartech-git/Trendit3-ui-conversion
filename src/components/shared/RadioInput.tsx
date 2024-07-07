const RadioInput = ({
    labels,
    className
}: {
    labels?: string,
    className?: string
}) => {
    return (
        <div className={className ? className : ''}>
            <input type="radio" />
            <label>{labels}</label>          
        </div>
    )
}
export default RadioInput