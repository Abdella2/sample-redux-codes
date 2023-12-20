import _ from 'lodash/fp';

const trim = (str) => str.trim();
const toLowerCase = (str) => str.toLowerCase();
// const wrap = (type, str) => `<${type}>${str}</${type}>`;
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;
const prefix = (pref) => (str) => `${pref}: ${str}`;

const pipe = _.pipe(
  trim,
  toLowerCase,
  prefix('USING LODASH PIPE FUNCTION'),
  wrap('span'),
  wrap('div')
);
const result = pipe('   WEL COME TO REDUX.  ');

export default function showMessage() {
  console.log(result);
  return result;
}
