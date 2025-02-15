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
    donator,
    location,
    additionalNotes,
  } = food || {};
  const handleRequestFood = async (e) => {
    setLoading(true);
    e.preventDefault();
    const food_name = e.target.food_name.value;
    const food_image = e.target.food_image.value;
    const food_id = e.target.food_id.value;
    const request_date = e.target.request_date.value;
    const donator_name = e.target.donator_name.value;
    const donator_email = e.target.donator_email.value;
    const user_email = user?.email;
    const pickup_location = e.target.pickup_location.value;
    const expire_date = e.target.expire_date.value;
    const additional_notes = e.target.additional_notes.value;

    const requestData = {
      food_name,
      food_image,
      food_id,
      donator_name,
      donator_email,
      user_email,
      pickup_location,
      expire_date,
      request_date,
      additional_notes,
      status: "Requested",
    };
    const { data } = await axiosInstance.post(`/request-foods`, requestData);
    if (data.insertedId) {
      e.target.reset();
      Swal.fire({
        title: "Food Requested Successfully",
        text: "You clicked the button!",
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
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          ✖
        </button>

        {/* Modal Content */}
        <div className="p-6 max-h-[90vh] overflow-y-auto">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            Request Food
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
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                  value={donator?.donatorName}
                  name="donator_name"
                  readOnly
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Donator Email
                </label>
                <input
                  type="text"
                  value={donator?.donatorEmail}
                  name="donator_email"
                  readOnly
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>
            {/* Pickup Location */}
            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  User Email
                </label>
                <input
                  type="text"
                  value={user?.email}
                  name="user_email"
                  readOnly
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Pickup Location
                </label>
                <input
                  type="text"
                  value={location}
                  name="pickup_location"
                  readOnly
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>
            {/* Expire and Request Dates */}
            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Expire Date
                </label>
                <input
                  type="text"
                  value={expireDate}
                  name="expire_date"
                  readOnly
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                  className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              ></textarea>
            </div>
            {/* Request Button */}
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-colors duration-300"
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
