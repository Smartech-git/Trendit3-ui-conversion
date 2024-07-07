import DiscoveryChannelOption from "@/components/Authenication/Forms/SurveyForm/DicoveryChannel"
import UserType from "@/components/Authenication/Forms/SurveyForm/UserType"
import { useState } from "react"

const Survey = () => {
    const [activeForm, setActiveForm] = useState(0)
    const displayForm = () => {
        setActiveForm(1)
    }
    return (
        activeForm === 0 && <DiscoveryChannelOption nextForm={displayForm}/> ||
        activeForm === 1 && <UserType />
    )
}
export default Survey