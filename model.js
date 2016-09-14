var TETRIS = TETRIS || {};

BOARD_WIDTH = 10;
BOARD_HEIGHT = 20;

// model
//  gameboard = nested array that adds set pieces as they are set
//  current_piece = array of coordinates [[[1,2][1,3][1,4]], orange]
//  
//  

TETRIS.game = {

  init: function() {
    this.createBoard();
  },

  createBoard: function(){
    this.board = new Array(BOARD_HEIGHT);

    for(var i = 0; i < this.board.length; i++) {
      this.board[i] = new Array(BOARD_WIDTH);
    }
  },

  movePiece: function() {
      for(var i = 0; i< game.current_piece.length; i++) {
        game.current_piece[i][0] += 1;
      }
  },

  getCurrentState: function() {
    var tempBoard = TETRIS.game.board;
    for (var i = 0; i < game.current_piece.length; i++) {
      tempBoard
    }

    return tempBoard;
  },

  current_piece: {
    color: 1,
    blocks: [ [0,3], [0,4], [0,5] ]
  }

};