// Video: `if`, `else if`, `else`, `switch`;  nesting, "flattening"
let x = 0;
if (x > 0) {
    console.log('x is positive');
} else if (x < 0) {
    console.log('x is negative');
} 
else {
    console.log('x is 0');
}

const expr = 'Papayas';

switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
    console.log('You selected Mangoes');
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

if (expr == 'Oranges') {
  console.log('Oranges are $0.59 a pound.');
} else if (expr == 'Mangoes' || expr == 'Papayas') {
  console.log('Mangoes and papayas are $2.79 a pound.');
} else {
  console.log(`Sorry, we are out of ${expr}.`);
}