var editorFeatures = (function() {
  var data = {
    fontSize: document.getElementById('js--font-size'),
    fontFamily: document.getElementById('js--font-family'),
    bold: document.getElementById('js--bold'),
    italic: document.getElementById('js--italic'),
    underline: document.getElementById('js--underline'),
    editor: document.getElementById('js--editor')
  };

  return data;

})();

var editor = (function(features) {
  // Change size of editor to font size
  features.fontSize.addEventListener('change', changeFontSize);

  // Change font to bold
  features.bold.addEventListener('click', setBold);

  // Change font to italic
  features.italic.addEventListener('click', setItalic);

  // Change font to underline
  features.underline.addEventListener('click', setUnderline);

  // Change font family
  features.fontFamily.addEventListener('change', changeFont);

  function changeFontSize() {
    features.editor.style.fontSize = features.fontSize.value+'px';
  }

  function setBold() {
    features.editor.style.fontWeight = 'bold';
  }

  function setItalic() {
    features.editor.style.fontStyle = 'italic';
  }

  function setUnderline() {
    features.editor.style.textDecoration = 'underline';
  }

  function changeFont() {
    features.editor.style.fontFamily = features.fontFamily.value;
  }

})(editorFeatures);
