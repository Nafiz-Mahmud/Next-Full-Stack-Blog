import "./nav.scss";
import ThemeToogle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";
import Image from "next/image";
import Link from "next/link";
export default function Nav() {
  return (
    <div className="nav">
      <div className="socials">
        <Image src="/facebook.png" width={24} height={24} />
        <Image src="/instagram.png" width={24} height={24} />
        <Image src="/tiktok.png" width={24} height={24} />
        <Image src="/youtube.png" width={24} height={24} />
      </div>
      <div className="logo">
        <h1>Next Blog</h1>
      </div>
      <div className="links">
        <ThemeToogle />
        <Link href="#">Homepage</Link>
        <Link href="#">Contact</Link>
        <Link href="#">About</Link>
        <AuthLinks />
      </div>
    </div>
  );
}
