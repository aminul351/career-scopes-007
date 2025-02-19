import { useLoaderData, Link } from "react-router-dom";

const CatDetails = () => {
  const category = useLoaderData(); // Get category details

  // If category is not found
  if (!category) {
    return <p className="text-red-500 text-center mt-6">Category not found!</p>;
  }

  return (
    <div className="p-6">
      <p className="mt-8 text-4xl text-center font-bold text-gray-700">{category.title}</p>
      <p className="mt-4 text-xl  text-center max-w-5xl mx-auto  text-gray-700">{category.subtitle}</p>
      <img 
        src={category.image} 
        alt={category.title} 
        className="max-w-7xl mx-auto  h-[500px] object-cover mt-4 rounded-lg shadow-lg"
      />
     

      {/* Sub-Categories Section */}
      <h2 className="text-3xl font-semibold my-12">Here are some <span className="font-bold">Sub Categories</span> of {category.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {category.sub_cat.map((sub) => (
          <Link key={sub.id} to={`/categories/${category.id}/${sub.id}`}>
            <div className="p-4 border rounded-lg shadow hover:shadow-md transition cursor-pointer">
              <img className="h-[250px] w-full" src={sub.image} alt="" />
              <h3 className="my-2 font-bold text-3xl  ">{sub.name}</h3>
              <h3 className="mt-4 text-lg  mb-6 max-w-5xl mx-auto text-gray-700 italic">{sub.description}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CatDetails;
