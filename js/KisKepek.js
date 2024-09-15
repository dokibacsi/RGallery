import KisKep from "./KisKep.js";

class KisKepek{
    #miniPhotoParentE
    #list
    constructor(miniPhotoParentE, list){
        this.#miniPhotoParentE = miniPhotoParentE
        this.#list = list;
        this.kisKepek(this.#miniPhotoParentE, this.#list)
    }

    kisKepek(parentE, dataList){
        dataList.forEach((element, id) => {
            new KisKep(element, parentE, id)
            id++
        });

    }
}

export default KisKepek