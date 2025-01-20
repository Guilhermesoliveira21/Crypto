import { ContainerSectionCard } from "./styles"

export const SectionCard = ({children, width}) => {
    return (
        <>
        
            <ContainerSectionCard width={width}>
                {children}
            </ContainerSectionCard>

        </>
    )
}