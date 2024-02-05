var colorChangingHeader = document.getElementById('color-changing-header');

    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    function changeColor() {
      colorChangingHeader.style.color = getRandomColor();
    }

    setInterval(changeColor, 1000);