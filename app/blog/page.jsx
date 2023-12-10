import "./blog.scss";
import CardList from "../components/cardList/CardList";
import Menu from "../components/menu/Menu";
export default function BlogPage() {
  return (
    <div className="blog_page">
      <h1 className="blog_page_title">Style Blog</h1>
      <div className="content">
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
