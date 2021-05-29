var selector = '.drag';
var elements = document.querySelectorAll(selector);
$z = 1;

// Bind functions to events
for(var i = 0; i < elements.length; i++){
  elements[i].addEventListener('mousedown', drag);
  elements[i].addEventListener('mouseup', end);
};

// Drag function
function drag(event) {
  // Set variable to true on mousedown
  $moving = true;
  // Increase z-index so last clicked always on top
  $z = $z+1;
  // Select the item that was clicked
  $this = event.target;
  // Positions cursor in center of element when being dragged, as oposed to the top left
  $width = $this.offsetWidth / 2;
  $height = $this.offsetHeight / 2;
  // Element follows mouse cursor
  document.addEventListener('mousemove',function(e) {
    // Only run if variable is true (this is destroyed on mouseup)
    if($moving === true){
      // Postion element, minus half width/height as above
      var x = e.clientX - $width;
      var y = e.clientY - $height;

      // Store left, top, and z-index in variable
      var position = 'left:' + x + 'px;top:' + y + 'px;z-index:'+$z+';cursor:move;';
      // Set style
      $this.setAttribute('style', position);
    };
  });
};

// Destroy drag on mouse up
function end() {
  $moving = false;
};