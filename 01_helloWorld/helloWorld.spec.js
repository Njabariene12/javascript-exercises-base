const helloWorld = require('./helloWorld');

  ('Hello World', function () {
  test('says "Hello, World!"', function () {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
