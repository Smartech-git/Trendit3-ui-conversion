import Image from "next/image"
import InputField from "@/components/shared/InputField"
import Button from "@/components/shared/Button"
import Icons from "@/components/shared/icons"
const VerifyEmail = () => {
    const signinOptions = [
        {
            icon: 'google',
            label: 'Google',
        },
        {
            icon: 'facebook',
            label: 'Facebook',
        },
        {
            icon: 'tiktok',
            label: 'Tiktok',
        },
    ]
    return (
        <div className="flex flex-col items-center w-full justify-center pt-10 sm:pt-24 font-redHat gap-y-6">
            <Image src='/images/LogoDefault.png' alt="Trendit logo" width={132} height={51} className=""/>
            <div className="flex flex-col gap-y-2 items-center w-full sm:w-6/12 ">
                <h2 className="text-large font-bold">Create an account</h2>
                <p className="text-[#475467] text-medium w-10/12 sm:w-7/12 text-center">
                    Turn Daily Social Tasks into Paychecks! Get Paid for your Engagements.
                </p>
            </div>
            <form className="flex flex-col items-center gap-y-4 w-full">
                <div className="w-full flex justify-center">
                    <InputField type="email" placeholder="Enter your email" className="w-10/12 sm:w-[440px] border-[1px] border-solid border-inputBorder py-2 rounded-md pl-4 text-medium"/>
                </div>
                <div className="w-full flex justify-center">
                    <InputField type="text" placeholder="Referral Code (optional)" className="w-10/12 sm:w-[440px] border-[1px] border-solid border-inputBorder py-2 rounded-md pl-4 text-medium flex items-center"/>
                </div>
                <div className="w-full flex items-center justify-center">
                    <Button label="Get started" />
                </div>
            </form>
            <div className="flex flex-col items-center gap-y-2 w-full">
                {signinOptions.map((options, index) =>(
                    <div key={index} className="w-11/12 sm:w-[440px] text-[#344054] font-bold text-medium py-2 border-[1px] border-solid border-inputBorder rounded flex items-center justify-center gap-x-2">
                        <Icons type={options.icon} />
                        Sign up with {options.label}
                    </div>
                ))}
            </div>
            <div>
                Already have an account? <span className="text-btnPrimary font-bold">Log in</span>
            </div>
        </div>
    )
}
export default VerifyEmail