const fetchCallback = (cb) => {
  setTimeout(() => {
    // calls the cb with the result - simulates api call
    cb("TESTING CALLBACK");
  }, 3000);
};

const fetchPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("TESTING PROMISE"), 1000);
  });
};

module.exports = { fetchCallback, fetchPromise };
