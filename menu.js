// This will be the worst code in the history of humanity.

function menu() {
  const spans = document.getElementsByTagName('span');

  for (let i = 0; i < spans.length; i++) {
    const span = spans[i];
    if (span.textContent.endsWith('.00')) {
      let otherSpan = span.parentElement.parentElement.parentElement.parentElement
                          .children[2].children[0].children[0];

      // Rossi
      if (otherSpan.textContent.includes('CELLAIA ROSSO')) {
        span.textContent = '7 / 18';
      }
      else if (otherSpan.textContent.includes('CAOS')) {
        span.textContent = '7 / 18';
      }
      else if (otherSpan.textContent.includes('COLLE ARENARIO')) {
        span.textContent = '7 / 20';
      }
      else if (otherSpan.textContent.includes('DONNALUNA')) {
        span.textContent = '10 / 24';
      }
      else if (otherSpan.textContent.includes('ROSSO CAMPANIA')) {
        span.textContent = '9 / 28';
      }
      else if (otherSpan.textContent.includes('PATRINUS')) {
        span.textContent = '10 / 30';
      }
      else if (otherSpan.textContent.includes('KLÈOS')) {
        span.textContent = '10 / 32';
      }
      else if (otherSpan.textContent.includes('ROSSO DEL CIGLIO')) {
        span.textContent = '12 / 32';
      }
      else if (otherSpan.textContent.includes('ROSSO PAESTUM')) {
        span.textContent = '36';
      }
      else if (otherSpan.textContent.includes('PROCLAMO RISERVA')) {
        span.textContent = '46';
      }
      else if (otherSpan.textContent.includes('PRIMALATERRA 2012')) {
        span.textContent = '73';
      }

      // Bianchi
      else if (otherSpan.textContent.includes('CELLAIA BIANCO')) {
        span.textContent = '7 / 18';
      }
      else if (otherSpan.textContent.includes('COLLI MONTICORICESI')) {
        span.textContent = '7 / 18';
      }
      else if (otherSpan.textContent.includes('ETÈL')) {
        span.textContent = '7 / 19';
      }
      else if (otherSpan.textContent.includes('OGLIASTRO MARINA')) {
        span.textContent = '7 / 20';
      }
      else if (otherSpan.textContent.includes('VALMEZZANA')) {
        span.textContent = '8 / 22';
      }
      else if (otherSpan.textContent.includes('PROCLAMO')) {
        span.textContent = '8 / 22';
      }
      else if (otherSpan.textContent.includes('VINCENZÌ')) {
        span.textContent = '8 / 23';
      }
      else if (otherSpan.textContent.includes('DONNALUNA')) {
        span.textContent = '8 / 24';
      }
      else if (otherSpan.textContent.includes('CORSOLE')) {
        span.textContent = '10 / 25';
      }
      else if (otherSpan.textContent.includes('PAESTUM')) {
        span.textContent = '11 / 26';
      }
      else if (otherSpan.textContent.includes('LICOSA')) {
        span.textContent = '10 / 30';
      }
      else if (otherSpan.textContent.includes('KRÀTOS')) {
        span.textContent = '10 / 32';
      }
      else if (otherSpan.textContent.includes('VESOLE')) {
        span.textContent = '36';
      }

      // Rosati
      else if (otherSpan.textContent.includes('MARICINÈ')) {
        span.textContent = '7 / 20';
      }
      else if (otherSpan.textContent.includes('ANNA')) {
        span.textContent = '10 / 25';
      }
      else if (otherSpan.textContent.includes('PRIMMAVERA')) {
        span.textContent = '10 / 29';
      }

      // Vivaci
      else if (otherSpan.textContent.includes('CAPRARIZZO')) {
        span.textContent = '20';
      }
      else if (otherSpan.textContent.includes('PASHKÀ')) {
        span.textContent = '22';
      }
      else if (otherSpan.textContent.includes('DESIDERIO BIANCO')) {
        span.textContent = '22';
      }
      else if (otherSpan.textContent.includes('DESIDERIO ROSATO')) {
        span.textContent = '24';
      }

      // Spumanti
      else if (otherSpan.textContent.includes('SELIM')) {
        span.textContent = '9 / 23';
      }
      else if (otherSpan.textContent.includes('TREDANIELE SPUMANTE')) {
        span.textContent = '35';
      }

      // Other prices
      else {
        span.textContent = span.textContent.slice(0, -3);
      }
    }
  }
}

// Interval set to 1 second.
var timer = setInterval(menu, 1000);
