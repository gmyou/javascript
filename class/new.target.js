let sports = function() {
    console.log(new.target);
}
sports();
new sports();

class Sports {
    constructor() {
        console.log("Sports:", new.target.name);
    }
};
class Soccer extends Sports {
    constructor() {
        super();
        console.log("Soccer:", new.target.name);
    }
};
new Sports();
new Soccer();