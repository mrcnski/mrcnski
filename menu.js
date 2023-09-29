// This will be the worst code in the history of humanity.

console.log("menu-fixer v0.1.19");

let prices = {
  // Rossi
  'CELLAIA ROSSO'       : '7 / 20',
  'CAOS'                : '7 / 20',
  'COLLE ARENARIO'      : '7 / 22',
  'DONNALUNA ROSSO'     : '10 / 26',
  'ROSSO CAMPANIA'      : '9 / 30',
  'MALABROCCA'          : '10 / 31',
  'PATRINUS'            : '10 / 32',
  'KLÈOS'               : '10 / 34',
  'ROSSO DEL CIGLIO'    : '12 / 34',
  'ROSSO PAESTUM'       : '38',
  'PROCLAMO RISERVA'    : '48',
  'PRIMALATERRA 2012'   : '75',

  // Bianchi
  'CELLAIA BIANCO'      : '7 / 20',
  'COLLI MONTICORICESI' : '7 / 20',
  'ETÈL'                : '7 / 21',
  'OGLIASTRO MARINA'    : '7 / 22',
  'VALMEZZANA'          : '8 / 24',
  'PROCLAMO'            : '8 / 24',
  'VINCENZÌ'            : '8 / 25',
  'DONNALUNA BIANCO'    : '8 / 26',
  'CORSOLE'             : '10 / 27',
  'LICOSA'              : '10 / 32',
  'KRÀTOS'              : '10 / 34',
  'VESOLE'              : '38',

  // Rosati
  'MARICINÈ'            : '7 / 22',
  'ANNA'                : '10 / 27',
  'PRIMMAVERA'          : '10 / 31',

  // Vivaci
  'CAPRARIZZO'          : '22',
  'PASHKÀ'              : '24',
  'DESIDERIO BIANCO'    : '24',
  'DESIDERIO ROSATO'    : '26',

  // Spumanti
  'SELIM'               : '9 / 25',
  'TREDANIELE SPUMANTE' : '37',

  // Backwards-compat, can be removed in next update
  'DONNALUNA'           : '8 / 26',
};

function menu() {
  const spans = document.getElementsByTagName('span');

  for (let i = 0; i < spans.length; i++) {
    const span = spans[i];
    if (span.textContent.includes('00')) {
      let nameSpan = span.parentElement.parentElement
                          .children[2].children[0].children[0];

      let name = nameSpan.textContent.trim();
      let price = prices[name];

      if (price) {
        span.textContent = price;
      } else {
        // Other prices
        span.textContent = span.textContent.slice(0, -3);
      }
    }
  }
}

menu();
var timer = setInterval(menu, 250);
