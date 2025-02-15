import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ThreeGridCol from "../../assets/Images/3gridcolumns.png";
import TwoGridCol from "../../assets/Images/2gridcolumns.png";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  const [layout, setLayout] = useState(3);
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_BASE_URL
        }/all-foods?available=true&sort=${sort}&search=${search}`
      )
      .then((response) => {
        setFoods(response.data);
      })
      .catch((error) => console.error("Error fetching foods:", error));
  }, [sort, search]); // Ensure sorting works when sort state changes

  const toggleLayout = (cols) => {
    setLayout(cols);
  };

  return (
    <div className="pb-20 pt-10 w-[90%] mx-auto">
      <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6 text-orange-600 border-2 border-orange-600 rounded-xl w-[90%] mx-auto p-2">
          Available Foods
        </h1>

        <div className="flex flex-col lg:flex-row justify-between items-center mb-4">
          {/* search */}
          <div className="flex items-center gap-2 px-2 shadow-md">
            <input
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search food name"
              className="outline-none px-2 py-1 bg-transparent"
            />
            <button className="bg-orange-500 text-white px-4 py-1 rounded hover:bg-orange-600 cursor-pointer">
              Search
            </button>
          </div>

          <div className="flex justify-between items-center">
            {/* sorting */}
            <div className="flex items-center gap-3 px-4 rounded">
              <select
                name="category"
                id="category"
                value={sort}
                className="border px-4 py-2 rounded-md bg-orange-500 text-white hover:bg-orange-600 cursor-pointer"
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="">Sort By Expired Date</option>
                <option value="asc">Ascending Order</option>
                <option value="dsc">Descending Order</option>
              </select>
            </div>

            {/* Layout change */}
            <div className="flex items-center cursor-pointer">
              <img
                src={ThreeGridCol}
                alt="Three Column Layout"
                className={`w-12 h-12 ${
                  layout === 3 ? "opacity-100" : "opacity-50"
                }`}
                onClick={() => toggleLayout(3)}
              />
              <img
                src={TwoGridCol}
                alt="Two Column Layout"
                className={`w-8 h-8 ${
                  layout === 2 ? "opacity-100" : "opacity-50"
                }`}
                onClick={() => toggleLayout(2)}
              />
            </div>
          </div>
        </div>

        <div className={`grid sm:grid-cols-1 lg:grid-cols-${layout} gap-6`}>
          {foods?.map((food) => (
            <div
              key={food._id}
              className="rounded shadow-md p-4 flex flex-col hover:shadow-xl transition-shadow"
            >
              <img
                src={food?.foodImg}
                alt="food"
                className="w-full h-60 object-cover rounded mb-4"
              />

              <div className="mb-2 gap-10 flex justify-between items-center">
                <h2 className="text-lg lg:text-xl font-semibold">
                  {food?.foodName}
                </h2>
                <p className="text-green-500 bg-green-100 px-3 text-sm rounded-full">
                  {food?.status}
                </p>
              </div>
              <div className="flex flex-col lg:flex-row justify-between items-center">
                <p className="text-gray-600 mb-1">
                  Quantity: {food?.foodQuantity}
                </p>
                <p className="text-gray-600 mb-4">
                  Expired Date: {food?.expireDate}
                </p>
              </div>

              <div>
                <Link to={`/food/${food?._id}`}>
                  <button className="mt-auto bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 w-full cursor-pointer">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableFoods;
