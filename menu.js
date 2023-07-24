// This will be the worst code in the history of humanity.

console.log("menu-fixer v0.1.12");

function menu() {
  const spans = document.getElementsByTagName('span');

  for (let i = 0; i < spans.length; i++) {
    const span = spans[i];
    if (span.textContent.includes('00')) {
      let otherSpan = span.parentElement.parentElement.parentElement
                          .children[2].children[0].children[0];

      // Rossi
      if (otherSpan.textContent.includes('CELLAIA ROSSO')) {
        span.textContent = '7 / 20';
      }
      else if (otherSpan.textContent.includes('CAOS')) {
        span.textContent = '7 / 20';
      }
      else if (otherSpan.textContent.includes('COLLE ARENARIO')) {
        span.textContent = '7 / 22';
      }
      else if (otherSpan.textContent.includes('DONNALUNA')) {
        span.textContent = '10 / 26';
      }
      else if (otherSpan.textContent.includes('ROSSO CAMPANIA')) {
        span.textContent = '9 / 30';
      }
      else if (otherSpan.textContent.includes('PATRINUS')) {
        span.textContent = '10 / 32';
      }
      else if (otherSpan.textContent.includes('KLÈOS')) {
        span.textContent = '10 / 34';
      }
      else if (otherSpan.textContent.includes('ROSSO DEL CIGLIO')) {
        span.textContent = '12 / 34';
      }
      else if (otherSpan.textContent.includes('ROSSO PAESTUM')) {
        span.textContent = '38';
      }
      else if (otherSpan.textContent.includes('PROCLAMO RISERVA')) {
        span.textContent = '48';
      }
      else if (otherSpan.textContent.includes('PRIMALATERRA 2012')) {
        span.textContent = '75';
      }

      // Bianchi
      else if (otherSpan.textContent.includes('CELLAIA BIANCO')) {
        span.textContent = '7 / 20';
      }
      else if (otherSpan.textContent.includes('COLLI MONTICORICESI')) {
        span.textContent = '7 / 20';
      }
      else if (otherSpan.textContent.includes('ETÈL')) {
        span.textContent = '7 / 21';
      }
      else if (otherSpan.textContent.includes('OGLIASTRO MARINA')) {
        span.textContent = '7 / 22';
      }
      else if (otherSpan.textContent.includes('VALMEZZANA')) {
        span.textContent = '8 / 24';
      }
      else if (otherSpan.textContent.includes('PROCLAMO')) {
        span.textContent = '8 / 24';
      }
      else if (otherSpan.textContent.includes('VINCENZÌ')) {
        span.textContent = '8 / 25';
      }
      else if (otherSpan.textContent.includes('DONNALUNA')) {
        span.textContent = '8 / 26';
      }
      else if (otherSpan.textContent.includes('CORSOLE')) {
        span.textContent = '10 / 27';
      }
      else if (otherSpan.textContent.includes('PAESTUM')) {
        span.textContent = '11 / 28';
      }
      else if (otherSpan.textContent.includes('LICOSA')) {
        span.textContent = '10 / 32';
      }
      else if (otherSpan.textContent.includes('KRÀTOS')) {
        span.textContent = '10 / 34';
      }
      else if (otherSpan.textContent.includes('VESOLE')) {
        span.textContent = '38';
      }

      // Rosati
      else if (otherSpan.textContent.includes('MARICINÈ')) {
        span.textContent = '7 / 22';
      }
      else if (otherSpan.textContent.includes('ANNA')) {
        span.textContent = '10 / 27';
      }
      else if (otherSpan.textContent.includes('PRIMMAVERA')) {
        span.textContent = '10 / 31';
      }

      // Vivaci
      else if (otherSpan.textContent.includes('CAPRARIZZO')) {
        span.textContent = '22';
      }
      else if (otherSpan.textContent.includes('PASHKÀ')) {
        span.textContent = '24';
      }
      else if (otherSpan.textContent.includes('DESIDERIO BIANCO')) {
        span.textContent = '24';
      }
      else if (otherSpan.textContent.includes('DESIDERIO ROSATO')) {
        span.textContent = '26';
      }

      // Spumanti
      else if (otherSpan.textContent.includes('SELIM')) {
        span.textContent = '9 / 25';
      }
      else if (otherSpan.textContent.includes('TREDANIELE SPUMANTE')) {
        span.textContent = '37';
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
