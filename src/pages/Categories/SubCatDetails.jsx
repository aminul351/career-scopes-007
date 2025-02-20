import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const SubCatDetails = () => {
  const subCategory = useLoaderData();
  console.log(subCategory);









  // MCQ Data
  const questions = subCategory?.questions || [];
  console.log(questions);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleOptionChange = (questionIndex, option) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: option,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.answer) {
        newScore += 1;
      }
    });

    setScore(newScore);

    if (newScore > 5) {
      toast.success("🎉 You are Eligible for the Job!", {
        position: "top-center",
        autoClose: 3000,
      });
    } else if (newScore < 3) {
      toast.error("📚 You should work hard!", {
        position: "top-center",
        autoClose: 3000,
      });
    } else {
      toast.info("🔍 You can improve! Keep going!", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  const currentQuestion = questions[currentQuestionIndex];





  return (
    <div className="p-6  min-h-screen flex flex-col px-12 items-center">
      <div className="  w-full    p-8">
        <h1 className="text-5xl mt-8 font-textStyle font-bold text-center ">{subCategory?.name}</h1>
        <p className="mt-4 text-xl text-center mb-6 max-w-5xl mx-auto text-gray-700 italic">{subCategory?.description}</p>

        <div className="relative w-full mb-6">
          <img src={subCategory.image} className="w-full h-[550px] object-cover rounded-xl shadow-lg" alt="subcategory" />
        </div>

        <div className="mt-4 space-y-8">


          {/* Qualification */}
          <div>
            <h2 className="text-3xl font-textStyle font-semibold border-l-4 pl-2 border-[#00bcf1]">Qualifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {subCategory?.qualification?.map((qual, index) => (
                <div
                  key={index}
                  className="relative bg-gray-100 p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-500 group"
                >
                  <p className="text-lg text-gray-600">{qual}</p>
                  {/* Animated border effect */}
                  <span
                    className="absolute inset-0 border-4 border-blue-300 origin-bottom-left transform scale-x-0 scale-y-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100 group-hover:scale-y-100 pointer-events-none rounded-xl"
                  ></span>
                </div>
              ))}
            </div>
          </div>


{/* Roadmap */}
<div>
  <h2 className="text-3xl font-semibold font-textStyle border-l-4 pl-2 border-[#00bcf1]">Roadmap</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
    {subCategory?.roadmap?.map((step, index) => (
      <div
        key={index}
        className="relative bg-gray-100 p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 group"
      >
        <p className="text-lg text-gray-600">{step}</p>
        {/* Animated border effect */}
        <span className="absolute inset-0 border-4 border-blue-300 origin-bottom-left transform scale-x-0 scale-y-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100 group-hover:scale-y-100 pointer-events-none rounded-xl"></span>
      </div>
    ))}
  </div>
</div>

{/* Internship and Job Market Insights */}
<div>
  <h2 className="text-3xl font-semibold font-textStyle border-l-4 pl-2 border-[#00bcf1]">Internship & Job Market Insights</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
    {subCategory?.internship_and_job_market_insight?.map((insight, index) => (
      <div
        key={index}
        className="relative bg-gray-100 p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 group"
      >
        <p className="text-lg text-gray-600">{insight}</p>
        {/* Animated border effect */}
        <span className="absolute inset-0 border-4 border-blue-300 origin-bottom-left transform scale-x-0 scale-y-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100 group-hover:scale-y-100 pointer-events-none rounded-xl"></span>
      </div>
    ))}
  </div>
</div>

{/* Hands-on Projects and Research */}
<div>
  <h2 className="text-3xl font-semibold font-textStyle border-l-4 pl-2 border-[#00bcf1]">Hands-on Projects & Research</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
    {subCategory?.hands_on_projects_and_research?.map((project, index) => (
      <div
        key={index}
        className="relative bg-gray-100 p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 group"
      >
        <p className="text-lg text-gray-600">{project}</p>
        {/* Animated border effect */}
        <span className="absolute inset-0 border-4 border-blue-300 origin-bottom-left transform scale-x-0 scale-y-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100 group-hover:scale-y-100 pointer-events-none rounded-xl"></span>
      </div>
    ))}
  </div>
</div>


          {/* related_videos */}
          <div className=" p-6 rounded-xl ">
            <h2 className="text-3xl font-semibold font-textStyle mb-4 border-l-4 pl-2 border-[#00bcf1]">Related Videos</h2>

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
            <h2 className="text-3xl font-semibold font-textStyle mb-4 border-l-4 pl-2 border-[#00bcf1]">Related Blogs</h2>

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



          {/* diff companies  */}
          <div>
            <h2 className="text-3xl font-textStyle font-semibold border-l-4 pl-2 border-[#00bcf1] mb-8">Different Company related to {subCategory.name}</h2>
            <div className="px-12 mt-4">
              {subCategory?.related_organizations?.map((project, index) => (
                <div key={index} className="bg-gray-100  p-12 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="flex  flex-1 justify-center items-center gap-6">
                    <img className="w-56 rounded-full" src={project.Image} alt="" />
                    <div className="text-center flex-1 rounded-xl bg-base-300 py-4">
                      <p className="text-xl font-semibold">{project.Name} - {project.Full_Name}</p>
                      <p className="text-lg   py-2">{project.Sector}</p>
                      <a href={project.Website} className="text-[#00bcf1] text-xl font-semibold">Visit site </a> <br />
                      <a href={project.Vacancy_Job} className="py-2 text-[#00bcf1] text-xl font-semibold">Vacancy Job</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* MCQ  */}

          <div className="max-w-5xl mx-auto p-5  rounded-lg shadow-md">
            <h2 className="text-3xl font-textStyle font-bold mb-6 text-center">MCQ Test for {subCategory.name}</h2>
            {/* MCQ Section */}
            {questions.length > 0 && (
              <div className="max-w-lg mx-auto p-5 bg-gray-50 rounded-lg shadow-md">
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">
                      Question {currentQuestionIndex + 1} of {questions.length}
                    </span>
                    <span className="text-sm text-gray-600">
                      Score: {score !== null ? `${score} / ${questions.length}` : "Not yet submitted"}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#00bcf1] h-2 rounded-full"
                      style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">{currentQuestion?.question}</h3>
                  <div className="space-y-3">
                    {currentQuestion?.options?.map((option, i) => (
                      <label key={i} className="flex items-center p-3 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer">
                        <input
                          type="radio"
                          name={`question-${currentQuestionIndex}`}
                          value={option}
                          checked={selectedAnswers[currentQuestionIndex] === option}
                          onChange={() => handleOptionChange(currentQuestionIndex, option)}
                          className="mr-3"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between">
                  <button
                    onClick={handlePrevious}
                    disabled={currentQuestionIndex === 0}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md disabled:opacity-50"
                  >
                    Previous
                  </button>
                  {currentQuestionIndex < questions.length - 1 ? (
                    <button onClick={handleNext} className="bg-[#00bcf1] text-white px-4 py-2 rounded-md">
                      Next
                    </button>
                  ) : (
                    <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded-md">
                      Submit
                    </button>
                  )}
                </div>
                {/* <ToastContainer /> */}
              </div>
            )}
          </div>



          <div>
            <h3 className="font-bold text-3xl font-textStyle">Avg Monthly Salary :  <span className="text-xl bg-blue-200 px-2">{subCategory.monthly_salary}BDT/month</span></h3>

          </div>




          <div className="flex justify-center items-center">
            <a href={subCategory?.apply_link}>
              <button className="px-24 ml-4 py-3  bg-[#00bcf1] rounded-full mt-6 font-semibold">Apply Now</button>
            </a>
          </div>







        </div>
      </div>
    </div>
  );
};

export default SubCatDetails;
