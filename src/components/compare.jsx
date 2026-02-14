import React from "react";
import { CircleCheck, CircleX } from "lucide-react";

export default function Compare() {
  
  const headings = ["Features", "HSC Maths Hub", "THSC", "Bored of Studies", "Studocu"];
  const rows = [{feature: "Place Holder 1", getCrackedHasFeature: true, NeetCodeHasFeature: false, LeetCodeHasFeature: false, AlgoExpertHasFeature: false},
                {feature: "Place Holder 2", getCrackedHasFeature: true, NeetCodeHasFeature: false, LeetCodeHasFeature: false, AlgoExpertHasFeature: false},
                {feature: "Place Holder 3", getCrackedHasFeature: true, NeetCodeHasFeature: false, LeetCodeHasFeature: false, AlgoExpertHasFeature: false},
                {feature: "Place Holder 4", getCrackedHasFeature: true, NeetCodeHasFeature: false, LeetCodeHasFeature: false, AlgoExpertHasFeature: false},
                {feature: "Place Holder 5", getCrackedHasFeature: true, NeetCodeHasFeature: false, LeetCodeHasFeature: false, AlgoExpertHasFeature: false},
                {feature: "Place Holder 6", getCrackedHasFeature: true, NeetCodeHasFeature: false, LeetCodeHasFeature: false, AlgoExpertHasFeature: false},
                {feature: "Place Holder 7", getCrackedHasFeature: true, NeetCodeHasFeature: false, LeetCodeHasFeature: false, AlgoExpertHasFeature: false},
                {feature: "Place Holder 8", getCrackedHasFeature: true, NeetCodeHasFeature: false, LeetCodeHasFeature: false, AlgoExpertHasFeature: false},
                {feature: "Place Holder 9", getCrackedHasFeature: true, NeetCodeHasFeature: false, LeetCodeHasFeature: false, AlgoExpertHasFeature: false},
                {feature: "Place Holder 10", getCrackedHasFeature: true, NeetCodeHasFeature: false, LeetCodeHasFeature: false, AlgoExpertHasFeature: false}
  ];

  const renderCell = (value) => {
    if (typeof(value) === "boolean") {
      return value ? <CircleCheck className="text-green-500"/> : <CircleX className="text-gray-400"/>;
    }

    return null;
  };

  return (
    <section id="compare" className="relative min-h-screen overflow-hidden px-20">
      <div className="relative w-full px-14">
        <div className="mx-auto max-w-5xl mb-30">
          <p className="text-center header-text">How we Compare</p>
          <p className="text-center paragraph-text">See what makes HSC Maths Hub different from other HSC maths platforms</p>
        </div>
        <div className="overflow-hidden rounded-xl">
          <div className="relative"></div>
            <table className="w-full text-sm border-red-500">
              <thead>
                <tr>
                  {headings.map(heading => ( <th className="paragraph-text h-10 px-5 py-6 bg-secondary">{heading}</th>))}
                </tr>
              </thead>
              <tbody>
                {rows.map(row => ( <tr className="paragraph-text h-10 px-5 py-6 bg-secondary border-t border-white/20">
                  <td><div className="flex justify-center py-6">{row.feature}</div></td>
                  <td><div className="flex justify-center">{renderCell(row.getCrackedHasFeature)}</div></td>
                  <td><div className="flex justify-center">{renderCell(row.NeetCodeHasFeature)}</div></td>
                  <td><div className="flex justify-center">{renderCell(row.LeetCodeHasFeature)}</div></td>
                  <td><div className="flex justify-center">{renderCell(row.AlgoExpertHasFeature)}</div></td>
                </tr>))}
              </tbody>
            </table>
        </div>
      </div>
    </section>
  );
};
