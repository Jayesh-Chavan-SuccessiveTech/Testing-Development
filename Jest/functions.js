const { default: axios } = require("axios");

const functions = {
  add: (x,y) => x+y,
  isNull: () => null,
  isfalsy: x => x,
  fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.data)
}

module.exports = functions;
