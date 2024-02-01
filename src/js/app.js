export const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40
};

const sorting = ["name", "level"];

export default function orderByProps(targetObject, sortingTerms) {
  let targetArr = [];
  for (let prop in targetObject) {
    if (!sortingTerms.includes(prop)){
      targetArr.push({key: prop, value: targetObject[prop]});
    }
  }

  let resultArr = [];
  sortingTerms.forEach(el => {
    if (el in targetObject) {
      resultArr.push({key: el, value: targetObject[el]});
    }
  });

  targetArr.sort((a, b) => {
    if (a.key < b.key) {
      return -1;
    }
  });
  resultArr.push(...targetArr);
  return resultArr;
}

console.log(orderByProps(obj, sorting));