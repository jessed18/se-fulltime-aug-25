function getMove() {
   return null;
}

function resetGame() {
    const board = new Array(20).fill(null).map(
        () => new Array(20).fill(null)
    );
    let nextMoveSymbol = 'X';
    return [board, nextMoveSymbol];
}

let [board, nextMoveSymbol] = resetGame();

function containerAreaClicked(event) {
    console.log(event, event.target, event.currentTarget);
    window.event = event;
    let dataset = event.target.dataset;
    if (typeof dataset.row === 'undefined' || typeof dataset.col === 'undefined') {
        return;
    }

    const row = Number(dataset.row);
    const col = Number(dataset.col);

    if (board[row][col] === null) {
        board[row][col] = nextMoveSymbol;
        nextMoveSymbol = nextMoveSymbol === 'X' ? 'O' : 'X';
        renderBoard(board);
    }
}

const container = document.querySelector('.js-container');
container.addEventListener('click', containerAreaClicked);

function renderRow(rowData, rowIndex) {
    let rowHtml = '<tr class="tic-tac-toe-row">';
    for (let i = 0; i < rowData.length; i++) {
        let cell = rowData[i];
        rowHtml += `<td 
            class="tic-tac-toe-cell" 
            data-row="${rowIndex}" 
            data-col="${i}">
            ${cell ?? ''}
        </td>`;
    }
    rowHtml += '</tr>';
    return rowHtml;
}

function renderBoard(board) {
    let html = '<table class="tic-tac-toe-board"><tbody>';
    for (let i = 0; i < board.length; i++) {
        let row = board[i];
        html += renderRow(row, i);
    }
    html += '</tbody></table>';
    container.innerHTML = html;
}

renderBoard(board);

document.querySelector('.js-new-game')
.addEventListener('click', () => {
    [board, nextMoveSymbol] = resetGame();
    renderBoard(board);
});