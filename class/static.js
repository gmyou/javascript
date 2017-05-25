class Sports {
    static getGround() {
        return '상암구장';
    }
};
console.log( Sports.getGround() );

class Sports2 {
    static getGround(name) {
        return name;
    }
};
console.log( Sports2.getGround('고양구장') );