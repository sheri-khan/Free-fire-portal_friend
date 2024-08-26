const playerDetails = {
    id1: {
        name: "Rockey$++",
        level: 50,
        rank: "Grandmaster",
        stats: {
            kills: 2000,
            matches: 500,
            wins: 100
        }
    },
    id2: {
        name: "#_Kashi",
        level: 45,
        rank: "Heroic",
        stats: {
            kills: 1800,
            matches: 400,
            wins: 90
        }
    }
    // Add more player details as needed
};

function showDetails(id) {
    const detailsContainer = document.getElementById('details-container');
    const details = playerDetails[id];

    if (details) {
        detailsContainer.innerHTML = `
            <h3>${details.name}</h3>
            <p><strong>Level:</strong> ${details.level}</p>
            <p><strong>Rank:</strong> ${details.rank}</p>
            <p><strong>Kills:</strong> ${details.stats.kills}</p>
            <p><strong>Matches:</strong> ${details.stats.matches}</p>
            <p><strong>Wins:</strong> ${details.stats.wins}</p>
        `;
    } else {
        detailsContainer.innerHTML = "<p>No details available for this player.</p>";
    }
}
