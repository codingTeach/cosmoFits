import { useFits } from "../store/store";
import {getId} from "./getId";


//@ts-ignore
const deployFit = (e) => {
    let arrayBuffer;
    //    const file = e.files[0]
    const reader = new FileReader();

    // useFits().getBase64("https://images.unsplash.com/photo-1657004426824-be76151b7b1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60")
    const secondReader = new FileReader()
    secondReader.onload = (e) => {
        //console.log(secondReader.result);
    }

    //reader.result.replace(/^data:image.+;base64,/, '')


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
        const canvas = document.querySelector('#roi_canvas0')

        // @ts-ignore
        useFits().imageBase64 = canvas.toDataURL('image/png').replace(/^data:image.+;base64,/, '')
        //console.log(canvas.toDataURL('image/png').replace(/^data:image.+;base64,/, ''));

        let last_mouse_loc: String;
        const pad = (s: any, n: any) => {
            s = s.toString();
            let nadd = n - s.length;
            for (let i = 0; i < nadd; i++)
                s = "&nbsp;" + s;
            return (s);
        }

        const showMouseLoc = () => {
            let lid = getId('cursor_loc');
           
            if (lid && last_mouse_loc) {
                
                let pixel = fits.getPixelAtFITS(last_mouse_loc);
                lid.innerHTML = "[" + pad(last_mouse_loc.x, 5) + ","
                    + pad(last_mouse_loc.y, 5) + "] = "
                    + pad(pixel.toFixed(1), 9);
            }
        }

        const  onMouse = (mouseloc: String) => {
            last_mouse_loc = fits.image2FITS(mouseloc);
            showMouseLoc();
        }

        fits.addMouseHandler(onMouse);
    };

    reader.readAsArrayBuffer(e.target.files[0]);
    secondReader.readAsDataURL(e.target.files[0])


};

export default { deployFit };


