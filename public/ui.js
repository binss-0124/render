//**수정
// public/ui.js
export class UI {
    constructor() {
        // 전체 스코어보드 UI
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
        this.scoreboard.style.display = 'none'; // 기본적으로 숨김
        this.scoreboard.style.zIndex = '1000';
        document.body.appendChild(this.scoreboard);

        // 개인 킬/데스 UI (우측 상단)
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
        this.kdDisplay.style.fontFamily = 'Impact, Arial Black, sans-serif'; // 폰트 추가 //%%수정
        this.kdDisplay.style.fontSize = '24px'; // 폰트 크기 추가 //%%수정
        this.kdDisplay.style.fontWeight = 'bold'; // 폰트 굵기 추가 //%%수정
        this.kdDisplay.style.letterSpacing = '1px'; // 자간 추가 //%%수정
        document.body.appendChild(this.kdDisplay);
    }

    // 스코어보드 토글
    toggleScoreboard(show) {
        this.scoreboard.style.display = show ? 'block' : 'none';
    }

    // 전체 스코어보드 업데이트
    updateScoreboard(players) {
        let content = '<h2>Scoreboard</h2>';
        content += '<table>';
        content += '<tr><th>Nickname</th><th>Kills</th><th>Deaths</th></tr>
';
        players.forEach(player => {
            content += `<tr><td>${player.nickname}</td><td>${player.kills}</td><td>${player.deaths}</td></tr>`;
        });
        content += '</table>';
        this.scoreboard.innerHTML = content;
    }

    // 개인 킬/데스 UI 업데이트
    updateKD(localPlayerId, players) {
        const localPlayer = players.find(p => p.id === localPlayerId);
        if (localPlayer) {
            // 킬/데스 형식 변경 및 색상 적용 //%%수정
            const killsColor = '#00ff00'; // 밝은 녹색
            const deathsColor = '#ff0000'; // 빨간색
            this.kdDisplay.innerHTML = `K <span style="color: ${killsColor};">${localPlayer.kills}</span> / D <span style="color: ${deathsColor};">${localPlayer.deaths}</span>`; //%%수정
        } else {
            this.kdDisplay.innerHTML = `K <span style="color: #00ff00;">0</span> / D <span style="color: #ff0000;">0</span>`; //%%수정
        }
    }
}