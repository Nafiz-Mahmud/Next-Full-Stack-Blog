import Featured from "./components/featured/Featured";
import CategoryList from "./components/categoryList/CategoryList";
import CardList from "./components/cardList/CardList";
import Menu from "./components/menu/Menu";
import Pagination from "./components/pagination/Pagination";
export default function Home() {
  return (
    <div>
      <Featured />
      <CategoryList />
      <div className="content">
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
