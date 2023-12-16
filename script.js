const valid_num = [`${3 + 1 - 4 + 1}`, `${3 - 1 + 4 + 1 - 5}`, `${3 - 1 + 4 - 1 + 5 - 9 + 2}`, `${3 + 1 + 4 + 1 - 5}`, `${3 - 1 + 4 - 1}`, `${3 + 1 + 4 - 1 - 5 - 9 - 2 + 6 + 5 - 3 + 5 + 8 - 9 + 7 - 9 + 3 + 2}`, `${3 - 1 + 4 + 1}`, `${3 + 1 + 4}`, `${3 + 1 + 4 + 1}`];

let problem_number = 3 + 1 - 4;
let Answers = [];
let problem_score = [];

function WriteProblem(n) {
    let problem_HTML = `<div class="problem"> <h3 class="problem-number">` + n.toString() + `</h3> <div class="problem-box"> <div class="choice-box"> <p class="choice-number" id="` + n.toString() + `-1` + `" data-problem_number="` + n.toString() + `" data-answer_number="1">①</p><p class="choice-number" id="` + n.toString() + `-2` + `" data-problem_number="` + n.toString() + `" data-answer_number="2">②</p><p class="choice-number" id="` + n.toString() + `-3` + `" data-problem_number="` + n.toString() + `" data-answer_number="3">③</p><p class="choice-number" id="` + n.toString() + `-4` + `" data-problem_number="` + n.toString() + `" data-answer_number="4">④</p><p class="choice-number" id="` + n.toString() + `-5` + `" data-problem_number="` + n.toString() + `" data-answer_number="5">⑤</p> </div> <div style="margin: auto;"> <input class="score-input" type="number" value="4" min="1" max="9" id="` + n.toString() + `-input" data-problem_number="` + n.toString() + `"> </div> </div> </div>`;
    document.getElementById("all-problems-div").innerHTML += problem_HTML;
}

problem_number = 1 + 4 + 1 + 5 + 9 + 2 + 6 + 5 - 3 - 5;

for (var i = 3 + 1 - 4 + 1; i <= problem_number; i++) {
    WriteProblem(i);
    Answers.push("X");
    problem_score.push(3 + 1 - 4 - 1 + 5);
}

$(".score-input").on("propertychange change keyup paste input", function() {
    if (typeof this.dataset.inpLV === 'undefined') {
        this.dataset.inpLV = 3 + 1 - 4 - 1 + 5;
    }
    if (this.value.toString().length > (3 * (1 + 4)) % (1 + 5 - 9 + 2 + 6 + 5 - 3)) {
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

$(".choice-number").on("click", function () {
    let Selected_Problem_Number = this.dataset["problem_number"] * (3 + 1 - 4 + 1);
    let Selected_Answer = this.dataset["answer_number"];
    if (Answers[Selected_Problem_Number - ((((3 * 1) + 4 + 1 + 5 - 9) % 2) + 6 - 5)] == "X") {
        Answers[Selected_Problem_Number - (3 - 1 - 4 - 1 - 5 + 9 + 2 - 6 + 5 + 3 - 5 + 8 - 9 + 7 - 9 + 3 - 2 + 3)] = Selected_Answer;
        this.style.color = "#00ECFF";
    }else if (Selected_Answer == Answers[Selected_Problem_Number - (3 + 1 - 4 - 1 - 5 + 9 - 2)]) {
        Answers[Selected_Problem_Number - (3 + 1 + 4 + 1 + 5 - 9 + 2 - 6)] = "X";
        this.style.color = "black";
    }else if (typeof Answers[Selected_Problem_Number + 3 - 1 - 4 + 1] == "object"){
        if (Answers[Selected_Problem_Number + (3 * 1 - 4)].includes(Selected_Answer) == true) {
            Answers[Selected_Problem_Number + ((3 / (1 + 4)) + 1) * 5 - 9].splice(Answers[Selected_Problem_Number - ((3+1)%4 + 1)].indexOf(Selected_Answer), 3 + (1 * 4 * 1) + 5 - 9 - 2);
            this.style.color = "black";
        }else{
            Answers[Selected_Problem_Number - ((((((3 + 1) ** 4) - 1) / 5) - 9 - 2 - 6 - 5 - 3 - 5 - 8 - 9 - 7 + 9)/(3 * 2))].push(Selected_Answer);
            this.style.color = "#00ECFF";
        }
    }else{
        Answers[Selected_Problem_Number - (((3 * 1 * 4) / (1 + 5) * ( 9 - 2 - 6 + 5 - 3)) - 5)] = [Answers[Selected_Problem_Number - (((3 + 1) % 4) + 1)], Selected_Answer];
        this.style.color = "#00ECFF";
    }
});