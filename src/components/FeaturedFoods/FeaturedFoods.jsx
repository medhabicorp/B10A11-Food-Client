import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { FadeLoader } from "react-spinners";

const FeaturedFoods = () => {
  const handleFeaturedFood = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/featured-foods`
    );
    return data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["featured-foods"],
    queryFn: handleFeaturedFood,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FadeLoader color="#ff3131" loading={true} />
      </div>
    );
  }

  return (
    <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto pt-16 pb-14">
      <h2 className="text-2xl lg:text-4xl font-semibold text-center text-orange-600">
        Featured Foods
      </h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.map((food) => (
          <div
            key={food._id}
            className="rounded shadow-md p-4 flex flex-col  hover:shadow-xl  bg-white  overflow-hidden hover:scale-105 transform transition duration-300 ease-in-out"
          >
            <img
              src={food?.foodImg}
              alt="food"
              className="w-full h-60 object-cover rounded mb-4"
            />

            <div className="mb-2 gap-10 flex justify-between items-center">
              <h2 className="text-lg lg:text-xl font-semibold ">
                {food?.foodName}
              </h2>
              <p className="text-green-500 bg-green-100 px-3 text-sm rounded-full">
                {food?.status}
              </p>
            </div>
            <p className="text-gray-600 mb-1">Quantity: {food?.foodQuantity}</p>
            <p className="text-gray-600 mb-4">
              Expire Date: {food?.expireDate}
            </p>

            <div className="flex">
              <Link to={`/food/${food?._id}`}>
                <button className="mt-auto bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedFoods;
