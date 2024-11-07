import { WEIGHT_CATEGORIES } from "@/app/constants/units";
import { ClassNames } from "@/app/_libs/classes";

interface Props {
  weightCategory: string;
}

const BmiTable = ({ weightCategory }: Props) => {
  return (
    <div className="relative overflow-x-auto mt-2">
      <table className="w-full text-sm text-left rtl:text-right text-gray-900 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              BMI
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className={ClassNames(
              weightCategory === WEIGHT_CATEGORIES.Underweight.name ? "bg-yellow-400" :"bg-white",
              "border-b dark:bg-gray-800 dark:border-gray-700"
            )}
          >
            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {`< ${WEIGHT_CATEGORIES.Underweight?.end}`}
            </td>
            <td className="px-6 py-4">
              {WEIGHT_CATEGORIES.Underweight.name}
            </td>
          </tr>
          <tr
            className={ClassNames(
              weightCategory === WEIGHT_CATEGORIES.Normal.name ? "bg-green-400" :"bg-white",
              "border-b dark:bg-gray-800 dark:border-gray-700"
            )}
          >
          <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {`${WEIGHT_CATEGORIES.Normal.start} - ${WEIGHT_CATEGORIES.Normal.end}`}
          </td>
          <td className="px-6 py-4">
            {WEIGHT_CATEGORIES.Normal.name}
            </td>
          </tr>
          <tr
            className={ClassNames(
              weightCategory === WEIGHT_CATEGORIES.Overweight.name ? "bg-orange-400" :"bg-white",
              "border-b dark:bg-gray-800 dark:border-gray-700"
            )}
          >
            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {`${WEIGHT_CATEGORIES.Overweight.start} - ${WEIGHT_CATEGORIES.Overweight.end}`}
            </td>
            <td className="px-6 py-4">
              {WEIGHT_CATEGORIES.Overweight.name}
            </td>
          </tr>
          <tr
            className={ClassNames(
              weightCategory === WEIGHT_CATEGORIES.Obese.name ? "bg-red-600" :"bg-white",
              "border-b dark:bg-gray-800 dark:border-gray-700"
            )}
          >
            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {`> ${WEIGHT_CATEGORIES.Obese.start}`}
            </td>
            <td className="px-6 py-4">
              {WEIGHT_CATEGORIES.Obese.name}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BmiTable;