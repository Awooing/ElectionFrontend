function update() {
    $.getJSON("http://localhost:8001/api/votes", function (data) {
        const toki = parseInt(data.tokiVotes);
        const rin = parseInt(data.rinVotes);
        const vock = parseInt(data.vockVotes);
        const spaghett = parseInt(data.spaghettVotes);
        const muffin = parseInt(data.muffinVotes);
        const vottus = parseInt(data.vottusVotes);
        const total = toki+rin+vock+spaghett+muffin+vottus;

        const tokiPercent = ((toki / total) * 100);
        const rinPercent = ((toki / total) * 100);
        const vockPercent = ((toki / total) * 100);
        const spaghettPercent = ((toki / total) * 100);
        const muffinPercent = ((toki / total) * 100);
        const vottusPercent = ((toki / total) * 100);
        const totalPercent = tokiPercent+rinPercent+vockPercent+spaghettPercent+muffinPercent+vottusPercent;

        const tokii = $("#tokiVotes");
        tokii.text(toki + correctS(toki));
        tokii.attr("style", "width:" + tokiPercent + "%");
        tokii.attr("aria-valuenow", tokiPercent);

        const rinn = $("#rinVotes");
        rinn.text(rin + correctS(rin));
        rinn.attr("style", "width:" + rinPercent + "%");
        rinn.attr("aria-valuenow", rinPercent);

        const vockk = $("#vockVotes");
        vockk.text(vock + correctS(vock));
        vockk.attr("style", "width:" + vockPercent + "%");
        vockk.attr("aria-valuenow", vockPercent);

        const spaghetto = $("#spaghettVotes");
        spaghetto.text(spaghett + correctS(spaghett));
        spaghetto.attr("style", "width:" + spaghettPercent + "%");
        spaghetto.attr("aria-valuenow", spaghettPercent);

        const muffinn = $("#muffinVotes");
        muffinn.text(muffin + correctS(muffin));
        muffinn.attr("style", "width:" + muffinPercent + "%");
        muffinn.attr("aria-valuenow",  muffinPercent);

        const vottusz = $("#vottusVotes");
        vottusz.text(vottus + correctS(vottus));
        vottusz.attr("style", "width:" + vottusPercent + "%");
        vottusz.attr("aria-valuenow", vottusPercent);

        $("#total").text(total);
        setTimeout(update, 10000);
    });
}

function correctS(count) {
    if (count === 1) {
        return " Vote";
    } else {
        return " Votes";
    }
}

update();