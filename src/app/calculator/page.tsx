"use client"
import { useState } from 'react';
import BmiForm from '@/app/components/form/BmiForm';
import ResultMessage from '@/app/components/ResultMessage';

export default function Calculator() {
  const [bmi, setBmi] = useState(0);

  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">BMI Calculator</h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Enter your details 
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                With your height and weight we will be able to determine your BMI
              </p>
              <BmiForm setBmi={setBmi}/>
            </div>
          <ResultMessage bmi={bmi} />
        </div>
      </div>
    </div>
  );
}
