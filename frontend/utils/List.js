/**
 *  @fn List -{Higher Order Component}
 *  It renders a list of items using  provided List component
 *  @params - it takes in two props 'items' {Array} of items to be rendered and 'item' which is the component
 *  to be used to render each item
 *
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
