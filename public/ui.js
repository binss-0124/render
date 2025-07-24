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

  addKillFeedMessage(attackerName, victimName) {
    const killMessage = document.createElement('div');
    killMessage.textContent = `${attackerName} killed ${victimName}`;
    killMessage.style.color = 'white';
    killMessage.style.marginBottom = '5px';
    this.killFeed.appendChild(killMessage);
    setTimeout(() => {
      this.killFeed.removeChild(killMessage);
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