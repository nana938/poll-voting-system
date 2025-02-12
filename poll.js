document.addEventListener("DOMContentLoaded", () => {
    let votes = {
        maradona: 1700,
        messi: 10800,
        ronaldo: 20700,
        pele: 1700 
    };

    const totalVotes = () => Object.values(votes).reduce((acc, val) => acc + val, 0);

    const updateProgressBars = () => {
        document.getElementById("bar-maradona").style.width = (votes.maradona / totalVotes()) * 100 + "%";
        document.getElementById("bar-messi").style.width = (votes.messi / totalVotes()) * 100 + "%";
        document.getElementById("bar-ronaldo").style.width = (votes.ronaldo / totalVotes()) * 100 + "%";
        document.getElementById("bar-pele").style.width = (votes.pele / totalVotes()) * 100 + "%";

        document.getElementById("maradona-count").innerText = votes.maradona.toLocaleString();
        document.getElementById("messi-count").innerText = votes.messi.toLocaleString();
        document.getElementById("ronaldo-count").innerText = votes.ronaldo.toLocaleString();
        document.getElementById("pele-count").innerText = votes.pele.toLocaleString();

    };
    document.getElementById("vote-btn").addEventListener("click", () => {
        const selected = document.querySelector("input[name='player']:checked");
        if (selected) {
            votes[selected.value]++;
            updateProgressBars();
            document.getElementById("vote-btn").disabled = true;
        }
    });
    updateProgressBars();
})







































