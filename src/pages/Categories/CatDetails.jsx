import { useLoaderData, Link } from "react-router-dom";

const CatDetails = () => {
  const category = useLoaderData(); // Get category details

  // If category is not found
  if (!category) {
    return <p className="text-red-500 text-center mt-6">Category not found!</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-600">{category.title}</h1>
      <img 
        src={category.image} 
        alt={category.title} 
        className="w-full h-64 object-cover mt-4 rounded-lg shadow-lg"
      />
      <p className="mt-2 text-4xl text-gray-700">{category.title}</p>
      <p className="mt-2 text-2xl text-gray-700">{category.subtitle}</p>

      {/* Sub-Categories Section */}
      <h2 className="text-2xl font-semibold mt-6">Sub Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {category.sub_cat.map((sub) => (
          <Link key={sub.id} to={`/categories/${category.id}/${sub.id}`}>
            <div className="p-4 border rounded-lg shadow hover:shadow-md transition cursor-pointer">
              <h3 className="font-bold text-3xl  ">{sub.name}</h3>
              <h3 className="text-lg font-semibold">{sub.description}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CatDetails;
