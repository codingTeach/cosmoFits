import { useFits } from "../store/store";

const deployHeader = () => {
    try {
        const fits = useFits().fits

        //@ts-ignore
        fits.showHeader(true) 
    } catch (error) {

    }        
}

export default { deployHeader }