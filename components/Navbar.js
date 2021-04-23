import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import AuthContext from "../stores/authContext";

export default function Navbar({ children }) {
  const { user, login } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="container">
      <nav>
        <Image src="/rupee.png" width={50} height={50} />
        <h1>Gaming Vibes</h1>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/guides">Guides</Link>
          </li>
          <li onClick={login} className="btn">
            Login/Signup
          </li>
        </ul>
      </nav>
      <div className="banner">
        <Image src="/banner.png" width={966} height={270} />
      </div>
      <div>{children}</div>
    </div>
  );
}
