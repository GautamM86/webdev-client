export default function ForegroundColors() {
  return (
    <div id="wd-css-colors">
      <h2>Colors</h2>
      <h3 className="wd-fg-color-blue">Foreground color</h3>
      <p className="wd-fg-color-red">
        The text in this paragraph is red but{" "}
        <span className="wd-fg-color-green">this text is green</span>
      </p>
      <p className="wd-fg-color-green">
        As an example, this sentence starts green,{" "}
        <span className="wd-fg-color-red">turns red</span>, and ends green again
      </p>
      <p id="wd-ai-fg" className="wd-fg-color-blue">
        Sample blue paragraph with{" "}
        <span className="wd-fg-color-black">a black span</span>
      </p>
    </div>
  );
}