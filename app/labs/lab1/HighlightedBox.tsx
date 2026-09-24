function Box({ children, style, id }: { children: React.ReactNode; style?: React.CSSProperties; id?: string }) {
  return <div id={id} style={style}>{children}</div>;
}

export default function HighlightedBox() {
  return (
    <div id="wd-highlighted-boxes">
      <h4>Highlighted Boxes</h4>
      <Box style={{ backgroundColor: "lightgray", padding: "10px", marginBottom: "10px" }}>
        <span>Sample nested content</span>
      </Box>

      <Box id="wd-your-box" style={{ backgroundColor: "lightblue", padding: "15px", border: "2px solid blue", marginBottom: "10px" }}>
        <h5>My Current Goals</h5>
        <ul>
          <li>Master modular component design in React</li>
          <li>Refine block-based visual logic for Roblox modules</li>
        </ul>
      </Box>

      <Box id="wd-ai-box" style={{ backgroundColor: "mistyrose", padding: "20px", borderRadius: "8px" }}>
        <strong>Important Note:</strong>
        <p>This is a sample box containing nested HTML tags to demonstrate component composition.</p>
      </Box>
    </div>
  );
}