import LineChart from "../components/chart/LineChart";

export default function Time(props) {
  const Labels = [];
  return (
    <div className="w-full h-screen pb-[5rem] bg-zinc-200 flex flex-col justify-between items-center pt-[10rem]">
      <div className="w-[110rem] h-[40rem] bg-white p-[4rem] rounded-2xl shadow-2xl">
        <LineChart data={props.trashTimes} />
      </div>
      <div>
        {props.trashTimes.map((trashTime, index) => (
          <p key={index}>{trashTime.fields.time}</p>
        ))}
      </div>
    </div>
  );
}
