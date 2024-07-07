import OnboardingForm from "@/components/Authenication/Forms/RegistrationForm/OnboardingForm"
import ProfileForm from "@/components/Authenication/Forms/RegistrationForm/ProfileForm"
import { useState } from "react"

const CompleteRegistration = () => {
    const [activeForm, setActiveForm] = useState(0)
    const displayForm = () => {
        setActiveForm(1)
    }
    return (
        activeForm === 0 && <OnboardingForm nextForm={displayForm}/> ||
        activeForm === 1 && <ProfileForm />
    )
}
export default CompleteRegistration