import { useLoaderData } from "react-router-dom";

const SubCatDetails = () => {
  const subCategory = useLoaderData();
  console.log(subCategory);

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col items-center">
      <div className="max-w-7xl w-full bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-5xl mt-8 font-bold text-center ">{subCategory?.name}</h1>
        <p className="mt-4 text-xl text-center mb-6 max-w-5xl mx-auto text-gray-700 italic">{subCategory?.description}</p>
        
        <div className="relative w-full mb-6">
          <img src={subCategory.image} className="w-full h-[550px] object-cover rounded-xl shadow-lg" alt="subcategory" />
        </div>

        <div className="mt-4 space-y-8">


          {/* Qualification */}
          <div>
            <h2 className="text-3xl font-semibold ">Qualifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {subCategory?.qualification?.map((qual, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                  <p className="text-lg text-gray-600">{qual}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Roadmap */}
          <div>
            <h2 className="text-3xl font-semibold ">Roadmap</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {subCategory?.roadmap?.map((step, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                  <p className="text-lg text-gray-600">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Internship and Job Market Insights */}
          <div>
            <h2 className="text-3xl font-semibold ">Internship & Job Market Insights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {subCategory?.internship_and_job_market_insight?.map((insight, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                  <p className="text-lg text-gray-600">{insight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hands-on Projects and Research */}
          <div>
            <h2 className="text-3xl font-semibold ">Hands-on Projects & Research</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {subCategory?.hands_on_projects_and_research?.map((project, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                  <p className="text-lg text-gray-600">{project}</p>
                </div>
              ))}
            </div>
          </div>

          
         {/* diff companies  */}
<div>
  <h2 className="text-3xl font-semibold">diff</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
    {subCategory?.Power_Organizations?.map((project, index) => (
      <div key={index} className="bg-gray-100 p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
        <p className="text-lg text-gray-600">{project.Name}</p>
        <p className="text-lg text-gray-600">{project.Full_Name}</p>
        <img src={project.Image} alt="" />
        <p className="text-lg text-gray-600">{project.Sector}</p>
        <a href={project.Website} className="text-blue-500">{project.Website}</a>
        <a href={project.Vacancy_Job} className="text-blue-500">{project.Vacancy_Job}</a>
      </div>
    ))}
  </div>
</div>




          {/* related_videos */}
          <div className=" p-6 rounded-xl ">
            <h2 className="text-3xl font-semibold mb-4">Related Videos</h2>

            <div className="grid grid-cols-2 gap-6">
            {subCategory?.related_videos?.map((video, index) => (
              <div key={index} className="mb-4">
                <a href={video.url} target="_blank" rel="noopener noreferrer">
                  <img src={video.img} alt="" />
                </a>
                  <h3 className="text-xl mt-2 font-semibold ">Title : {video.title}</h3>
              </div>
            ))}
            </div>
          </div>



          {/* related_blogs */}
          <div className=" p-6 rounded-xl ">
            <h2 className="text-3xl font-semibold mb-4">Related Blogs</h2>

            <div className="grid grid-cols-2 gap-6">
            {subCategory?.related_blogs?.map((blog, index) => (
              <div key={index} className="mb-4">
                {
                  blog.img && 
                  <a href={blog?.url} target="_blank" rel="noopener noreferrer">
                  <img className="w-full h-[300px]" src={blog?.img} alt="" />
                </a>
                }
                  <h3 className="text-xl mt-2 font-semibold ">Title : {blog?.title}</h3>
              </div>
            ))}
            </div>
          </div>




<div>
  <h3 className="font-bold text-3xl">Avg Monthly Salary </h3>
  <p className="text-xl">{subCategory.monthly_salary}BDT/month</p>
</div>




<div>
  <a href={subCategory?.apply_link}>
  <button className="px-5 ml-4 py-3 bg-[#00bcf1] rounded-full mt-6 font-semibold">Apply</button>
  </a>
</div>



           



        </div>
      </div>
    </div>
  );
};

export default SubCatDetails;
