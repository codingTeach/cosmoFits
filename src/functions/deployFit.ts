import { useFits } from "../store/store";


//@ts-ignore
const deployFit = (e) => {
    let arrayBuffer;
    const reader = new FileReader();
    reader.onload = (event) => {
        const fileReader = event.target; // FileReader
        //@ts-ignore
        arrayBuffer = fileReader.result; // ArrayBuffer

        //@ts-ignore
        const fits = new FITS(document.getElementById("fits_div"), 2);
        //console.log(fits);

        fits.setNewImage(e.target.files[0].name, arrayBuffer);
        useFits().saveFits(fits)

        //   fits.showHeader(true)


        //   fits.addMouseHandler(onMouse);
    };

    reader.readAsArrayBuffer(e.target.files[0]);
};

export default { deployFit };


