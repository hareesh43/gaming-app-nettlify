import Link from "next/link";
import Image from "next/image";

export default function Navbar({ children }) {
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
            <Link href="/guides">Guids</Link>
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
