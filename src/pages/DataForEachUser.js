export default function DataForEachUser(props) {
  return (
    <div className="z-20 overflow-auto rounded-lg shadow hidden md:block flex justify-center bg-zinc-200 p-[4rem] pt-[10rem]">
      <table className="w-full">
        <thead className="bg-gray-50 border-b-2 border-gray-200">
          <tr>
            <th className="w-[30rem] p-3 text-sm font-semibold tracking-wide text-left">
              ID
            </th>
            <th className="w-[10rem] p-3 text-md font-semibold tracking-wide text-left">
              Trash Collected
            </th>
            <th className="w-[10rem] p-3 text-md font-semibold tracking-wide text-left">
              Points
            </th>
            <th className="w-[10rem] p-3 text-md font-semibold tracking-wide text-left">
              Last Edit
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {props.users.map((user, index) => (
            <tr className="bg-white">
              <td
                key={index}
                className="p-3 text-sm text-gray-700 whitespace-nowrap"
              >
                {user.fields.ID}
              </td>
              <td
                key={index}
                className="p-3 text-sm text-gray-700 whitespace-nowrap"
              >
                {user.fields.trash_collect}
              </td>
              <td
                key={index}
                className="p-3 text-sm text-gray-700 whitespace-nowrap"
              >
                {user.fields.point}
              </td>
              <td
                key={index}
                className="p-3 text-sm text-gray-700 whitespace-nowrap"
              >
                {user.fields.last_edit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
