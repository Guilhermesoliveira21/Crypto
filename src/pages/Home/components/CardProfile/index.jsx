import { ConatainerCardProfile } from "./styles"

export const CardProfile = ({ icon, title, description, bg, mt, height }) => {

    return (

        <ConatainerCardProfile bg={bg} mt={mt} height={height}>
            <div>
                {icon}
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </ConatainerCardProfile>

    )

}