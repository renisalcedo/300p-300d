var key = (function() {
  var data = {
    keyCode: document.getElementById('js--code'),
    key: document.getElementById('js--key'),
    which: document.getElementById('js--which')
  };

  document.addEventListener('keypress', function(e) {
    var keyData = {
      keyCode: e.keyCode,
      key: e.key,
      which: e.which
    }

    data.keyCode.textContent = keyData.keyCode;
    data.key.textContent = keyData.key;
    data.which.textContent = keyData.which;
  });

})();
