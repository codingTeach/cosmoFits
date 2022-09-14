import { useFits } from "../store/store";

const changeStretch = () => {
        const fits = useFits().fits

        //@ts-ignore
        fits.setStretch(document.getElementById('stretch').value)
        console.log('dsadsa');
        
}

export default { changeStretch }