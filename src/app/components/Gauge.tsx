import { bmiToGauge } from "@/app/_libs/bmi";
import { GAUGE_CATEGORIES } from "@/app/constants/gauge";

interface Props {
  bmi: number;
}

const Gauge = ({bmi}: Props) => {
    return (
      <div className="py-0 px-4">
          <div className="lg:max-w-[356px] md:max-w-[516px] max-w-[343px] mx-auto">
          <div className="mx-auto bg-white px-3 py-2 rounded">
            <div className="relative flex aspect-[2] items-center justify-center overflow-hidden rounded-t-full bg-white">
              {GAUGE_CATEGORIES.map(gaugeCategory => (
                <div
                  key={gaugeCategory.name}
                  className={`absolute
                    top-0 
                    aspect-square 
                    w-full 
                    ${gaugeCategory.angle}
                    bg-gradient-to-tr 
                    from-transparent 
                    from-50% 
                    ${gaugeCategory.color} 
                    to-50%
                    transition-transform duration-500`
                  }
                />
              ))}
              <div className="absolute top-1/4 flex aspect-square w-3/4 justify-center rounded-full bg-blue-100" />
              {bmi > 0 ?
                <div
                  className={`absolute w-full h-full [clip-path:polygon(50%_0,_50%_0,_52%_100%,_48%_100%)] rotate-0 origin-[bottom_center] animate-[rotate_2s_ease-in-out] bg-slate-800`}
                  style={{rotate: `calc(${bmiToGauge(bmi)})`}}
                /> :
                <div
                  className={`absolute w-full h-full [clip-path:polygon(50%_0,_50%_0,_52%_100%,_48%_100%)] rotate-0 origin-[bottom_center] animate-[rotate_2s_ease-in-out] bg-slate-800`}
                />
              }
            </div>
          </div>
        </div>
      </div>
  );
}

export default Gauge;