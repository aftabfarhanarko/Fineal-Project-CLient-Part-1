import { useForm, useWatch } from "react-hook-form";
import rider from "../../assets/agent-pending.png";
import { useLoaderData } from "react-router";
const RiderBook = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const serviceCenters = useLoaderData();

  const regionsert = serviceCenters.map((r) => r.region);
  const regionsDuplicate = [...new Set(regionsert)];
  console.log(regionsDuplicate);

  const reiderReguon = useWatch({ control, name: "yourRegion" });

  const handelRieder = (region) => {
    const regionDistrick = serviceCenters.filter((d) => d.region === region);
    const districk = regionDistrick.map((d) => d.district);
    return districk;
  };

  const handelFrom = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-white min-h-[80vh] rounded-lg my-20">
      <div className=" p-5 md:p-15 py-12 md:py-15 ">
        <div>
          <h1 className=" text-3xl font-bold text-secondary">Be a Rider</h1>
          <p className="max-w-[500px] text-md font-medium text-thried mt-2.5 text-justify">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>

        <div className=" flex flex-col-reverse md:flex-row gap-10  md:justify-between  md:items-center">
          {/* Form Section */}
          <div className="bg-white border flex-1  border-base-300 rounded-lg mt-10   p-6 sm:p-8 md:p-10">
            <h2 className="text-xl  font-bold text-thried mb-6 sm:mb-8">
              Tell us about yourself
            </h2>

            <div className="border-t md:border-0 pt-4 md:pt-0 border-b pb-4 md:pb-0 border-base-300">
              <h3 className="font-semibold text-lg text-secondary mb-3">
                Reciver Details
              </h3>
              <form
                onSubmit={handleSubmit(handelFrom)}
                className="space-y-5 mt-4 md:mt-7"
              >
                {/* Your Name */}
                <div>
                  <label className="block text-gray-900 font-medium mb-2 text-sm sm:text-base">
                    Your Name
                  </label>
                  <input
                    type="text"
                    {...register("yourName", { required: true })}
                    placeholder="Your Name"
                    className="w-full px-4 py-2.5 md:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent text-sm border-black/50 placeholder:text-black/90 md:text-base"
                  />
                  {errors.yourName?.type === "required" && (
                    <p className="text-red-500 text-xs font-semibold mt-1">
                      Please Fillup Your Name
                    </p>
                  )}
                </div>

                {/* Driving License Number */}
                <div>
                  <label className="block text-gray-900 font-medium mb-2 text-sm sm:text-base">
                    Driving License Number
                  </label>
                  <input
                    type="text"
                    {...register("drivingLicenseNumber", { required: true })}
                    placeholder="Driving License Number"
                    className="w-full px-4 py-2.5 md:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent text-sm border-black/50 placeholder:text-black/90 md:text-base"
                  />
                  {errors.drivingLicenseNumber?.type === "required" && (
                    <p className="text-red-500 text-xs font-semibold mt-1">
                      Please Fillup Driving License Number
                    </p>
                  )}
                </div>

                {/* Your Email */}
                <div>
                  <label className="block text-gray-900 font-medium mb-2 text-sm sm:text-base">
                    Your Email
                  </label>
                  <input
                    type="email"
                    {...register("yourEmail", { required: true })}
                    placeholder="Your Email"
                    className="w-full px-4 py-2.5 md:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent text-sm border-black/50 placeholder:text-black/90 md:text-base"
                  />
                  {errors.yourEmail?.type === "required" && (
                    <p className="text-red-500 text-xs font-semibold mt-1">
                      Please Fillup Your Email
                    </p>
                  )}
                </div>

                {/* Your Region */}
                <div>
                  <label className="block text-gray-900 font-medium mb-2 text-sm sm:text-base">
                    Your Region
                  </label>
                  <select
                    {...register("yourRegion", { required: true })}
                    className="w-full px-4 py-2.5 md:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent text-sm border-black/50 placeholder:text-black/90 md:text-base select"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select your Region
                    </option>
                    {regionsDuplicate.map((region, i) => (
                      <option key={i} value={region}>
                        {region}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Your District */}
                <div>
                  <label className="block text-gray-900 font-medium mb-2 text-sm sm:text-base">
                    Your District
                  </label>
                  <select
                    {...register("yourDistrict")}
                    className="w-full px-4 py-2.5 md:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent text-sm border-black/50 placeholder:text-black/90 md:text-base select"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select your District
                    </option>
                    {handelRieder(reiderReguon).map((district, i) => (
                      <option key={i} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                </div>

                {/* NID No */}
                <div>
                  <label className="block text-gray-900 font-medium mb-2 text-sm sm:text-base">
                    NID No
                  </label>
                  <input
                    type="text"
                    {...register("nidNo", { required: true })}
                    placeholder="NID"
                    className="w-full px-4 py-2.5 md:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent text-sm border-black/50 placeholder:text-black/90 md:text-base"
                  />
                  {errors.nidNo?.type === "required" && (
                    <p className="text-red-500 text-xs font-semibold mt-1">
                      Please Fillup NID No
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-gray-900 font-medium mb-2 text-sm sm:text-base">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    {...register("phoneNumber", { required: true })}
                    placeholder="Phone Number"
                    className="w-full px-4 py-2.5 md:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent text-sm border-black/50 placeholder:text-black/90 md:text-base"
                  />
                  {errors.phoneNumber?.type === "required" && (
                    <p className="text-red-500 text-xs font-semibold mt-1">
                      Please Fillup Phone Number
                    </p>
                  )}
                </div>

                {/* Bike Brand Model and Year */}
                <div>
                  <label className="block text-gray-900 font-medium mb-2 text-sm sm:text-base">
                    Bike Brand Model and Year
                  </label>
                  <input
                    type="text"
                    {...register("bikeBrandModelAndYear", { required: true })}
                    placeholder="Bike Brand Model and Year"
                    className="w-full px-4 py-2.5 md:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent text-sm border-black/50 placeholder:text-black/90 md:text-base"
                  />
                  {errors.bikeBrandModelAndYear?.type === "required" && (
                    <p className="text-red-500 text-xs font-semibold mt-1">
                      Please Fillup Bike Brand Model and Year
                    </p>
                  )}
                </div>

                {/* Bike Registration Number */}
                <div>
                  <label className="block text-gray-900 font-medium mb-2 text-sm sm:text-base">
                    Bike Registration Number
                  </label>
                  <input
                    type="text"
                    {...register("bikeRegistrationNumber", { required: true })}
                    placeholder="Bike Registration Number"
                    className="w-full px-4 py-2.5 md:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent text-sm border-black/50 placeholder:text-black/90 md:text-base"
                  />
                  {errors.bikeRegistrationNumber?.type === "required" && (
                    <p className="text-red-500 text-xs font-semibold mt-1">
                      Please Fillup Bike Registration Number
                    </p>
                  )}
                </div>

                {/* Tell Us About Yourself */}
                <div>
                  <label className="block text-gray-900 font-medium mb-2 text-sm sm:text-base">
                    Tell Us About Yourself
                  </label>
                  <textarea
                    {...register("tellUsAboutYourself", { required: true })}
                    placeholder="Tell Us About Yourself"
                    className="w-full px-4 py-2.5 md:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent text-sm border-black/50 placeholder:text-black/90 md:text-base"
                  ></textarea>
                  {errors.tellUsAboutYourself?.type === "required" && (
                    <p className="text-red-500 text-xs font-semibold mt-1">
                      Please Fillup Tell Us About Yourself
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-lime-300 py-2 rounded-md mt-5 font-semibold hover:bg-lime-400 transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div className="flex-1">
            <div className="  h-full rounded-xl mt-7 md:mt-0">
              <img src={rider}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiderBook;
