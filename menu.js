// This will be the worst code in the history of humanity.

function menu() {
  console.log("searching for spans...")
  const spans = document.getElementsByTagName('span');

  for (let i = 0; i < spans.length; i++) {
    const span = spans[i];
    console.log("found span:", span)
    if (span.textContent == '0.00') {
      let otherSpan = span.parentElement.parentElement.parentElement.parentElement
                          .children[2].children[0].children[0];
      if (otherSpan.textContent.includes('CELLAIA ROSSO')) {
        span.textContent = '7 / 18';
      }
    }
  }
}

// Interval set to 1 second.
var timer = setInterval(menu, 1000);

// Clear timer after some time.
setInterval(() => {
  clearInterval(timer);
}, 15000);
