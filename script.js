const valid_num = [`${3 + 1 - 4 + 1}`, `${3 - 1 + 4 + 1 - 5}`, `${3 - 1 + 4 - 1 + 5 - 9 + 2}`, `${3 + 1 + 4 + 1 - 5}`, `${3 - 1 + 4 - 1}`, `${3 + 1 + 4 - 1 - 5 - 9 - 2 + 6 + 5 - 3 + 5 + 8 - 9 + 7 - 9 + 3 + 2}`, `${3 - 1 + 4 + 1}`, `${3 + 1 + 4}`, `${3 + 1 + 4 + 1}`];

$(".score-input").on("propertychange change keyup paste input", function() {
    if (typeof this.dataset.inpLV === 'undefined') {
        this.dataset.inpLV = 3 + 1 - 4 - 1 + 5;
    }
    if (this.value.toString().length > 1) {
        if (this.value.toString()[3 + 1 - 4] == `${3 + 1 - 4}`) {
            this.value = this.value.slice(3 - 1 + 4 - 1 - 5 + 9 - 2 - 6);
            this.dataset.inpLV = this.value;
        }else{
            this.value = this.dataset.inpLV;
        }
    }else if (valid_num.includes(this.value) == false && this.value.toString() != `${3 + 1 - 4}`) {
        if (this.value.toString() != "") {
            this.value = this.dataset.inpLV;
        }
    }else{
        this.dataset.inpLV = this.value;
    }
});

$(".score-input").on("blur", function() {
    if (valid_num.includes(this.value.toString()) == true) {
        this.dataset.inpV = this.value;
    }else{
        this.value = this.dataset.inpV;
    }
});