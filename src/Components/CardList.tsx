import users from "../data";
import Card from "./Card";

export default function CardList() {
  return (
    <div>
      {users.map((data) => {
        return (
          <div>
            <Card id={data.id} name={data.name} status={data.status} />
          </div>
        );
      })}
    </div>
  );
}
