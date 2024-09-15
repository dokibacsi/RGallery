class KisKep{
    #list
    #parentE
    #id
    constructor(list, parentE, id){
        this.#list = list
        this.#parentE = parentE
        this.#id = id
        this.kiskepMegjelenit(this.#list, this.#parentE, this.#id)
    }

    kiskepMegjelenit(dataList, parentE, id){
        let text = `<img id="photo${id} "src="${dataList.photo}" alt="photo${id}"></img>`
        parentE.append(text);
    }

    
}

export default KisKep