class Singleton {
    constructor(){
        if (Singleton.instance) {
            return Singleton.instance;
        }
        this.instance = this;
    }

    setName(name) {
        this.name = name
    }
}

const singleton1 = new Singleton()
const singleton2 = new Singleton()

console.log(singleton1 === singleton2)