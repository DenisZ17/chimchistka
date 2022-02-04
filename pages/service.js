import Header from "../components/header";
import Footer from "../components/footer";
import { useState } from "react";

function Service() {
  const [users, setUsers] = useState([
    { id: 1, name: "denis" },
    { id: 2, name: "kiril" },
  ]);
  return (
    <div>
      <h2>Наши услуги</h2>
      <Header></Header>
      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
      <Footer firstname="Denis"></Footer>
    </div>
  );
}

export default Service;
