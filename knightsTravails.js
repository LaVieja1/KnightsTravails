const squareRegistry = new Map();

const ChessSquare = (x, y) => {
    const xPos = x;
    const yPos = y;
    let predecessor;

    const KNIGHT_OFFSETS = [
        [1, 2], [1, -2],
        [2, 1], [2, -1],
        [-1, 2], [-1, -2],
        [-2, 1], [-2, -1]
    ]

    const getPredecessor = () => predecessor;
    const setPredecessor = (newPred) => { predecessor ||= newPred }

    const name = () => `${x}, ${y}`;

    const createKnightMoves = () => {
        return KNIGHT_OFFSETS.map(newSquareFrom).filter(Boolean);
    }
}