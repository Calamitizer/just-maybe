import test from 'ava';

const fn = async () => Promise.resolve('Testing...');

test('Test test', async t => {
  t.is(await fn(), 'Testing...');
});
