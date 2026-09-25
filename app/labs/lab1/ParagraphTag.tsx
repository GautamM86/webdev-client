export default function ParagraphTag() {
  return (
    <div id="wd-p-tag">
      <h4>Paragraph Tag</h4>
      <p id="wd-p-1">
        This is a paragraph. We often separate a long set of sentences with
        vertical spaces to make the text easier to read. Browsers ignore
        vertical white spaces and render all the text as one single set of
        sentences. To force the browser to add vertical spacing, wrap the
        paragraphs you want to separate with the paragraph tag
      </p>
      <p id="wd-p-2">
        This is the first paragraph. The paragraph tag is used to format
        vertical gaps between long pieces of text like this one.
      </p>
      <p id="wd-p-3">
        This is the second paragraph. Even though there is a deliberate white
        gap between the paragraph above and this paragraph, by default
        browsers render them as one contiguous piece of text as shown here on
        the right.
      </p>
      <p id="wd-p-4">
        This is the third paragraph. Wrap each paragraph with the paragraph
        tag to tell browsers to render the gaps.
      </p>
      
      {/* On your own */}
      <p id="wd-p-your-1">
        Hi everyone, I am Gautam and I am from India. I completed my Bachelors
        in Computer and Communication there, worked at Bank of America for two
        years, then came to the States for my Masters. Outside of this I love
        to play basketball and explore new food places. And most importantly I
        love dogs — like, really love them.
      </p>
      
      <p id="wd-p-your-2">
        This year I did an AI Scientist co-op in the spring and an SDE
        internship in the summer. All my experience has been in AI, backend,
        and cloud, and I have never worked on frontend much, so from this
        course I would like to get hands-on experience with frontend and delve
        into a newer topic.
      </p>


      {/* With AI */}
      <p id="wd-ai-p">
        Wrapping text in paragraph tags creates vertical spacing because
        browsers apply default margin-top and margin-bottom CSS rules to
        block-level HTML elements.
      </p>
    </div>
  );
}