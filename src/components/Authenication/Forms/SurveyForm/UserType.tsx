import Button from "@/components/shared/Button"
const UserType = () => {
    const userstype = [
        {
            label: 'Earn',
            description: 'Engage in tasks and events that can earn me money.',
            name: 'earner'
        },
        {
            label: 'Advertise',
            description: 'Create post and events to increase my reach on the internet.',
            name: 'advertiser'
        },
        {
            label: 'Both',
            name: 'both'
        }
    ]
    return (
        <div className="flex flex-col sm:items-center w-full justify-center pt-10 sm:pt-24 font-redHat gap-y-4">
                <div className="sm:w-4/12 sm:pl-2 sm:pl-0 pl-8">
                    2/2
                </div>
                <div className="flex flex-col gap-y-2 sm:pl-0 sm:w-4/12 pl-8">
                <h2 className="text-large font-bold">What best describes your primary use of Trendit?</h2>
                </div>
                <form className="flex flex-col items-start gap-y-6 sm:w-4/12 w-full">
                    <div className="flex flex-col gap-y-4 sm:w-full sm:pl-0 pl-8">
                       {
                        userstype.map((user, index) => (
                            <div key={index} className="flex items-start gap-x-2">
                                <input type="radio" className="mt-1"/>
                                <div className="flex flex-col">
                                    <label className="font-semibold text-medium text-[#344054]">{user.label}</label>
                                    <p className="text-medium text-[#475467] w-11/12">
                                        {user?.description}
                                    </p>
                                </div>
                            </div>
                        ))
                       }
                    </div>
                    <div className="w-full flex items-center justify-center">
                        <Button label="Continue" />
                    </div>
                </form>
        </div>
    )
}
export default UserType