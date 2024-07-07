import InputField from "@/components/shared/InputField"
import Button from "@/components/shared/Button"

const OnboardingForm = ({
    nextForm
}: {
    nextForm: () => void
}) => {
    return (
        <div className="flex flex-col items-center w-full justify-center pt-10 sm:pt-24 font-redHat gap-y-6">
             <div className="flex flex-col gap-y-2 items-center w-full sm:w-6/12 ">
                <h2 className="text-large font-bold">Tell us about you</h2>
                <p className="text-[#475467] text-medium w-10/12 sm:w-7/12 text-center">
                    We need to know a few things to set up your account.
                </p>
            </div>
            <form className="flex flex-col items-center gap-y-6 w-full" onSubmit={nextForm}>
                <div className="flex px-4 sm:px-0 items-center gap-x-4">
                    <InputField type="text" placeholder="First Name"  className="w-10/12 sm:w-[212px] border-[1px] border-solid border-inputBorder py-2 rounded-md pl-4 text-medium flex items-center"/>
                    <InputField type="text" placeholder="Last Name"  className="w-10/12 sm:w-[212px] border-[1px] border-solid border-inputBorder py-2 rounded-md pl-4 text-medium flex items-center"/>
                </div>
                <div className="w-full flex justify-center">
                    <InputField type="text" placeholder="Username"  className="w-11/12 sm:w-[440px] border-[1px] border-solid border-inputBorder py-2 rounded-md pl-4 text-medium flex items-center"/>
                </div>
                <div className="flex flex-col w-full items-center">
                    <InputField type="password" placeholder="Create password" leftIcon="invisible" className="w-11/12 sm:w-[440px] border-[1px] border-solid border-inputBorder py-2 rounded-md pl-4 text-medium flex items-center"/>
                    <div className="w-11/12 sm:w-[440px]">
                    <span className="text-[10px] text-[#475467] self-start">(Min. 8 characters with a letter and a number)</span>
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <InputField type="password" placeholder="Confirm password" leftIcon="invisible" className="w-11/12 sm:w-[440px] border-[1px] border-solid border-inputBorder py-2 rounded-md pl-4 text-medium flex items-center"/>
                </div>
                <div className="w-full flex items-center justify-center">
                    <Button label="Continue" />
                </div>
            </form>
        </div>
    )
}
export default OnboardingForm