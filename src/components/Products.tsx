import ProductCard, { Product } from "./cards/ProductsCard";

const AllProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products", {
        cache: "no-store",
    });
    const product: Product[] = await res.json();

    return (
        <div className="main-container grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-5">
            {product.map((data) => (
                <ProductCard key={data.id} product={data} />
            ))}
        </div>
    );
};

export default AllProducts;
