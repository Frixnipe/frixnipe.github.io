(function(ext) {
  
  // Define your custom functions here
  ext.getWeather = function(city, callback) {
    // Your code to get the weather for a given city
    // ...
    callback(weatherData);
  };

  // Describe your custom blocks here
  var descriptor = {
    blocks: [
      ['R', 'get weather for city %s', 'getWeather', 'New York'],
    ]
  };

  // Register the extension
  ScratchExtensions.register('Weather Extension', descriptor, ext);

})({});