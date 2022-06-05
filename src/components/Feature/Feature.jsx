import React, { useEffect } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";
import { feature } from "../../config/Config";
const config = {
  id: 0, // important
  percent: 50,
  colorSlice: "#E91E63",
  size: 200,
  stroke: 3,
};
function Feature() {
  const [update, setUpdate] = React.useState(config);
  useEffect(() => {
    const interval = setInterval(() => {
      setUpdate({
        ...config,
        id: 0, // we indicate which component we want to change
        percent: 70,
        colorSlice: "#324ace",
        fontColor: "#324ace",
        fontSize: "1.2rem",
        fontWeight: 400,
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const newObject = { ...config, ...update };
  return (
    <div className="shadow-xl p-3 rounded-lg">
      <div className="top flex justify-between item-center ">
        <h1 className="title text-base  font-medium">Total Revenue</h1>
        <MoreVertIcon />
      </div>
      <div className="bottom flex flex-col items-center justify-center">
        <div className="featuredCHarts ">
          <CircularProgressBar {...newObject} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc text-center">
          Previous transactions processing. Last payments may not be included.
        </p>
      </div>
      <div className="summery flex justify-between">
        {feature.map((item,id)=>{
                return (
                        <div className="item flex flex-col items-center py-4 justify-center">
                        <div className="itemTitle font-bold">{item.name}</div>
                        <div className={`itemResult mt-4 flex items-center ${item.color}`}>
                        <div fontSize="small">{item.icon}</div>
                        <div className="resultAmount font-bold ">$12.4k</div>
                        </div>
                        
                      </div>
                )
        })}
      </div>
    </div>
  );
}

export default Feature;
