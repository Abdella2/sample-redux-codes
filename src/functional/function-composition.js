import _ from 'lodash/fp';

const trim = (str) => str.trim();
const toLowerCase = (str) => str.toLowerCase();
const quote = (str) => `<q>${str}</q>`;
const wrapInDiv = (str) => `<div>${str}</div>`;

let result = wrapInDiv(
  quote(toLowerCase(trim('    WEL COME TO REDUX.      ')))
);

const composer = _.compose(wrapInDiv, quote, toLowerCase, trim);
result += composer('   USING LODASH COMPOSE FUNCTION: WEL COME TO REDUX.  ');

const pipe = _.pipe(trim, toLowerCase, quote, wrapInDiv);
result += pipe('   USING LODASH PIPE FUNCTION: WEL COME TO REDUX.  ');

export default function showMessage() {
  return result;
}
