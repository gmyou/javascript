var obj = {
    value : '',
    set setValue(param) {
        this.value = param;
    },
    get getValue() {
        return this.value;
    }
};

obj.setValue = 'Hello JavaScript';
console.log(obj.getValue);
