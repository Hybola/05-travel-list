const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];
export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}
function Logo() {
  return <h1>Go Taiwan</h1>;
}
function Form() {
  function handleAdd() {}
  return (
    <div className="add-form">
      <span>What do you need for your 😍 trip?</span>
      <input placeholder="Item..."></input>
      <button onClick={handleAdd}>add</button>
    </div>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul className="list">
        <li></li>
      </ul>
      <list className="actions">sort by input order</list>
    </div>
  );
}
function Stats() {
  return (
    <div className="stats">
      <h1>You have 66 items on your list, and you already packed %</h1>
    </div>
  );
}
function Item(props) {
  return;
}
