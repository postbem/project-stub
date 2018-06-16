import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

export default (props) => ({
  block: 'App',
  content: [
    Header({ title: 'PostBEM App' }),
    Main({
      content: [
        { tag: 'p', content: 'Lorem ipsum dolor is amet.' },
        { tag: 'p', content: 'Lorem ipsum dolor is amet.' },
        {
          tag: 'button',
          attrs: {
            style: 'font-size: 32px;'
          },
          content: 'Button',
          onClick: (e) => alert('Click!')
        }
      ]
    }),
    Footer({ content: 'Powered by PostBEM.' })
  ]
});
