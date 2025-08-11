import Image from "next/image";
import { IconStar, IconShoppingCart } from "@tabler/icons-react";

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div className=" bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
            {/* Product Image */}
            <div className="relative w-full h-64">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="450px"
                    className="object-contain indent-0 p-4"
                />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col justify-between h-56">
                {/* Title */}
                <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
                    {product.title}
                </h2>

                {/* Category */}
                <p className="text-sm text-gray-500 capitalize">{product.category}</p>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-2">
                    <IconStar size={18} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-medium">{product?.rating?.rate}</span>
                    <span className="text-xs text-gray-500">
                        ({product?.rating?.count} reviews)
                    </span>
                </div>

                {/* Price & Button */}
                <div className="flex justify-between items-center mt-4">
                    <span className="text-xl font-bold text-blue-600">
                        ${product.price}
                    </span>
                    <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                        <IconShoppingCart size={20} />
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
