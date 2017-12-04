import fetchMock from 'fetch-mock';
import fetchMessage from '../fetchMessage';

fetchMock.post('*', { hello: 'world' });

fetchMessage('hello').then((data) => {
  console.log(`got data ${data}`);
});

fetchMock.restore();
