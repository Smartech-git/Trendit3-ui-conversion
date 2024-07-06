import Button from "@/components/shared/Button"
import InputField from "@/components/shared/InputField"
import Icons from "@/components/shared/icons"
import Image from "next/image"
const LoginForm = () => {
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
                <h2 className="text-large font-bold">Login to account</h2>
                <p className="text-[#475467] text-medium w-10/12 sm:w-7/12 text-center">
                    Turn Daily Social Tasks into Paychecks! Get Paid for your Engagements.
                </p>
            </div>
            <div className="flex flex-col items-center gap-y-4 w-full">
                <div className="w-10/12 sm:w-[440px] border-[1px] border-solid border-inputBorder py-2 rounded-md pl-4 text-medium">
                    <InputField type="email" placeholder="Enter your email"/>
                </div>
                <div className="w-10/12 sm:w-[440px] border-[1px] border-solid border-inputBorder py-2 rounded-md pl-4 text-medium">
                    <InputField type="password" placeholder="Create password" leftIcon="invisible"/>
                </div>
            </div>
            <div className="text-[#475467] text-[14px]">
                Forgot password? <span className="text-btnPrimary font-bold">Resend</span>
            </div>
            <div className="w-full flex items-center justify-center">
                <Button label="Continue" />
            </div>
            <div className="flex items-center gap-x-2 w-10/12 sm:w-full justify-center sm:gap-x-4">
                <Icons type="content-divider" />
                OR
                <Icons type="content-divider" />
            </div>
            <div className="flex flex-col items-center gap-y-2 w-full">
                {signinOptions.map((options, index) =>(
                    <div key={index} className="w-11/12 sm:w-[440px] text-[#344054] font-bold text-medium py-2 border-[1px] border-solid border-inputBorder rounded flex items-center justify-center gap-x-2">
                        <Icons type={options.icon} />
                        Sign in with {options.label}
                    </div>
                ))}
            </div>
            <div>
                You don't have an account? <span className="text-btnPrimary font-bold">Sign up</span>
            </div>
        </div>
    )
}
export default LoginForm