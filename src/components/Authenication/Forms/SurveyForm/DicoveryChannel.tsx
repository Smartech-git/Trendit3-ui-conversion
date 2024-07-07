import RadioInput from "@/components/shared/RadioInput"
import Button from "@/components/shared/Button"

const DiscoveryChannelOption = ({
    nextForm
}: {
    nextForm: () => void
}) => {
    return (
        <div className="flex flex-col sm:items-center w-full justify-center pt-10 sm:pt-24 font-redHat gap-y-4">
                <div className="sm:w-4/12 sm:pl-2 sm:pl-0 pl-8">
                    1/2
                </div>
                <div className="flex flex-col gap-y-2 sm:pl-0 pl-8">
                <h2 className="text-large font-bold">How did you find out about Trendit?</h2>
                </div>
                <form className="flex flex-col items-start gap-y-6 sm:w-3/12" onSubmit={nextForm}>
                    <RadioInput labels="Facebook" className="flex items-center gap-x-2 text-medium text-[#344054] sm:pl-0 pl-8"/>
                    <RadioInput labels="X (Twitter)" className="flex items-center gap-x-2 text-medium text-[#344054] sm:pl-0 pl-8"/>
                    <RadioInput labels="Youtube" className="flex items-center gap-x-2 text-medium text-[#344054] sm:pl-0 pl-8"/>
                    <RadioInput labels="Instagram" className="flex items-center gap-x-2 text-medium text-[#344054] sm:pl-0 pl-8"/>
                    <RadioInput labels="Whatsapp" className="flex items-center gap-x-2 text-medium text-[#344054] sm:pl-0 pl-8"/>
                    <RadioInput labels="Telegram" className="flex items-center gap-x-2 text-medium text-[#344054] sm:pl-0 pl-8"/>
                    <RadioInput labels="A Friend" className="flex items-center gap-x-2 text-medium text-[#344054] sm:pl-0 pl-8"/>
                    <div className="w-full flex items-center justify-center">
                        <Button label="Continue" />
                    </div>
                </form>
        </div>
    )
}
export default DiscoveryChannelOption