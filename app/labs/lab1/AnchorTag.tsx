export default function AnchorTag() {
  return (
    <div id="wd-anchor">
      <h4>Anchor tag</h4>
      Please
      <a id="wd-lipsum" href="https://www.lipsum.com"> click here </a>
      to get dummy text<br/>
      
      <a id="wd-your-link" href="https://react.dev"> click here </a>
      to learn React<br/>
      
      <a id="wd-your-github" href="https://github.com/GautamM86/webdev-client"> click here </a>
      to navigate to your GitHub repository<br/>

      <a id="wd-ai-link" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"> click here </a>
      for MDN documentation on the table element
    </div>
  );
}