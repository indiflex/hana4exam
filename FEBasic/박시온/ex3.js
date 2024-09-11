Array.prototype.sortBy = function (sortProp = '') {
  sortProp
    .split(',')
    .map((kd) => {
      const temp = kd.split(':');
      return [temp[0], !temp[1] || temp[1] === 'asc' ? 1 : -1];
    })
    .reverse()
    .forEach(([k, d]) => this.sort((a, b) => (a[k] > b[k] ? d : -d)));
  return this;
};
