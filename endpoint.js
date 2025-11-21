// endpoint.js
function getEmailDomains(data) {
  const apiData = {
    "free": ["gmail.com", "yahoo.com", "hotmail.com"],
    "disposable": ["tempmail.com", "10minutemail.com"],
    "all": ["gmail.com", "yahoo.com", "hotmail.com", "tempmail.com", "10minutemail.com"]
  };
  
  return apiData[data] || {error: "Data not found"};
}

// Handle the callback
const urlParams = new URLSearchParams(window.location.search);
const dataParam = urlParams.get('data');
const callback = urlParams.get('callback') || 'callback';

// Return the data wrapped in callback
window[callback] = function() {
  return getEmailDomains(dataParam);
};
