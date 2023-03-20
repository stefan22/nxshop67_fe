/**
 * @Fun List HOC<Takes an array of object and a function component>
 * @param items {array}
 * @param Component {function}
 * @returns {Array}
 */

const List = ({ items, item: Item }) => {
  return (
    <ul>
      {items.map(itm => (
        <Item key={itm?.id} {...itm} />
      ))}
    </ul>
  )
}

export default List
