// endpoint.js
(function() {
  const apiData = {
    "free": ["gmail.com", "yahoo.com"],
    "disposable": ["tempmail.com"]
  };
  
  // Expose to global scope
  window.emailDomainsAPI = {
    get: (type) => apiData[type] || null,
    data: apiData
  };
  
  // Auto-execute if parameter present
  const urlParams = new URLSearchParams(window.location.search);
  const dataParam = urlParams.get('data');
  if (dataParam && apiData[dataParam]) {
    window.emailDomainsResult = apiData[dataParam];
  }
})();
