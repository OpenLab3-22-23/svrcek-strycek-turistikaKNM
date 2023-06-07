import { Link, useLocation, useParams } from "react-router-dom";
import * as MdIcons from "react-icons/md";
import Navbar from "../components/Navbar";
import { useAuth } from "../auth/Auth";

export default function VillageWithHikes() {
  const { id, villagename } = useParams();
  const { state } = useLocation();

  return (
    <div>
      <Navbar />
      <img src={state.erbUrl} alt="erb dediny" />
      <p>{villagename}</p>
      <div className="container flex justify-center mx-auto">
        <div className="flex flex-col">
          <div className="w-full">
            <div className="border-b border-gray-200 shadow">
              <table className="divide-y divide-green-400 ">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-2 text-l text-gray-500">Túra </th>
                    <th className="px-6 py-2 text-l text-gray-500">Čas </th>
                    <th className="px-6 py-2 text-l text-gray-500">
                      Nadmorská Výška
                    </th>
                    <th className="px-6 py-2 text-l text-gray-500">
                      Vzdialenosť
                    </th>
                    <th className="px-6 py-2 text-l text-gray-500">
                      Navštíviť
                    </th>
                  </tr>
                </thead>
                {state.hikes.map((hike) => (
                  <tbody className="bg-white divide-y divide-gray-300">
                    <tr className="whitespace-nowrap">
                      <td className="px-6 py-4">
                        <div className="text-xl text-gray-900">{hike.name}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-xl text-gray-500">{hike.time}</div>
                      </td>
                      <td className="px-6 py-4 text-xl text-gray-500">
                        {hike.altitude} m.n.m
                      </td>
                      <td className="px-6 py-4 text-xl text-gray-500">{hike.distance} km</td>
                      <td className="px-6 py-4">
                        <Link
                          className="visited:text-transparent"
                          to={"/" + id}
                        >
                          <MdIcons.MdOutlineOpenInNew className="w-16 text-2xl" />
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
  );
}
