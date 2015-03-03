function init() {
     canvas = document.getElementById('game_canvas');
     ctx = canvas.getContext('2d');
     image = new Image();
     image.src = 'pacman10-hp-sprite.png';
     image.onload = function() {
          ctx.drawImage(image, 322, 0, 464, 135, 0, 0, 464, 135);
          ctx.drawImage(image, 100, 0, 20, 20, 2, 2, 20, 20);
     }
}
