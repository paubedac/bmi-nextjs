import { useState, FormEvent } from 'react';
import SubmitButton from '@/app/components/buttons/SubmitButton';
import InputForm from '@/app/components/form/InputForm';
import UnitSelector from '@/app/components/form/UnitSelector';
import { bmiCalculator } from "@/app/_libs/bmi";
import { getHeightUnits, getWeightUnits } from '@/app/_libs/units';
import { UNITS } from '@/app/constants/units';

interface Props {
    setBmi: (bmi: number) => void;
}

const BmiForm = ({ setBmi }: Props) => {
  const [unit, setUnit] = useState(UNITS.Metric)
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBmi(bmiCalculator(unit, height, weight));
  }

  return (
    <form onSubmit={handleSubmit}>
      <UnitSelector selectedUnit={unit} onSelectUnit={setUnit} />
      <InputForm label={`Height (${getHeightUnits(unit)})`} value={height} onChange={setHeight} />
      <InputForm label={`Weight (${getWeightUnits(unit)})`} value={weight} onChange={setWeight} />
      <SubmitButton label={"Calculate BMI"} />
    </form>
  );
}

export default BmiForm;