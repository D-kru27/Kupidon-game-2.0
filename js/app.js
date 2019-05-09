var game = {
    randomHeart: Math.floor((Math.random() * 7) + 1),
    tries: 0,
    section1: document.getElementById('section1'),
    section2: document.getElementById('section2'),
    section3nik: document.getElementById('section3-nik'),
    section3lena: document.getElementById('section3-lena'),
    section4: document.getElementById('section4'),
    section5: document.getElementById('section5'),
    section6: document.getElementById('section6'),
    btn1: document.getElementById('btn1'),
    btn2: document.getElementById('btn2'),
    btn3Lena: document.getElementById('btn3-lena'),
    btn3Nik: document.getElementById('btn3-nik'),
    btn4: document.getElementById('btn4'),
    btn5: document.getElementById('btn5'),
    input: document.getElementById('name'),
    inputShot: document.getElementById('shot-field'),
    error1: document.getElementById('error1'),
    error2: document.getElementById('error2'),
    result: document.getElementById('result'),

    switchSections(elem1, elem2, input = false) {       // input = false и не передаем дальше
        elem1.style.display = "none";
        elem2.style.display = "flex";
        if (input!=false) {
            input.focus();
        }
    },

    triggerError(errorSpan, text, input) {
            errorSpan.innerHTML = text;
            setTimeout(function () {
                errorSpan.innerHTML = "";
            }, 1000)
            input.focus();
            input.value='';
    },

    nameYourSelf(e) {
        e.preventDefault(); //предотвращает отправку формы
        if (this.input.value === '') {
            this.triggerError(this.error1, 'Ты должен представиться!', this.input);
        } else if (this.input.value.toLowerCase().includes('ник') || this.input.value.toLowerCase().includes('nik')) {
            this.switchSections(this.section2, this.section3nik);
        } else if (this.input.value.toLowerCase().includes('лен') || this.input.value.toLowerCase().includes('len')) {
            this.switchSections(this.section2, this.section3lena);
        } else {
            this.triggerError(this.error1, 'Ты не тот, кто мне нужен.', this.input);
        }
    },

    shoot() {
        let inputValue = parseInt(this.inputShot.value);
        if (inputValue < 1 || inputValue > 7 || this.input.value === '') {
            this.triggerError(this.error2, 'От одного до семи!', this.inputShot);
        } else if (inputValue != this.randomHeart) {
            this.triggerError(this.error2, 'Не оно, возьми ещё стрелу.', this.inputShot);
            ++this.tries;
        } else {
            ++this.tries;
            this.switchSections(this.section4, this.section5);
            setTimeout(function () {
                game.switchSections(this.section5, this.section6);
            }, 2000);
            this.result.innerHTML = "Стрел " + this.tries +
                " значит жвачек тебе нужно подарить " + (this.tries - 1) + ". С Днём Влюблённых!";
        }
    }
};
