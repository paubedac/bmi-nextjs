import RadioInputFom from "@/app/components/form/RadioInputForm";
import { UNITS } from "@/app/constants/units";

interface UnitSelectorProps {
  selectedUnit: UNITS;
  onSelectUnit: (unit: UNITS) => void;
};

const UnitSelector: React.FC<UnitSelectorProps> = ({ selectedUnit, onSelectUnit }) => {
  return (
      <div className="flex gap-6 flex-wrap items-stretch mt-4">
        <RadioInputFom
          id="metric"
          name="metric"
          label="Metric"
          value={UNITS.Metric}
          checked={
            selectedUnit ===
            UNITS.Metric
          }
          onChange={() =>
            onSelectUnit(
              UNITS.Metric
            )
          }
        />
        <RadioInputFom
          id="imperial"
          name="imperial"
          label="Imperial"
          value={UNITS.Imperial}
          checked={
            selectedUnit ===
            UNITS.Imperial
          }
          onChange={() =>
            onSelectUnit(
              UNITS.Imperial
            )
          }
        />
      </div>
    );
};

export default UnitSelector;
