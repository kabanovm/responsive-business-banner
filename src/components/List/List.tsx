type ListProps = {
  items: { icon: string; text: string }[];
};

const List = ({ items }: ListProps) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.text}>{item.text}</div>
      ))}
    </div>
  );
};

export default List;
