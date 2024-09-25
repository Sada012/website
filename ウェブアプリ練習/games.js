document.addEventListener('DOMContentLoaded', () => {
    const chessGameArea = document.getElementById('chessGameArea');
    const chessGameMessage = document.createElement('p');
    chessGameMessage.textContent = 'ここにチェスゲームが表示されます。';
    chessGameArea.appendChild(chessGameMessage);

    const pokerGameArea = document.getElementById('pokerGameArea');
    const pokerGameMessage = document.createElement('p');
    pokerGameMessage.textContent = 'ここにポーカーゲームが表示されます。';
    pokerGameArea.appendChild(pokerGameMessage);
});

// チェスゲームの開始
function startChessGame() {
    const chessGameArea = document.getElementById('chessGameArea');
    chessGameArea.innerHTML = ''; // エリアをクリア
    const board = createChessBoard();
    chessGameArea.appendChild(board);
}

// チェスボードを作成
function createChessBoard() {
    const board = document.createElement('div');
    board.style.display = 'grid';
    board.style.gridTemplateColumns = `repeat(8, 50px)`;
    board.style.gridTemplateRows = `repeat(8, 50px)`;
    const cells = [];
    for (let i = 0; i < 8 * 8; i++) {
        const cell = document.createElement('div');
        cell.style.width = '50px';
        cell.style.height = '50px';
        cell.style.border = '1px solid black';
        cell.style.boxSizing = 'border-box';
        cell.style.backgroundColor = (Math.floor(i / 8) + i % 8) % 2 === 0 ? 'white' : 'gray';
        cell.addEventListener('click', () => {
            cell.style.backgroundColor = 'lightblue';
            npcMove(board);
        });
        cells.push(cell);
        board.appendChild(cell);
    }
    return board;
}

// NPCの動きをシミュレート
function npcMove(board) {
    const cells = Array.from(board.children);
    const availableMoves = cells.filter(cell => cell.style.backgroundColor === '');
    if (availableMoves.length > 0) {
        const randomMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];
        randomMove.style.backgroundColor = 'lightgreen';
    }
}

// ポーカーゲームの開始
function startPokerGame() {
    const pokerGameArea = document.getElementById('pokerGameArea');
    pokerGameArea.innerHTML = ''; // エリアをクリア
    const playerCards = createPokerCards(5);
    const npcCards = createPokerCards(5);
    const resultButton = document.createElement('button');
    resultButton.textContent = '勝者を決定';
    resultButton.addEventListener('click', () => {
        determineWinner(playerCards, npcCards);
    });

    playerCards.forEach(card => pokerGameArea.appendChild(card));
    const npcSection = document.createElement('div');
    npcSection.innerHTML = '<h3>NPCのカード</h3>';
    npcCards.forEach(card => npcSection.appendChild(card));
    pokerGameArea.appendChild(npcSection);
    pokerGameArea.appendChild(resultButton);
}

// ポーカーカードを作成
function createPokerCards(count) {
    const cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const cardSuits = ['♥', '♦', '♣', '♠'];
    const cards = [];
    for (let i = 0; i < count; i++) {
        const card = document.createElement('div');
        const value = cardValues[Math.floor(Math.random() * cardValues.length)];
        const suit = cardSuits[Math.floor(Math.random() * cardSuits.length)];
        card.textContent = `${value}${suit}`;
        card.style.width = '100px';
        card.style.height = '150px';
        card.style.border = '1px solid black';
        card.style.display = 'inline-block';
        card.style.textAlign = 'center';
        card.style.lineHeight = '150px';
        card.style.fontSize = '2em';
        card.style.margin = '10px';
        cards.push(card);
    }
    return cards;
}

// 勝者を決定
function determineWinner(playerCards, npcCards) {
    const playerScore = calculatePokerHandValue(playerCards);
    const npcScore = calculatePokerHandValue(npcCards);

    if (playerScore > npcScore) {
        alert('プレイヤーの勝ち！');
    } else if (npcScore > playerScore) {
        alert('NPCの勝ち！');
    } else {
        alert('引き分け！');
    }
}

// ポーカーハンドの価値を計算
function calculatePokerHandValue(cards) {
    const cardValues = cards.map(card => card.textContent[0]);
    const valueMap = {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '1': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14};
    return cardValues.reduce((sum, value) => sum + valueMap[value], 0);
}
