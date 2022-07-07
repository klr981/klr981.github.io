(function() {
  var span = document.querySelector('footer>span');
  if (span) {
    span.innerText = 'Flutter 3.1.0-0.0.pre.1528 • 2022-07-07 06:01 • 76558e0edf • master';
  }
  var sourceLink = document.querySelector('a.source-link');
  if (sourceLink) {
    sourceLink.href = sourceLink.href.replace('/master/', '/76558e0edf/');
  }
})();
