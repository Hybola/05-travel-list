export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  const numItems = items.length;
  const numPacked = items.filter((el) => el.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  console.log(percentage, numPacked, numItems);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You've got everything! ready to go ✈️ "
          : `💼 You have ${numItems} ${
              numItems > 1 ? "items" : "item"
            } on your list,
        and you already packed ${numPacked} (${percentage})%`}
      </em>
    </footer>
  );
}
