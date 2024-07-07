import Button from "@/components/shared/Button"
import InputField from "@/components/shared/InputField"
import Icons from "@/components/shared/icons"
import { Gender, Country, State } from "@/utils/selectInput"
import { Select, SelectItem } from "@nextui-org/react"

const ProfileForm = () => {
    
    return (
        <div className="flex flex-col items-center w-full justify-center pt-10 sm:pt-24 font-redHat gap-y-6">
              <div className="flex flex-col gap-y-2 items-center w-full sm:w-6/12 ">
                <h2 className="text-large font-bold">Welcome onboard!</h2>
                <p className="text-[#475467] text-medium w-10/12 sm:w-7/12 text-center">
                    Hi Damola, we are excited to have you onboard! Finish up your profile set up.
                </p>
            </div>
            <form className="flex flex-col items-center gap-y-6 w-full">
                <div className="flex items-center gap-x-4">
                    <div className="w-[48px] h-[48px] bg-[#F2F4F7] flex items-center justify-center rounded-full">
                        <Icons type="image-holder" />
                    </div>
                    <div className="text-btnPrimary text-medium font-semibold">
                        Upload photo
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <Select 
                    placeholder="Select Gender"
                    size='sm'
                    aria-labelledby='gender'
                    classNames={{
                        trigger:[
                            'bg-transparent py-6'
                        ]
                    }}
                    className="w-11/12 sm:w-[440px] border-[1px] bg-transparent border-solid border-inputBorder rounded-md text-medium flex items-center">
                        {Gender.map((gender, index) => (
                            <SelectItem key={index}>{gender}</SelectItem>
                        ))}
                    </Select>                   
                </div>
                <div className="w-11/12 sm:w-[440px] border-[1px] border-solid border-inputBorder py-2 rounded-md pl-4 text-medium flex items-center justify-between">
                    <span className="border-solid border-r-[1px] pr-4 border-inputBorder">Date of Birth</span>
                    <InputField type="date" />
                </div>
                <div className="w-full flex justify-center">
                    <Select 
                        placeholder="Select Country"
                        size='sm'
                        aria-labelledby='country'
                        classNames={{
                            trigger:[
                                'bg-transparent py-6'
                            ]
                        }}
                        className="w-11/12 sm:w-[440px] border-[1px] bg-transparent border-solid border-inputBorder rounded-md text-medium flex items-center">
                            {Country.map((country, index) => (
                                <SelectItem key={index}>{country}</SelectItem>
                            ))}
                        </Select>                        
                </div>
                <div className="flex items-center gap-x-4 w-full px-4 sm:px-0 justify-center">
                        <Select 
                            placeholder="State"
                            size='sm'
                            aria-labelledby='state'
                            classNames={{
                                trigger:[
                                    'bg-transparent py-6'
                                ]
                            }}
                            className="w-11/12 sm:w-[212px] border-[1px] bg-transparent border-solid border-inputBorder rounded-md text-medium flex items-center">
                                {State.map((state, index) => (
                                    <SelectItem key={index}>{state}</SelectItem>
                                ))}
                            </Select>                      
                        <Select 
                            placeholder="State"
                            size='sm'
                            aria-labelledby='state'
                            classNames={{
                                trigger:[
                                    'bg-transparent py-6'
                                ]
                            }}
                            className="w-11/12 sm:w-[212px] border-[1px] bg-transparent border-solid border-inputBorder rounded-md text-medium flex items-center">
                                {State.map((state, index) => (
                                    <SelectItem key={index}>{state}</SelectItem>
                                ))}
                            </Select>                        
                </div>
                <div className="w-full flex items-center justify-center">
                    <Button label="Continue"/>
                </div>
            </form>
            <div>
                I will do this later <span className="text-btnPrimary font-bold">Skip</span>
            </div>
        </div>
    )
}
export default ProfileForm