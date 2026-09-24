export default function ListTags() {
  return (
    <div id="wd-lists">
      <h4>List Tags</h4>
      <h5>Ordered List Tag</h5>
      How to make pancakes:
      <ol id="wd-pancakes">
        <li>Mix dry ingredients.</li>
        <li>Add wet ingredients.</li>
        <li>Stir to combine.</li>
        <li>Heat a skillet or griddle.</li>
        <li>Pour batter onto the skillet.</li>
        <li>Cook until bubbly on top.</li>
        <li>Flip and cook the other side.</li>
        <li>Serve and enjoy!</li>
      </ol>
      
      My favorite recipe:
      <ol id="wd-your-favorite-recipe">
        <li>Boil water.</li>
        <li>Add pasta.</li>
        <li>Cook for 10 minutes.</li>
      </ol>

      <h5>Unordered List Tag</h5>
      My favorite books (in no particular order)
      <ul id="wd-my-books">
        <li>Dune</li>
        <li>Lord of the Rings</li>
        <li>Ender&apos;s Game</li>
        <li>Red Mars</li>
        <li>The Forever War</li>
      </ul>
      
      Your favorite books (in no particular order)
      <ul id="wd-your-books">
        <li>Python Crash Course</li>
        <li>The Pragmatic Programmer</li>
        <li>Clean Code</li>
      </ul>

      <h5>HTML Tags</h5>
      <ul id="wd-ai-html-tags">
        <li>&lt;h1&gt; to &lt;h6&gt; - Headings</li>
        <li>&lt;p&gt; - Paragraph</li>
        <li>&lt;ol&gt; - Ordered List</li>
        <li>&lt;ul&gt; - Unordered List</li>
        <li>&lt;li&gt; - List Item</li>
      </ul>
    </div>
  );
}