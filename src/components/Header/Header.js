export default (props) => ({
  block: 'Header',
  content: [
    { elem: 'Logo', tag: 'img', src: './logo.svg' },
    { elem: 'Title', content: props.title }
  ]
});
