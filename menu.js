console.log("searching for spans...")
const spans = document.getElementsByTagName('span');

for (let i = 0; i < spans.length; i++) {
  const span = spans[i];
  console.log("found span:", span)
  if (span.textContent.equals('0.00')) {
    span.textContent = '10.00';
  }
}
