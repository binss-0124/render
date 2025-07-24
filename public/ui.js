export class UI {
    constructor() {
        // 전체 스코어보드 UI
        this.scoreboard = document.createElement('div');
        this.scoreboard.id = 'scoreboard';
        this.scoreboard.style.position = 'absolute';
        this.scoreboard.style.top = '50%';
        this.scoreboard.style.left = '50%';
        this.scoreboard.style.transform = 'translate(-50%, -50%)';
        this.scoreboard.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // 배경색 변경 //%%수정
        this.scoreboard.style.color = 'white';
        this.scoreboard.style.padding = '20px';
        this.scoreboard.style.borderRadius = '10px';
        this.scoreboard.style.border = '3px solid #FFD700'; // 테두리 추가 (금색) //%%수정
        this.scoreboard.style.fontFamily = 'Impact, Arial Black, sans-serif'; // 폰트 추가 //%%수정
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
        this.kdDisplay.style.fontFamily = 'Impact, Arial Black, sans-serif';
        this.kdDisplay.style.fontSize = '24px';
        this.kdDisplay.style.fontWeight = 'bold';
        this.kdDisplay.style.letterSpacing = '1px';
        this.kdDisplay.style.display = 'none'; // 기본적으로 숨김 //%%수정
        document.body.appendChild(this.kdDisplay);
    }

    // K/D UI 토글 //%%수정
    toggleKDDisplay(show) { //%%수정
        this.kdDisplay.style.display = show ? 'block' : 'none'; //%%수정
    } //%%수정

    // 스코어보드 토글
    toggleScoreboard(show) {
        this.scoreboard.style.display = show ? 'block' : 'none';
    }

    // 전체 스코어보드 업데이트
    updateScoreboard(players) {
        let content = '<h2 style="font-size: 36px; text-align: center; margin-bottom: 20px; text-shadow: 2px 2px 4px #00FFFF;">SCOREBOARD</h2>'; // 헤더 스타일 //%%수정
        content += '<table style="width: 100%; border-collapse: collapse; border-spacing: 0; font-size: 20px;">'; // 테이블 스타일 //%%수정
        content += '<tr style="background-color: rgba(255, 255, 255, 0.1);"><th>Nickname</th><th>Kills</th><th>Deaths</th></tr>'; // 헤더 행 스타일 //%%수정
        players.forEach(player => {
            content += `<tr style="border-bottom: 1px solid rgba(255, 255, 255, 0.2);">` + // 행 스타일 //%%수정
                       `<td style="padding: 10px; text-align: left;">${player.nickname}</td>` + // 닉네임 셀 스타일 //%%수정
                       `<td style="padding: 10px; text-align: center; color: #00ff00;">${player.kills}</td>` + // 킬 셀 스타일 (녹색) //%%수정
                       `<td style="padding: 10px; text-align: center; color: #ff0000;">${player.deaths}</td>` + // 데스 셀 스타일 (빨간색) //%%수정
                       `</tr>`;
        });
        content += '</table>';
        this.scoreboard.innerHTML = content;
    }

    // 개인 킬/데스 UI 업데이트
    updateKD(localPlayerId, players) {
        const localPlayer = players.find(p => p.id === localPlayerId);
        if (localPlayer) {
            const killsColor = '#00ff00';
            const deathsColor = '#ff0000';
            this.kdDisplay.innerHTML = `K <span style="color: ${killsColor};">${localPlayer.kills}</span> / D <span style="color: ${deathsColor};">${localPlayer.deaths}</span>`;
        } else {
            this.kdDisplay.innerHTML = `K <span style="color: #00ff00;">0</span> / D <span style="color: #ff0000;">0</span>`;
        }
    }
}