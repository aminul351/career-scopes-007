import { useLoaderData } from "react-router-dom";

const SubCatDetails = () => {
  const subCategory = useLoaderData();
  console.log(subCategory);

//   if (!subCategory) {
//     return <p className="text-red-500 text-center mt-6">Sub-category not found!</p>;
//   }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-600">{subCategory?.name || "npne"}</h1>
      <p className="mt-2 text-gray-700">name : {subCategory?.name}</p>
      <p className="mt-2 text-gray-700"><span className="text-4xl font-bold">qualification: <br /></span>{subCategory?.qualification} </p>
      <p className="mt-2 text-gray-700"><span className="text-4xl font-bold">qualification: <br /></span>{subCategory?.description} </p>
      <p className="mt-2 text-gray-700"><span className="text-4xl font-bold">roadmap: <br /></span>{subCategory?.roadmap} </p>
      <p className="mt-2 text-gray-700"><span className="text-4xl font-bold">roadmap: <br /></span>{subCategory?.hands_on_projects_and_research} </p>
      <p className="mt-2 text-gray-700"><span className="text-4xl font-bold">roadmap: <br /></span>{subCategory?.internship_and_job_market_insight} </p>
      {/* <p className="mt-2 text-gray-700">{subCategory?.related_videos} </p>
      <p className="mt-2 text-gray-700">{subCategory?.related_blogs} </p> */}
    </div>
  );
};

export default SubCatDetails;
