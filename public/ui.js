//**수정
// public/ui.js
class UI {
    constructor() {
        this.scoreboard = document.createElement('div');
        this.scoreboard.id = 'scoreboard';
        this.scoreboard.style.position = 'absolute';
        this.scoreboard.style.top = '50%';
        this.scoreboard.style.left = '50%';
        this.scoreboard.style.transform = 'translate(-50%, -50%)';
        this.scoreboard.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        this.scoreboard.style.color = 'white';
        this.scoreboard.style.padding = '20px';
        this.scoreboard.style.borderRadius = '10px';
        this.scoreboard.style.display = 'none'; // Hidden by default
        this.scoreboard.style.zIndex = '1000';
        document.body.appendChild(this.scoreboard);
    }

    toggleScoreboard(show) {
        this.scoreboard.style.display = show ? 'block' : 'none';
    }

    updateScoreboard(players) {
        let content = '<h2>Scoreboard</h2>';
        content += '<table>';
        content += '<tr><th>Nickname</th><th>Kills</th><th>Deaths</th></tr>';
        players.forEach(player => {
            content += `<tr><td>${player.nickname}</td><td>${player.kills}</td><td>${player.deaths}</td></tr>`;
        });
        content += '</table>';
        this.scoreboard.innerHTML = content;
    }
}

// Export the UI class if using modules, or make it globally accessible
// For this example, we'll assume it's globally accessible or imported via script tags.
// window.UI = UI; // If not using modules
