import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import ProgressProvider from "../components/ui/ProgressProvider";

export default function BinCapacity(props) {
  const percentageCan = props.percentages[0].fields.Notes * 100;
  const percentageBottle = props.percentages[1].fields.Notes * 100;
  const rgbCan = [68, 214, 44];
  const rgbBottle = [68, 214, 44];
  if ((percentageCan > 40) & (percentageCan < 70)) {
    rgbCan[0] = 255;
    rgbCan[1] = 135;
    rgbCan[2] = 132;
  } else if (percentageCan > 70) {
    rgbCan[0] = 255;
    rgbCan[1] = 1;
    rgbCan[2] = 1;
  }
  if ((percentageBottle > 40) & (percentageBottle < 70)) {
    rgbBottle[0] = 255;
    rgbBottle[1] = 135;
    rgbBottle[2] = 132;
  } else if (percentageBottle > 70) {
    rgbBottle[0] = 255;
    rgbBottle[1] = 1;
    rgbBottle[2] = 1;
  }

  return (
    <div className="w-full h-full pb-[5rem] bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1800px] m-auto pt-[10rem] gap-16">
        <div className="flex flex-col justify-between md:items-start w-full h-[42rem] px-[10rem] py-8 bg-white shadow-2xl rounded-2xl">
          <h1 className="pb-3 text-3xl md:text-5xl font-bold">
            Can's Bin Capacity
          </h1>
          <ProgressProvider valueStart={0} valueEnd={percentageCan}>
            {(value) => (
              <CircularProgressbar
                value={value}
                text={`${percentageCan}%`}
                styles={{
                  root: {},
                  path: {
                    // Path color
                    stroke: `rgba(${rgbCan[0]}, ${rgbCan[1]}, ${rgbCan[2]}, ${
                      percentageCan / 100
                    })`,
                    strokeLinecap: "round",
                    transition: "stroke-dashoffset 1.5s ease 0s",
                    transformOrigin: "center center",
                  },
                  trail: {
                    stroke: "#d6d6d6",
                    strokeLinecap: "butt",
                    transform: "rotate(0.25turn)",
                    transformOrigin: "center center",
                  },
                  text: {
                    fill: `rgba(${rgbCan[0]}, ${rgbCan[1]}, ${rgbCan[2]} `,
                    fontSize: "16px",
                  },
                  background: {
                    fill: "#3e98c7",
                  },
                }}
              />
            )}
          </ProgressProvider>
          {percentageCan > 50 ? (
            <p className="text-2xl">
              Please change trash bin, only
              <text className="text-red-600"> {100 - percentageCan}%</text>{" "}
              capacity left
            </p>
          ) : (
            <p className="text-2xl">
              There is still room,{" "}
              <text className="text-green-600"> {100 - percentageCan}%</text>{" "}
              capacity available
            </p>
          )}
        </div>
        <div className="flex flex-col justify-between md:items-start w-full h-[42rem] px-[10rem] py-8 bg-white shadow-2xl rounded-2xl">
          <h1 className="pb-3 text-3xl md:text-5xl font-bold">
            Bottle's Bin Capacity
          </h1>
          <ProgressProvider valueStart={0} valueEnd={percentageBottle}>
            {(value) => (
              <CircularProgressbar
                value={value}
                text={`${percentageBottle}%`}
                styles={{
                  root: {},
                  path: {
                    // Path color
                    stroke: `rgba(${rgbBottle[0]}, ${rgbBottle[1]}, ${
                      rgbBottle[2]
                    }, ${percentageBottle / 100})`,
                    strokeLinecap: "round",
                    transition: "stroke-dashoffset 1.5s ease 0s",
                    transformOrigin: "center center",
                  },
                  trail: {
                    stroke: "#d6d6d6",
                    strokeLinecap: "butt",
                    transform: "rotate(0.25turn)",
                    transformOrigin: "center center",
                  },
                  text: {
                    fill: `rgba(${rgbBottle[0]}, ${rgbBottle[1]}, ${rgbBottle[2]} `,
                    fontSize: "16px",
                  },
                  background: {
                    fill: "#3e98c7",
                  },
                }}
              />
            )}
          </ProgressProvider>
          {percentageBottle > 50 ? (
            <p className="text-2xl">
              Please change trash bin, only
              <text className="text-red-600">
                {" "}
                {100 - percentageBottle}%
              </text>{" "}
              capacity left
            </p>
          ) : (
            <p className="text-2xl">
              There is still room,{" "}
              <text className="text-green-600"> {100 - percentageBottle}%</text>{" "}
              capacity available
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
