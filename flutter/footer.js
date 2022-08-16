(function() {
  var span = document.querySelector('footer>span');
  if (span) {
    span.innerText = 'Flutter 3.1.0-0.0.pre.2015 • 2022-08-16 11:21 • a72ee01df9 • master';
  }
  var sourceLink = document.querySelector('a.source-link');
  if (sourceLink) {
    sourceLink.href = sourceLink.href.replace('/master/', '/a72ee01df9/');
  }
})();
