export class UI {
  constructor() {
    this.scoreboard = document.getElementById('scoreboard');
    this.scoreboardTableBody = document.querySelector('#scoreboardTable tbody');
    this.killFeed = document.getElementById('killFeed');
    this.gameEndScreen = document.getElementById('gameEndScreen');
    this.finalScoreboard = document.getElementById('finalScoreboard');
    this.backToLobbyButton = document.getElementById('backToLobbyButton');

    this.backToLobbyButton.addEventListener('click', () => {
      window.location.reload();
    });
  }

  updateScoreboard(scores) {
    this.scoreboardTableBody.innerHTML = '';
    scores.forEach(player => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td style="padding: 10px;">${player.nickname}</td>
        <td style="padding: 10px;">${player.kills}</td>
        <td style="padding: 10px;">${player.deaths}</td>
      `;
      this.scoreboardTableBody.appendChild(row);
    });
  }

  showScoreboard() {
    this.scoreboard.style.display = 'block';
  }

  hideScoreboard() {
    this.scoreboard.style.display = 'none';
  }

  // attackerCharacter와 victimCharacter 매개변수 추가
  addKillFeedMessage(attackerName, victimName, attackerCharacter, victimCharacter) { //%%수정됨
    // 킬로그 컨테이너를 보이도록 설정
    this.killFeed.style.display = 'block'; //%%수정됨

    const killMessage = document.createElement('div');
    killMessage.style.display = 'flex'; // Flexbox를 사용하여 이미지와 텍스트를 정렬
    killMessage.style.alignItems = 'center'; // 세로 중앙 정렬
    killMessage.style.justifyContent = 'flex-end'; // 오른쪽 정렬
    killMessage.style.color = 'white';
    killMessage.style.marginBottom = '5px';
    killMessage.style.fontSize = '18px'; // 폰트 크기 조정
    killMessage.style.fontWeight = 'bold'; // 폰트 굵기 조정
    killMessage.style.textShadow = '1px 1px 2px rgba(0,0,0,0.7)'; // 텍스트 그림자 추가

    // 공격자 이미지
    const attackerImg = document.createElement('img');
    attackerImg.src = `./resources/character/${attackerCharacter}.png`;
    attackerImg.style.width = '30px'; // 이미지 크기 조정
    attackerImg.style.height = '30px';
    attackerImg.style.borderRadius = '50%'; // 원형 이미지
    attackerImg.style.marginRight = '5px';
    attackerImg.style.border = '1px solid #00ff00'; // 공격자 테두리 색상

    // 해골 아이콘 (킬 표시)
    const skullIcon = document.createElement('img');
    skullIcon.src = `./resources/skull_icon.png`; // 해골 아이콘 경로 (추후 추가 필요)
    skullIcon.style.width = '20px';
    skullIcon.style.height = '20px';
    skullIcon.style.margin = '0 5px';

    // 피해자 이미지
    const victimImg = document.createElement('img');
    victimImg.src = `./resources/character/${victimCharacter}.png`;
    victimImg.style.width = '30px';
    victimImg.style.height = '30px';
    victimImg.style.borderRadius = '50%';
    victimImg.style.marginLeft = '5px';
    victimImg.style.border = '1px solid #ff0000'; // 피해자 테두리 색상

    // 텍스트 요소
    const attackerText = document.createElement('span');
    attackerText.textContent = attackerName;
    attackerText.style.color = '#00ff00'; // 공격자 닉네임 색상

    const victimText = document.createElement('span');
    victimText.textContent = victimName;
    victimText.style.color = '#ff0000'; // 피해자 닉네임 색상

    killMessage.appendChild(attackerImg);
    killMessage.appendChild(attackerText);
    killMessage.appendChild(skullIcon); // 해골 아이콘 추가
    killMessage.appendChild(victimText);
    killMessage.appendChild(victimImg);

    this.killFeed.appendChild(killMessage);

    // 메시지가 사라진 후 킬로그 컨테이너를 숨길지 결정
    setTimeout(() => {
      this.killFeed.removeChild(killMessage);
      // 모든 메시지가 사라지면 킬로그 컨테이너를 숨김
      if (this.killFeed.children.length === 0) { //%%수정됨
        this.killFeed.style.display = 'none'; //%%수정됨
      } //%%수정됨
    }, 5000);
  }

  showFinalScoreboard(finalScores) {
    const finalScoreboardTable = document.createElement('table');
    finalScoreboardTable.style.color = 'white';
    finalScoreboardTable.style.width = '400px';
    finalScoreboardTable.style.borderCollapse = 'collapse';
    finalScoreboardTable.innerHTML = `
      <thead>
        <tr>
          <th style="padding: 10px; border-bottom: 1px solid white;">Player</th>
          <th style="padding: 10px; border-bottom: 1px solid white;">Kills</th>
          <th style="padding: 10px; border-bottom: 1px solid white;">Deaths</th>
        </tr>
      </thead>
      <tbody>
        ${finalScores.map(player => `
          <tr>
            <td style="padding: 10px;">${player.nickname}</td>
            <td style="padding: 10px;">${player.kills}</td>
            <td style="padding: 10px;">${player.deaths}</td>
          </tr>
        `).join('')}
      </tbody>
    `;
    this.finalScoreboard.innerHTML = '';
    this.finalScoreboard.appendChild(finalScoreboardTable);
    this.gameEndScreen.style.display = 'flex';
  }
}