import { ContainerInput, InputDashboardStyle } from "./styles"

export const InputDashboard = ({name, placeholder, value, onChange, type, icon, width}) => {
    return (
        <>
            <ContainerInput width={width}>
                <InputDashboardStyle 
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange} 
                    width={width}
                />
                <div>
                    {icon}
                </div>
            </ContainerInput>
        </>
    )
}