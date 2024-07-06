const Button = ({
    label,
    className,
    onClick
}: {
    label: string,
    className?: string,
    onClick?: () => void
}) => {
    return (
        <button className={className ?  className : 'bg-btnPrimary text-white w-10/12 sm:w-[440px] py-2 text-redHat text-[16px] font-bold rounded-md'} onClick={onClick}>{label}</button>
    )
}
export default Button