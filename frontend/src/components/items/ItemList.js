import Item from "./Item";

function ItemList(props) {
  const content = props.data.map((item) => (
    <Item data={item} key={item.id} operationOption={props.operationOption} />
  ));

  return content;
}

export default ItemList;
