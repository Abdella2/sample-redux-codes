const trim = (str) => str.trim();
const toLowerCase = (str) => str.toLowerCase();
const quote = (str) => `<q>${str}</q>`;
const wrapInDiv = (str) => `<div>${str}</div>`;

const result = wrapInDiv(
  quote(toLowerCase(trim('    WEL COME TO REDUX.      ')))
);

export default function showMessage() {
  return result;
}
