function update() {
    $.getJSON("https://api.awooing.moe/votes", function (data) {

        const total =
              parseInt(data.tokiVotes)
            + parseInt(data.rinVotes)
            + parseInt(data.vockVotes)
            + parseInt(data.spaghettVotes)
            + parseInt(data.muffinVotes)
            + parseInt(data.vottusVotes);

        // Tokichii
        const toki = parseInt(data.tokiVotes);
        setVote($("#tokiVotes"), $("#tokiVotesTotal"), ((toki / total) * 100), toki, "Tokichii");
        // Rin
        const rin = parseInt(data.rinVotes)
        setVote($("#rinVotes"), $("#rinVotesTotal"), ((rin / total) * 100), rin, "Rin");
        // Vocktile
        const vock = parseInt(data.vockVotes);
        setVote($("#vockVotes"), $("#vockVotesTotal"), ((vock / total) * 100), vock, "Vocktile");
        // SpaghettO
        const spaghettO = parseInt(data.spaghettVotes);
        setVote($("#spaghettVotes"), $("#spaghettVotesTotal"), ((spaghettO / total) * 100), spaghettO, "Spaghett");
        // Muffin
        const muffin = parseInt(data.muffinVotes);
        setVote($("#muffinVotes"), $("#muffinVotesTotal"), ((muffin / total) * 100), muffin, "Muffin");
        // Vottus
        const vottus = parseInt(data.vottusVotes);
        setVote($("#vottusVotes"), $("#vottusVotesTotal"), ((vottus / total) * 100), vottus, "Vottus");
        // Total
        $("#total").text(total);

        setTimeout(update, 40000);
    });
}

function correctS(count) {
    if (count === 1) {
        return " Vote";
    } else {
        return " Votes";
    }
}

function setVote(bar, total, percent, votes, name) {
    bar.attr("style", "width:" + percent + "%");
    bar.attr("aria-valuenow", percent);
    bar.text( votes + correctS(votes));
    total.attr("style", "width:" + percent + "%");
    total.attr("aria-valuenow", percent);
    total.text(name + " (" + votes + correctS(votes) + ")");
}

update();
