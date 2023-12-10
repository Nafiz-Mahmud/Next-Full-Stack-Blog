import Link from "next/link";
import Image from "next/image";
import "./category_list.scss";
export default function CategoryList() {
  return (
    <div className="category">
      <h1 className="title">Popular Categories</h1>
      <div className="categories">
        <Link href="/blog?cat=style" className="singleCategory">
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className="img"
          />
          Style
        </Link>
        <Link href="/blog?cat=food" className="singleCategory">
          <Image
            src="/food.png"
            alt=""
            width={32}
            height={32}
            className="img"
          />
          Food
        </Link>
        <Link href="/blog?cat=travel" className="singleCategory">
          <Image
            src="/travel.png"
            alt=""
            width={32}
            height={32}
            className="img"
          />
          Travel
        </Link>
        <Link href="/blog?cat=culture" className="singleCategory">
          <Image
            src="/culture.png"
            alt=""
            width={32}
            height={32}
            className="img"
          />
          Culture
        </Link>
        <Link href="/blog?cat=coding" className="singleCategory">
          <Image
            src="/coding.png"
            alt=""
            width={32}
            height={32}
            className="img"
          />
          Coding
        </Link>
      </div>
    </div>
  );
}
