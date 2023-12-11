const mockFn = jest.fn();

describe('Example test', () => {
  test('mock function successfully fired', () => {
    mockFn();
    expect(mockFn).toHaveBeenCalled();
  });
});
