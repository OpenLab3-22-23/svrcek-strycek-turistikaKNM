import { Link, useLocation, useParams } from "react-router-dom";
import * as MdIcons from "react-icons/md";
import Navbar from "../components/Navbar";

export default function VillageWithHikes() {
  const { id, villagename } = useParams();
  const { state } = useLocation();

  return (
    <>
      <Navbar />
      <div>
        <div className="my-10">
          <div className="container flex flex-col justify-center bg-[#060b26] rounded-3xl py-10">
            <img src={state.erbUrl} alt="erb dediny" />
            <h2 className="text-6xl text-white mt-5">
              {villagename}
            </h2>
          </div>
        </div>
        <div className="container flex justify-center mx-auto">
          <div className="flex flex-col">
            <div className="w-full">
              <div className="border-b border-gray-200 shadow">
                <table className="divide-y divide-green-400 ">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="px-6 py-2 text-l text-black">Túra </th>
                      <th className="px-6 py-2 text-l text-black">Čas </th>
                      <th className="px-6 py-2 text-l text-black">
                        Nadmorská Výška
                      </th>
                      <th className="px-6 py-2 text-l text-black">
                        Vzdialenosť
                      </th>
                      <th className="px-6 py-2 text-l text-black">
                        Navštíviť
                      </th>
                    </tr>
                  </thead>
                  {state.hikes.map((hike) => (
                    <tbody className="bg-gray-100 divide-y divide-gray-300">
                      <tr className="whitespace-nowrap">
                        <td className="px-6 py-4">
                          <div className="text-xl text-gray-900">
                            {hike.name}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-xl text-gray-500">
                            {hike.time}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-xl text-gray-500">
                          {hike.altitude} m.n.m
                        </td>
                        <td className="px-6 py-4 text-xl text-gray-500">
                          {hike.distance} km
                        </td>
                        <td className="px-6 py-4">
                          <Link
                            className="visited:text-transparent"
                            to={"/" + hike.id}
                          >
                            <MdIcons.MdOutlineOpenInNew className="w-16 text-2xl text-black hover:text-indigo-700" />
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
