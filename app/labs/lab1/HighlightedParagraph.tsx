function HighlightedParagraphComponent({ text, style, id }: { text: string; style?: React.CSSProperties; id?: string }) {
  return <p id={id} style={style}>{text}</p>;
}

export default function HighlightedParagraph() {
  return (
    <div id="wd-highlighted-paragraph">
      <h4>Highlighted Paragraphs</h4>
      <HighlightedParagraphComponent 
        text="This is a sample highlighted paragraph component from the book." 
        style={{ backgroundColor: "yellow", color: "black" }} 
      />
      
      <HighlightedParagraphComponent 
        id="wd-your-paragraph" 
        text="I am currently focusing on algorithm optimization, including Python dictionary frequency mapping." 
        style={{ backgroundColor: "blue", color: "white", padding: "5px" }} 
      />
      
      <HighlightedParagraphComponent 
        id="wd-ai-paragraph" 
        text="This paragraph demonstrates passing CSS attributes dynamically to a React component." 
        style={{ backgroundColor: "lightgreen", color: "darkgreen", border: "1px solid green" }} 
      />
    </div>
  );
}