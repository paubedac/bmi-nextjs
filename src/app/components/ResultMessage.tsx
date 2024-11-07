import { getWeightCategory } from "../_libs/bmi";
import BmiTable from "@/app/components/table/BmiTable";
import Gauge from "@/app/components/Gauge";

interface ResultMessageProps {
  bmi: number;
};

const ResultMessage: React.FC<ResultMessageProps> = ({ bmi }) => {
  const weightCategory = getWeightCategory(bmi)
  return (
      <div>
        <h2 className="text-base font-semibold leading-7 text-indigo-600">Results</h2>
        <Gauge bmi={bmi} />
        {bmi > 0 
          ? (
            <>
              <div className="text-center"><label>{`Your BMI score is ${bmi.toFixed(2)}`}</label></div>
              <div className="text-center"><label>{`You are classified as ${weightCategory}`}</label></div>
            </>
          ) : (
            <>
              <div className="text-center"><label>Please enter your height and weight</label></div>
              <div className="text-center"><label>to view your BMI</label></div>
            </>
          )
        }
        <BmiTable weightCategory={bmi > 0 ? weightCategory : ""} />
      </div>
    )
};

export default ResultMessage;