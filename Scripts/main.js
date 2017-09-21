const checkboxes = document.querySelectorAll('.inbox input[type = "checkbox"]');
let lastChecked;

function handleCheck(e) {
  //Check if the shift key was down when clicked
  //AND check that the box was being checked, not unchecked
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    //loop over every checkbox
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('starting to check the inBetween');
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });


  }
  lastChecked = this;
}
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
