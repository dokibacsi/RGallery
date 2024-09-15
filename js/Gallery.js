import { Datas } from "./Datas.js"
import KisKepek from "./KisKepek.js";
import NagyKep from "./Nagykep.js";

class Gallery{

    constructor(){
        this.miniPhotoParentE = $(".kiskepek")
        this.nagyPhotoParenE = $(".nagykep")
        const RallyDatas = Datas;
        new KisKepek(this.miniPhotoParentE, RallyDatas);
        this.kisKepElem = $(".kiskepek:last")
        new NagyKep(this.nagyPhotoParenE, Datas[0]) 
        this.kattEsemeny(this.kisKepElem)
    }

    kattEsemeny(kisKep){
        kisKep.on("click", (event)=>{
            const index = $(event.target).index()
            const kivalasztottKep = Datas[index]
            new NagyKep(this.nagyPhotoParenE, kivalasztottKep)
            console.log()
        })
    }
}

export default Gallery