import Image from "next/image";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="bg-white max-w-md shadow-lg rounded-lg overflow-hidden mx-2 my-4">
      <div className="relative">
        <Image
          src={product.image}
          alt={product.name}
          width={1000}
          height={1000}
          className="object-cover h-64 w-full"
        />
      </div>
      <div className="p-6">
        <h3 className="text-3xl  font-medium text-primary">{product.name}</h3>
        <p className="mt-4 text-lg text-primary/70">{product.description}</p>
        <h4 className="mt-4 text-xl font-semibold text-gray-800">
          Organic Ingredients:
        </h4>
        <ul className="list-disc text-lg list-inside text-primary/70">
          {product.ingredients.map((ingredient: any, index: number) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h4 className="mt-4 text-xl font-semibold text-gray-800">
          Nutritional Benefits:
        </h4>
        <p className="text-lg text-primary/70">{product.benefits}</p>
        <div className="mt-6 bg-primary  text-white py-3 px-5 rounded-lg text-center">
          <h5 className="font-medium text-2xl">How Frozen Cubes Work:</h5>
          <p className="text-lg">{product.instructions}</p>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
