import "./card_list.scss";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";
export default function CardList() {
  return (
    <div className="card_list">
      <h1 className="title">Recent Posts</h1>
      <div className="posts">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Pagination />
      </div>
    </div>
  );
}
