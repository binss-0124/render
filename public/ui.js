export class UI {
    constructor() {
        console.log('ui.js: UI constructor called'); // 디버그 로그 추가 //%%수정
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

        // 라운드 타이머 UI (중앙 상단) //%%수정
        this.roundTimerDisplay = document.createElement('div'); //%%수정
        this.roundTimerDisplay.id = 'roundTimerDisplay'; //%%수정
        this.roundTimerDisplay.style.position = 'absolute'; //%%수정
        this.roundTimerDisplay.style.top = '10px'; //%%수정
        this.roundTimerDisplay.style.left = '50%'; //%%수정
        this.roundTimerDisplay.style.transform = 'translateX(-50%)'; //%%수정
        this.roundTimerDisplay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; //%%수정
        this.roundTimerDisplay.style.color = 'white'; //%%수정
        this.roundTimerDisplay.style.padding = '10px 20px'; //%%수정
        this.roundTimerDisplay.style.borderRadius = '10px'; //%%수정
        this.roundTimerDisplay.style.fontFamily = 'Impact, Arial Black, sans-serif'; //%%수정
        this.roundTimerDisplay.style.fontSize = '36px'; //%%수정
        this.roundTimerDisplay.style.fontWeight = 'bold'; //%%수정
        this.roundTimerDisplay.style.letterSpacing = '2px'; //%%수정
        this.roundTimerDisplay.style.display = 'none'; // 기본적으로 숨김 //%%수정
        this.roundTimerDisplay.style.zIndex = '999'; //%%수정
        document.body.appendChild(this.roundTimerDisplay); //%%수정
    }

    // K/D UI 토글 //%%수정
    toggleKDDisplay(show) { //%%수정
        console.log(`ui.js: toggleKDDisplay(${show}) called`); // 디버그 로그 추가 //%%수정
        this.kdDisplay.style.display = show ? 'block' : 'none'; //%%수정
    } //%%수정

    // 스코어보드 토글
    toggleScoreboard(show) {
        console.log(`ui.js: toggleScoreboard(${show}) called`); // 디버그 로그 추가 //%%수정
        this.scoreboard.style.display = show ? 'block' : 'none';
    }

    // 전체 스코어보드 업데이트
    updateScoreboard(players) {
        console.log('ui.js: updateScoreboard called', players); // 디버그 로그 추가 //%%수정
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
        console.log('ui.js: updateKD called', localPlayerId, players); // 디버그 로그 추가 //%%수정
        const localPlayer = players.find(p => p.id === localPlayerId);
        if (localPlayer) {
            const killsColor = '#00ff00';
            const deathsColor = '#ff0000';
            this.kdDisplay.innerHTML = `K <span style="color: ${killsColor};">${localPlayer.kills}</span> / D <span style="color: ${deathsColor};">${localPlayer.deaths}</span>`;
        } else {
            this.kdDisplay.innerHTML = `K <span style="color: #00ff00;">0</span> / D <span style="color: #ff0000;">0</span>`;
        }
    }

    // 라운드 타이머 시작 //%%수정
    startRoundTimer(duration) { //%%수정
        console.log(`ui.js: startRoundTimer called with duration: ${duration}`); // 디버그 로그 //%%수정
        let timeLeft = duration; //%%수정
        this.roundTimerDisplay.style.display = 'block'; // 타이머 UI 표시 //%%수정

        const updateTimer = () => { //%%수정
            const minutes = Math.floor(timeLeft / 60); //%%수정
            const seconds = timeLeft % 60; //%%수정
            this.roundTimerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`; //%%수정

            if (timeLeft <= 0) { //%%수정
                clearInterval(this.timerInterval); // 타이머 중지 //%%수정
                this.roundTimerDisplay.textContent = "시간 종료!"; //%%수정
                // 시간 종료 시 추가 동작 (예: 게임 종료, 라운드 종료 등) //%%수정
            } else { //%%수정
                timeLeft--; //%%수정
            } //%%수정
        }; //%%수정

        updateTimer(); // 즉시 업데이트하여 초기 시간 표시 //%%수정
        this.timerInterval = setInterval(updateTimer, 1000); // 1초마다 업데이트 //%%수정
    } //%%수정
}