export default function Images() {
  return (
    <div id="wd-image">
      <h4>Image Tag</h4>
      Loading an image from the internet:
      <br />
      <img id="wd-starship"
        width="400px"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
        alt="Starship"
      />
      <br />
      Loading a local image:
      <br />
      <img id="wd-local-image" src="/teslabot.jpg" height="200px" alt="Local Teslabot" />
      <br />

      {/* On your own */}
      Your image:
      <br />
      <img id="wd-your-image" src="/next.svg" width="200px" alt="My Image" />
      <br />

      {/* With AI */}
      AI image:
      <br />
      <img id="wd-ai-image" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="200px" alt="React Logo" />
    </div>
  );
}