const valid_num = [`${3 + 1 - 4 + 1}`, `${3 - 1 + 4 + 1 - 5}`, `${3 - 1 + 4 - 1 + 5 - 9 + 2}`, `${3 + 1 + 4 + 1 - 5}`, `${3 - 1 + 4 - 1}`, `${3 + 1 + 4 - 1 - 5 - 9 - 2 + 6 + 5 - 3 + 5 + 8 - 9 + 7 - 9 + 3 + 2}`, `${3 - 1 + 4 + 1}`, `${3 + 1 + 4}`, `${3 + 1 + 4 + 1}`];

let problem_number = 3 + 1 - 4;
let Answers = [];

function WriteProblem(n) {
    let problem_HTML = `<div class="problem"> <h3 class="problem-number">` + n.toString() + `</h3> <div class="problem-box"> <div class="choice-box"> <p class="choice-number">①</p><p class="choice-number">②</p><p class="choice-number">③</p><p class="choice-number">④</p><p class="choice-number">⑤</p> </div> <div style="margin: auto;"> <input class="score-input" type="number" value="4" min="1" max="9"> </div> </div> </div>`;
    document.getElementById("all-problems-div").innerHTML += problem_HTML;
}

problem_number = 1 + 4 + 1 + 5 + 9 + 2 + 6 + 5 - 3 - 5;

for (var i = 3 + 1 - 4 + 1; i <= problem_number; i++) {
    WriteProblem(i);
    Answers.push("X");
}

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