export default data => {
  let pairs = {};
  for (let pair of data) {
    if (!pairs[pair.quote]) pairs[pair.quote] = {};
    pairs[pair.quote][pair.base] = !pair.disabled; // pair[deposit][receive]
  }

  return pairs;
};
