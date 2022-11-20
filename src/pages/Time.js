import LineChart from "../components/chart/LineChart";

export default function Time(props) {
  const dataLabel = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  return (
    <div className="w-full h-screen pb-[5rem] bg-zinc-200 flex flex-col justify-between items-center pt-[14rem]">
      <div className="w-[110rem] h-[40rem] bg-white p-[4rem] rounded-2xl shadow-2xl">
        <LineChart data={props.trashTimes} dataLabel={dataLabel} />
        <p className="text-lg pt-[2rem]">
          This graph illustrates trash collected in each one-hour time interval
          during the day
        </p>
        <p className="text-lg">
          Scale automatically adjusted according to the maximum number of trash
          collected in one-hour interval
        </p>
      </div>
      <div>
        {/* {props.trashTimes.map((trashTime, index) => (
          <p key={index}>
            {trashTime.fields.time[11] +
              trashTime.fields.time[12] +
              ":" +
              trashTime.fields.time[14] +
              trashTime.fields.time[15]}
            {trashTime.fields.time}
          </p>
        ))} */}
        {props.trashTimes.map((trashTime) => {
          if (trashTime.fields.time[11] + trashTime.fields.time[12] === "00") {
            dataLabel[0] += 1;
          } else if (
            trashTime.fields.time[11] + trashTime.fields.time[12] ===
            "01"
          ) {
            dataLabel[1] += 1;
          } else if (
            trashTime.fields.time[11] + trashTime.fields.time[12] ===
            "02"
          ) {
            dataLabel[2] += 1;
          } else if (
            trashTime.fields.time[11] + trashTime.fields.time[12] ===
            "03"
          ) {
            dataLabel[3] += 1;
          } else if (
            trashTime.fields.time[11] + trashTime.fields.time[12] ===
            "04"
          ) {
            dataLabel[4] += 1;
          } else if (
            trashTime.fields.time[11] + trashTime.fields.time[12] ===
            "05"
          ) {
            dataLabel[5] += 1;
          } else if (
            trashTime.fields.time[11] + trashTime.fields.time[12] ===
            "06"
          ) {
            dataLabel[6] += 1;
          } else if (
            trashTime.fields.time[11] + trashTime.fields.time[12] ===
            "07"
          ) {
            dataLabel[7] += 1;
          } else if (
            trashTime.fields.time[11] + trashTime.fields.time[12] ===
            "08"
          ) {
            dataLabel[8] += 1;
          } else if (
            trashTime.fields.time[11] + trashTime.fields.time[12] ===
            "09"
          ) {
            dataLabel[9] += 1;
          } else if (
            trashTime.fields.time[11] + trashTime.fields.time[12] ===
            "10"
          ) {
            dataLabel[10] += 1;
          }
        })}
      </div>
    </div>
  );
}
