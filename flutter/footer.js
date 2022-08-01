(function() {
  var span = document.querySelector('footer>span');
  if (span) {
    span.innerText = 'Flutter 3.1.0-0.0.pre.1886 • 2022-08-01 09:29 • 9cfa87b8d9 • master';
  }
  var sourceLink = document.querySelector('a.source-link');
  if (sourceLink) {
    sourceLink.href = sourceLink.href.replace('/master/', '/9cfa87b8d9/');
  }
})();
