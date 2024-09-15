class NagyKep{
    #nagykepHelye
    #nagyKep
    constructor(nagykepHelye, nagyKep){
        this.#nagykepHelye = nagykepHelye
        this.#nagyKep = nagyKep
        this.nagyKep(this.#nagykepHelye, this.#nagyKep)
    }

    nagyKep(nagykepHelye, nagyKep){
        let text = `<img id="photo" src="${nagyKep.photo}" alt="photo"></img>`
        nagykepHelye.html(text)
    }
}

export default NagyKep