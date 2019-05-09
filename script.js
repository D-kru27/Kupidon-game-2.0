var heart = Math.floor((Math.random() * 7) + 1);
var guess;
var numberOfGuesses = 0;
var victory = false;


function test() {
while (true) {
    var name = document.getElementById("name");
    if (name === "Никита" || name === "никита" || name === "Nikita" || name === "nikita") {
        alert("Купидон: Приветствую, Никита. " +
            "Я украл Ленино сердце, и тебе придётся постараться, чтобы его вернуть. " +
            "Где-то среди этих сердец есть то, которое тебе нужно, и только по-настоящему любящий может пронзить его стрелой купидона." +
            "Тогда Лена будет любить тебя ещё сильнее. " +
            "Но за каждую мою стрелу, не достигшую цели, тебе придётся подарить ей жвачку Love Is.");
        break;
    } else if (name === "Лена" || name === "лена" || name === "Елена" || name === "елена" || name === "Lena" || name === "Elena") {
        alert("Купидон: Приветствую, Лена. Сегодня я украл Никитино сердце, но я готов отдать его тебе, если пронзишь его моей стрелой." +
            "Среди этих сердец спрятано Никитино. Можешь стрелять столько, сколько нужно, но за каждую стрелу, не достигшую цели, нужно будет подарить ему жвачку Love Is. ");
        break;
    } else {
        alert("Ты не тот, кто мне нужен.");
        break; // нужно полностью выйти или перезагрузить страницу. всю программу в большой цикл?
        // window.stop();
    }
}
while (victory === false) {
    guess = prompt("Сделай выстрел (введи цифру 1-7):", " ");
    guess = parseInt(guess);
    if (guess < 1 || guess > 7 || guess === "") {
        alert("От одного до семи!");
    }
    else if (isNaN(guess)) {
        break;
    } else {
        numberOfGuesses++;
        if (guess === heart) {
            victory = true;
            alert("Вот оно!");
        } else {
            alert("Не оно. Держи ещё стрелу");
        }
    }
}
var status = "Стрел " + numberOfGuesses +
    " значит жвачек тебе нужно подарить " + (numberOfGuesses - 1) + ". С Днём Влюблённых!";
alert(status);
}