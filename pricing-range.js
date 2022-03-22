<!DOCTYPE html>
<head>
  <tittle></tittle>
  <script>
    function myrange(value){
      var price=value;
      console.log(price);
      var outputrange=document.querySelector('#rangevalue');
      outputrange.textContent=price;

    }

  </script>
</head>
<body>
  <div class="range">
    <form>
      <label for="range1">One Digit</label>
      <input id="range1" name="range1" type="range" min="0" max="9" value="3" onchange="myrange(this.value);">
      <span id="rangevalue"></span>
      <label for="range2">More Digits</label>
      <input id="range2" name="range2" type="range" min="0" max="300" value="15">
    </form>
  </div>
</body>
</html>
