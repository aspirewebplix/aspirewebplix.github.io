// Check if ad blocker is active
function isAdBlockerActive() {
  var adZoneElement = document.querySelector('.ad-zone');

  if (adZoneElement) {
    var elementComputedStyle = window.getComputedStyle(adZoneElement);
    var elementHeight = parseFloat(elementComputedStyle.getPropertyValue('height'));
    var elementDisplay = elementComputedStyle.getPropertyValue('display');

    return elementHeight === 0 || elementDisplay === 'none';
  }

  return false;
}

// Usage
if (isAdBlockerActive()) {
  // Ad blocker is active, take action
  console.log("Ad blocker is active.");
  alert("OOPS! Adblocker detected, please disable ad blocker to our service, it is stated in our terms and conditions, thank you :)");
  location.reload();
} else {
  // Ad blocker is not detected
  console.log("Ad blocker is not active.");
}
