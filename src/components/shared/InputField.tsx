import Icons from "./icons"
const InputField = (
    {
        rightIcon,
        leftIcon,
        type,
        placeholder,
        onChange,
        className,
    }: {
        rightIcon?: string,
        leftIcon?: string,
        type: string,
        placeholder?: string,
        onChange?: () => void,
        className?: string,   
    }
) => {
    return (
        <div className={className? className : ''}>
            <Icons type={rightIcon} />
            <input type={type} placeholder={placeholder} onChange={onChange} className="border-none focus:outline-none w-11/12"/>
            <Icons type={leftIcon} />            
        </div>
    )
}
export default InputField