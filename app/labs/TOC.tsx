import Link from "next/link";

export default function TOC() {
  return (
    <ul id="wd-toc">
      <li><Link href="/labs">Labs</Link></li>
      <li><Link href="/labs/lab1">Lab 1</Link></li>
      <li><Link href="/labs/lab2">Lab 2</Link></li>
      <li><Link href="/labs/lab3">Lab 3</Link></li>
      <li><Link href="/Kambaz">Kambaz</Link></li>
      <li id="wd-github"><Link href="https://github.com/GautamM86/webdev-client">GitHub</Link></li>
      
      {/* On your own */}
      <li>Gautam Mahajan - "Building modular components one at a time."</li>
      
      {/* With AI */}
      <li><Link id="wd-toc-book-link" href="https://webdev-client.vercel.app/book/ch1">Chapter 1</Link></li>
    </ul>
  );
}