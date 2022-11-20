export default function Trash(props) {
  let totalTrash = 0;
  props.users.map((user) => {
    totalTrash += user.fields.trash_collect;
  });
  return (
    <h1 className="py-3 text-5xl md:text-[20rem] font-bold">{totalTrash}</h1>
  );
}
