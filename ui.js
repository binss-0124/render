
// ui.js
//**수정
export class GameUI {
    constructor() {
        this.playerScores = new Map(); // playerName -> {kills, deaths}

        // 점수판 컨테이너
        this.scoreboard = document.createElement('div');
        this.scoreboard.id = 'scoreboard';
        this.scoreboard.style.position = 'fixed';
        this.scoreboard.style.top = '50%';
        this.scoreboard.style.left = '50%';
        this.scoreboard.style.transform = 'translate(-50%, -50%)';
        this.scoreboard.style.width = '600px';
        this.scoreboard.style.background = 'rgba(0, 0, 0, 0.7)';
        this.scoreboard.style.color = 'white';
        this.scoreboard.style.border = '2px solid #888';
        this.scoreboard.style.borderRadius = '10px';
        this.scoreboard.style.padding = '20px';
        this.scoreboard.style.fontFamily = 'Arial, sans-serif';
        this.scoreboard.style.zIndex = '1000';
        this.scoreboard.style.display = 'none'; // 기본적으로 숨김

        // 점수판 제목
        const title = document.createElement('h2');
        title.innerText = 'Scoreboard';
        title.style.textAlign = 'center';
        title.style.marginBottom = '15px';
        this.scoreboard.appendChild(title);

        // 점수판 테이블
        this.table = document.createElement('table');
        this.table.style.width = '100%';
        this.table.style.borderCollapse = 'collapse';
        this.scoreboard.appendChild(this.table);

        // 테이블 헤더
        const thead = document.createElement('thead');
        thead.innerHTML = `
            <tr style="border-bottom: 1px solid #555;">
                <th style="padding: 8px; text-align: left;">Player</th>
                <th style="padding: 8px;">Kills</th>
                <th style="padding: 8px;">Deaths</th>
            </tr>
        `;
        this.table.appendChild(thead);

        // 테이블 바디
        this.tbody = document.createElement('tbody');
        this.table.appendChild(this.tbody);

        document.body.appendChild(this.scoreboard);

        // Tab 키 이벤트 리스너
        window.addEventListener('keydown', (e) => {
            if (e.code === 'Tab') {
                e.preventDefault();
                this.show();
            }
        });
        window.addEventListener('keyup', (e) => {
            if (e.code === 'Tab') {
                this.hide();
            }
        });
    }

    // 점수판 보이기
    show() {
        this.scoreboard.style.display = 'block';
    }

    // 점수판 숨기기
    hide() {
        this.scoreboard.style.display = 'none';
    }

    // 플레이어 추가 또는 업데이트
    updatePlayer(playerName, kills, deaths) {
        this.playerScores.set(playerName, { kills, deaths });
        this.redraw();
    }
    
    // 플레이어 추가
    addPlayer(playerName) {
        if (!this.playerScores.has(playerName)) {
            this.playerScores.set(playerName, { kills: 0, deaths: 0 });
            this.redraw();
        }
    }

    // 킬 추가
    addKill(playerName) {
        if (this.playerScores.has(playerName)) {
            const score = this.playerScores.get(playerName);
            score.kills++;
            this.redraw();
        }
    }

    // 데스 추가
    addDeath(playerName) {
        if (this.playerScores.has(playerName)) {
            const score = this.playerScores.get(playerName);
            score.deaths++;
            this.redraw();
        }
    }

    // 점수판 다시 그리기
    redraw() {
        this.tbody.innerHTML = ''; // 테이블 초기화
        for (const [name, score] of this.playerScores.entries()) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td style="padding: 8px; text-align: left;">${name}</td>
                <td style="padding: 8px; text-align: center;">${score.kills}</td>
                <td style="padding: 8px; text-align: center;">${score.deaths}</td>
            `;
            this.tbody.appendChild(row);
        }
    }
}
