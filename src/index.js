import postbem from 'postbem';
import render from 'postbem-dom-render';

import App from './components/App/App';

const processor = postbem();

processor.process(App(), { render })
  .then(result => result.content)
  .then(tree => {
    document.getElementById('root').append(tree);
  });
