function UI() {
    this.btn_start = document.querySelector(".btn-start"),
    this.btn_next = document.querySelector(".next_btn"),
    this.btn_replay = document.querySelector(".btn_replay"),
    this.btn_quit = document.querySelector(".btn_quit"),
    this.quiz_box = document.querySelector('.quiz_box'),
    this.option_list = document.querySelector(".option-list"),
    this.score_box = document.querySelector(".score_box"),
    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>',
    this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>',
    this.time_text = document.querySelector(".time_text"),
    this.time_second = document.querySelector(".time_second")
}

UI.prototype.soruGoster = function(soru){
    let question = `<span>${soru.soruMetni}</span>`;
    let options = '';

    for (let cevap in soru.cevapSecenekleri){
        options += 
            `
                <div class="option">
                    <span><b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]}</span>
                </div>

            `;
    }

    document.querySelector(".question-text").innerHTML = question;
    this.option_list.innerHTML = options; //option_list, UI içerisinde olduğu için "this" kullandık. 

    const option = this.option_list.querySelectorAll(".option");

    option.forEach(opt => {
        opt.setAttribute("onclick", "optionSelected(this)");
    })

}

UI.prototype.soruNumarasiGoster = function (soruSirasi, toplamSoru){
    let tag =  `<span class="badge bg-warning">${soruSirasi} / ${toplamSoru}</span>`
    document.querySelector(".quiz_box .question_index").innerHTML = tag;
}

UI.prototype.showScore = function(toplamSoru, dogruCevap){
    let tag = `Toplam ${toplamSoru} sorudan ${dogruCevap} doğru cevap verdiniz.`;
    document.querySelector(".score_box .score_text").innerHTML = tag;
}