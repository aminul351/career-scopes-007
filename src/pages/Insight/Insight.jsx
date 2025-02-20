import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Insight = () => {
  const [insights, setInsights] = useState([]);

  useEffect(() => {
    fetch("/insight.json") // If stored in public folder
      .then((response) => response.json())
      .then((data) => setInsights(data))
      .catch((error) => console.error("Error loading insights:", error));
  }, []);
console.log(insights);
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold font-textStyle text-center mb-4">Information And Insights</h1>
      <p className="text-center text-gray-600 mb-6">The latest industry news and resources</p>
      <div className="grid md:grid-cols-3 gap-6">
        {insights.map((post) => (
          <div key={post.id} className="border p-4 rounded-lg shadow-md">
            <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded-md" />
            <p className="text-sm text-gray-500 mt-2">{post.date}</p>
            <h2 className="text-lg font-semibold mt-1">{post.title}</h2>
            <Link  className="text-blue-500 mt-2 inline-block">Read More →</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insight;
