test("Mock implementation of a basic function", () => {
  const mockFn = jest.fn((x) => 42 + x);
  expect(mockFn(1)).toBe(43);
  expect(mockFn).toHaveBeenCalledWith(1);
});

test("Spying on a method of an object", () => {
  const video = {
    play() {
      return true;
    },
  };

  const spy = jest.spyOn(video, "play");
  video.play();

  expect(spy).toHaveBeenCalled();
  spy.mockRestore();
});
