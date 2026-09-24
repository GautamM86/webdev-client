export default function ParagraphTag() {
  return (
    <div id="wd-p-tag">
      <h4>Paragraph Tags</h4>
      <p id="wd-p-1">
        This is a paragraph. We often separate a long set of sentences with vertical spaces to make the text easier to read. Browsers ignore vertical white spaces and render all the text as one single set of sentences. To force the browser to add vertical spacing, wrap the paragraphs you want to separate with the paragraph tag.
      </p>
      <p id="wd-p-2">
        This is the first paragraph. The paragraph tag is used to format the appearance of a continuous set of sentences. Of course, the most common formatting is to add vertical space.
      </p>
      <p id="wd-p-3">
        This is the second paragraph. Even though there is a deliberate white gap between the paragraph above and this paragraph, by default browsers render them as one contiguous piece of text as shown here on the right.
      </p>
      <p id="wd-p-4">
        This is the third paragraph. Wrap each paragraph with the paragraph tag to tell browsers to render the gaps.
      </p>
      
      <p id="wd-p-your-1">This is my first personal paragraph for the assignment.</p>
      <p id="wd-p-your-2">This is my second personal paragraph for the assignment.</p>

      <p id="wd-ai-p">
        Wrapping text in paragraph tags creates vertical spacing because browsers apply default margin-top and margin-bottom CSS rules to block-level HTML elements.
      </p>
    </div>
  );
}