class Sports {
    static setGround(ground) {
        this.ground = ground;
    }
    static getGround() {
        return this.ground;
    }
};
Sports.setGround('상암구장');
console.log(Sports.getGround());

class Sports2 {
    constructor() {
        console.log(Sports2.getGround());
        console.log(this.constructor.getGround());
    }
    static getGround() {
        return '고양구장';
    }
};
let obj = new Sports2();