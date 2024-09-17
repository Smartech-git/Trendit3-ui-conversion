import InputField from "@/components/shared/InputField"

const OtpForm = () => {
    return (
        <form className="flex flex-col items-center w-full justify-center pt-10 sm:pt-24 font-redHat gap-y-6">
             <h2 className="text-large font-bold">Confirm it’s you.</h2>
             <p className="text-[#475467] text-medium w-10/12 sm:w-4/12 text-center">
                We have sent an email with a code to adedamolamoses@gmail.com, please enter it below to login your Trendit account.
            </p>
            <div className="w-full flex justify-center">
                    <InputField type="number" placeholder="Paste OTP" className="w-10/12 sm:w-[440px] border-[1px] border-solid border-inputBorder py-2 rounded-md pl-4 text-medium"/>
            </div>
            <div>
                    Didn’t receive it? <span className="text-btnPrimary font-bold">Resend</span>
            </div>
        </form>
    )
}
export default OtpForm