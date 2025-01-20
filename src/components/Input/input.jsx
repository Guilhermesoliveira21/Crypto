import { ContainerCheckbox, ContainerInput, InputStyle } from "./styles"

export const InputCrypto = ({placeholder, value, onChange, name, type, id, description}) => {

    return (
        <>
            <ContainerInput>
                {type !== 'checkbox' ? 
                <InputStyle 
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    name={name}
                    id={id}
                 
                    />
                
                :
                <ContainerCheckbox>
                    <input 
                        type={type}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        name={name}
                        id={id}
                    />
                    <label for={id}>{description}</label>
                </ContainerCheckbox>
               
                }
            </ContainerInput>
        </>
    )

}