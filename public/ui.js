//**수정
// public/ui.js
export class UI { //**수정 UI 클래스 내보내기
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

        //**수정 K/D 표시를 위한 새로운 요소 추가
        this.kdDisplay = document.createElement('div');
        this.kdDisplay.id = 'kdDisplay';
        this.kdDisplay.style.position = 'absolute';
        this.kdDisplay.style.top = '10px';
        this.kdDisplay.style.right = '10px';
        this.kdDisplay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        this.kdDisplay.style.color = 'white';
        this.kdDisplay.style.padding = '10px';
        this.kdDisplay.style.borderRadius = '5px';
        this.kdDisplay.style.zIndex = '999';
        document.body.appendChild(this.kdDisplay);
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

    //**수정 K/D 업데이트 함수 추가
    updateKD(localPlayerId, players) {
        const localPlayer = players.find(p => p.id === localPlayerId);
        if (localPlayer) {
            this.kdDisplay.innerHTML = `Kills: ${localPlayer.kills} / Deaths: ${localPlayer.deaths}`; //**수정
        } else {
            this.kdDisplay.innerHTML = `Kills: 0 / Deaths: 0`; //**수정
        }
    }
}

// Export the UI class if using modules, or make it globally accessible
// For this example, we'll assume it's globally accessible or imported via script tags.
// window.UI = UI; // If not using modules
