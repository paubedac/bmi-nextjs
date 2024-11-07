import Card from "@/app/components/Card";
import Advices from "@/app/data/advices";

export default function BMI() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Body Mass Index</h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">Everything you need to know about BMI</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            BMI is a measurement of a person&apos;s leanness or corpulence based on their height and weight, and is intended to quantify tissue mass. 
            It is widely used as a general indicator of whether a person has a healthy body weight for their height. 
            Specifically, the value obtained from the calculation of BMI is used to categorize whether a person is underweight, normal weight, overweight, or obese depending on what range the value falls between. 
            These ranges of BMI vary based on factors such as region and age, and are sometimes further divided into subcategories such as severely underweight or very severely obese. 
            Being overweight or underweight can have significant health effects, so while BMI is an imperfect measure of healthy body weight, it is a useful indicator of whether any additional testing or action is required. 
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {Advices.map(advice => (
              <Card
                key={advice.title}
                title={advice.title}
                description={advice.description}
                image={advice.image}
              />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}