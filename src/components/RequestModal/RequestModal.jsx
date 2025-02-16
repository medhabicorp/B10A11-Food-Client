/* eslint-disable react/prop-types */
import { format } from "date-fns";
import { useContext } from "react";
import Swal from "sweetalert2";
import useAxiosInstance from "../../CustomHooks/useAxiosInstance";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const RequestModal = ({ isOpen, onClose, food }) => {
  const { user, setLoading } = useContext(AuthContext);
  const axiosInstance = useAxiosInstance();
  if (!isOpen) return null;

  const currentDate = format(new Date(), "P");

  const {
    _id,
    foodImg,
    foodName,
    expireDate,
    Donator = { donatorName: "", donatorEmail: "" },
    location,
    additionalNotes,
  } = food || {};

  const handleRequestFood = async (e) => {
    setLoading(true);
    e.preventDefault();

    const requestData = {
      food_name: foodName,
      food_image: foodImg,
      food_id: _id,
      Donator_name: Donator.name || "Unknown",
      Donator_email: Donator.email || "Unknown",
      user_email: user?.email,
      pickup_location: location,
      expire_date: expireDate,
      request_date: currentDate,
      additional_notes: e.target.additional_notes.value,
      status: "Requested",
    };

    const { data } = await axiosInstance.post(`/request-foods`, requestData);
    if (data.insertedId) {
      e.target.reset();
      Swal.fire({
        title: "Food Requested Successfully",
        text: "Your request has been sent!",
        icon: "success",
      });
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-orange-600 hover:text-orange-800 cursor-pointer font-extrabold text-2xl"
        >
          X
        </button>

        {/* Modal Content */}
        <div className="p-6 max-h-[90vh] overflow-y-auto">
          <h2 className="text-xl font-bold text-orange-600 mb-4 text-center">
            Request For Food
          </h2>

          <form onSubmit={handleRequestFood}>
            {/* Food Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Food Name
              </label>
              <input
                type="text"
                value={foodName}
                name="food_name"
                readOnly
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Food Image */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Food Image
              </label>
              <input
                type="text"
                value={foodImg}
                name="food_image"
                readOnly
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Food ID */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Food ID
              </label>
              <input
                type="text"
                value={_id}
                name="food_id"
                readOnly
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Donator Information */}
            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Donator Name
                </label>
                <input
                  type="text"
                  value={Donator.donatorName || "Not Available"}
                  name="Donator_name"
                  readOnly
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Donator Email
                </label>
                <input
                  type="text"
                  value={Donator.donatorEmail || "Not Available"}
                  name="Donator_email"
                  readOnly
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
              </div>
            </div>

            {/* User Email */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                User Email
              </label>
              <input
                type="text"
                value={user?.email}
                name="user_email"
                readOnly
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Pickup Location */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Pickup Location
              </label>
              <input
                type="text"
                value={location}
                name="pickup_location"
                readOnly
                className="w-full mt-1 p-2 border border-gray-300 focus:outline-none rounded-lg focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Expired and Request Dates */}
            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Expired Date
                </label>
                <input
                  type="text"
                  value={expireDate}
                  name="expire_date"
                  readOnly
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Request Date
                </label>
                <input
                  type="text"
                  value={currentDate}
                  name="request_date"
                  readOnly
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Additional Notes */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Additional Notes
              </label>
              <textarea
                rows="2"
                name="additional_notes"
                defaultValue={additionalNotes}
                placeholder="Enter any additional notes here..."
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
            </div>

            {/* Request Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
            >
              Request Food
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestModal;
