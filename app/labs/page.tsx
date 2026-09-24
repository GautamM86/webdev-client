import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs-index">
      <h1>Labs</h1>
      <p>Name: Gautam Mahajan</p>
      <p>Section: CS5610 02</p>
      <a id="wd-github" href="https://github.com/GautamM86/webdev-client">
        My GitHub Repository
      </a>
      <ul>
        <li><Link href="/labs/lab1">Lab 1</Link></li>
        <li><Link href="/labs/lab2">Lab 2</Link></li>
        <li><Link href="/labs/lab3">Lab 3</Link></li>
        <li><Link id="wd-lab4-link" href="/labs/lab4">Lab 4</Link></li>
        <li><Link href="/labs/lab5">Lab 5</Link></li>
        <li><Link href="/Kambaz">Kambaz</Link></li>
      </ul>
    </div>
  );
}