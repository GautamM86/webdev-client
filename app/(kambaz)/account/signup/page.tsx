import Link from "next/link";

export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input className="wd-username" placeholder="username" /> <br />
      <input className="wd-password" placeholder="password" type="password" /> <br />
      <input className="wd-password-verify" placeholder="verify password" type="password" /> <br />
      <Link id="wd-signup-btn" href="/account/profile">
        Sign up
      </Link> <br />
      <Link id="wd-signin-link" href="/account/signin">
        Sign in
      </Link>
    </div>
  );
}