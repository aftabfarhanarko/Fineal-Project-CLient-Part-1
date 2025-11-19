import { useQuery } from "@tanstack/react-query";
import useAxiosSecoir from "../../Hook/useAxiosSecoir";
import useAuth from "../../Hook/useAuth";
import Loding from "../../Shared/Loding";
import Parcel from "./Parcel";
import ParcelCard from "./Parcel";

const MyParcel = () => {
  const { user } = useAuth();
  const axiosData = useAxiosSecoir();

  const { isPending, data } = useQuery({
    queryKey: ["tododat"],
    queryFn: () =>
      axiosData.get(`parcel?email${user?.email}`).then((respons) => {
        console.log("Task Query Data Find", respons.data.result);
        return respons.data.result;
      }),
  });

  if (isPending) return <Loding></Loding>;

  console.log(data);

  return <div> 
    <h1 className=" text-2xl font-bold my-15 ">My Parcel</h1>
    <div className=" grid  grid-cols-1 md:grid-cols-3 gap-5">
       {
        data.map((p, i) => <ParcelCard p={p} key={i}></ParcelCard>)
       }
    </div>
    
    </div>;
};

export default MyParcel;
