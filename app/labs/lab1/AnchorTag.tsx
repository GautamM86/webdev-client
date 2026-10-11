export default function AnchorTag() {
  return (
    <div id="wd-anchor">
      <h4>Anchor tag</h4>
      Please
      <a id="wd-lipsum" href="https://www.lipsum.com"> click here </a>
      to get dummy text<br/>

      <a id="wd-github" href="https://github.com/jannunzi">GitHub</a><br/>

      <a id="wd-your-link" href="https://react.dev"> click here </a>
      to learn React<br/>

      <a id="wd-your-github" href="https://github.com/GautamM86" target="_blank" rel="noreferrer"> click here </a>
      to navigate to your GitHub profile<br/>

      <a id="wd-ai-link" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table">MDN: table element</a>
    </div>
  );
}