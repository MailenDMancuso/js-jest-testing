const { fetchCallback, fetchPromise } = require("./async");

test("the data is TESTING CALLBACK", (done) => {
  const callback = (data) => {
    try {
      expect(data).toBe("TESTING CALLBACK");
      done();
    } catch (e) {
      done(e);
    }
  };

  fetchCallback(callback);
});

test("the data from the resolved promise is TESTING PROMISE", () => {
  // expect(fetchPromise()).resolves().toBe("TESTING PROMISE");
  fetchPromise().then((result) => {
    expect(result).toBe("TESTING PROMISE");
  });
});

test("the error from the rejected promise is REJECTED ERROR", () => {
  fetchPromise().catch((error) => {
    expect(error).toThrow("REJECTED ERROR");
  });
});

test("the data from the async functon is TESTING PROMISE", async () => {
  const data = await fetchPromise();
  expect(data).toBe("TESTING PROMISE");
});
