import Card from "@/app/components/Card";
import Limitations from "@/app/data/limitations";

export default function LimitationsPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Body Mass Index</h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">Limitations of BMI</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {Limitations.map(limitation => (
              <Card
                key={limitation.title}
                title={limitation.title} 
                description={limitation.description}
                image={limitation.image}
              />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}