var obj = {};
Object.defineProperty(obj, "item", {
    set: function(param) {
        this.sport = param;
    }
});
obj.item = "야구";
console.log(obj.sport);