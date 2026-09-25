export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />

      {/* On your own */}
      Your image:
      <br />
      <img
        id="wd-your-image"
        src="/images/SD.jpg"
        width="200px"
        alt="This is back from my California trip, I loved San Diego the most, especially La Jolla Cove, where got to see Sea lions and seals out in open and experience wildlife in the Safari too."
      />
      <br />

      {/* With AI */}
      <img
        id="wd-ai-image"
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        width="200px"
        alt="React logo"
      />
    </div>
  );
}