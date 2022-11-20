export default function DataForEachUser(props) {
  return (
    <div className="z-20">
      {props.users.map((user, index) => (
        <p key={index}>{user.fields.point}</p>
      ))}
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Trash Collected</th>
            <th>Points</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
