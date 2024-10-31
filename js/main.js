$("#hi-lo").click(function () {
    if (confirm('Hi and Low をPLAYしますか？')) {
        window.location.href = "../hi-low.html";
    }
});

$("#flash-w").click(function () {
    if (confirm('FLASH WORD をPLAYしますか？')) {
        window.location.href = "../flash-w.html";
    }
});

$("#janken").click(function () {
    if (confirm('じゃんけんゲームをPLAYしますか？')) {
        window.location.href = "../janken.html";
    }
});