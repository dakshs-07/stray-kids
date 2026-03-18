import Image from "next/image";

function MemberTable({ data }) {
  return (
    <div className="overflow-x-auto flex flex-col justify-center items-center">
      <table className="w-full border-collapse border border-gray-300 bg-gray-700 text-white">
        <tbody>
          {data?.map((row, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="font-semibold p-3 bg-gray-500 text-white w-1/3 tracking-wide">
                {row.label}
              </td>
              <td className="p-3 tracking-wide">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MemberTable;
