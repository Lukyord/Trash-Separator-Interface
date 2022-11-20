export default function Time(props) {
  return (
    <div>
      {props.trashTimes.map((trashTime, index) => (
        <p key={index}>{trashTime.fields.time}</p>
      ))}
    </div>
  );
}
