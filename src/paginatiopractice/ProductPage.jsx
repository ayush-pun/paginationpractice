
import React, { useState } from "react";
import products from "./Products";
import Cards from "./Cards";

const ProductPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);

    
    function renderData() {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const lastIndex = startIndex + itemsPerPage;
        const currentProduct = products.slice(startIndex, lastIndex);

        return currentProduct.map((product) => (
            <Cards key={product.id} product={product} />
        ));
    }

    const totalPages = Math.ceil(products.length / itemsPerPage);

    
    function goToNext() {
        setCurrentPage((prev) =>
            prev < totalPages ? prev + 1 : prev
        );
    }

    function goToPrevious() {
        setCurrentPage((prev) =>
            prev > 1 ? prev - 1 : prev
        );
    }

    function goToSpecificPage(pageNumber) {
        setCurrentPage(pageNumber);
    }

    
    function renderPagination() {
        return (
            <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">

                {/* Previous */}
                <button
                    onClick={goToPrevious}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border rounded-lg text-sm font-medium
                               hover:bg-black hover:text-white
                               disabled:opacity-40 disabled:cursor-not-allowed"
                >
                    Previous
                </button>

                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => goToSpecificPage(i + 1)}
                        className={`px-3 py-2 border rounded-lg text-sm
                            ${currentPage === i + 1
                                ? "bg-black text-white"
                                : "hover:bg-gray-100"
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}

                {/* Next */}
                <button
                    onClick={goToNext}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border rounded-lg text-sm font-medium
                               hover:bg-black hover:text-white
                               disabled:opacity-40 disabled:cursor-not-allowed"
                >
                    Next
                </button>

            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white text-black">

            {/* Heading */}
            <div className="text-center mb-10 pt-8">
                <h1 className="text-3xl sm:text-5xl font-light tracking-wide">
                    Gym Store
                </h1>
                <p className="text-gray-500 mt-2 text-sm sm:text-base">
                    Build strength. Look strong. Feel unstoppable.
                </p>
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-white p-4 rounded-2xl border border-gray-200">

                <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full md:w-1/3 px-4 py-3 rounded-xl border border-gray-300"
                />

                <div className="flex gap-2 flex-wrap">
                    <button className="px-4 py-2 rounded-full bg-black text-white text-sm">
                        ALL
                    </button>
                    <button className="px-4 py-2 rounded-full bg-gray-100 text-sm">
                        GYMWEAR
                    </button>
                    <button className="px-4 py-2 rounded-full bg-gray-100 text-sm">
                        EQUIPMENT
                    </button>
                    <button className="px-4 py-2 rounded-full bg-gray-100 text-sm">
                        SUPPLEMENTS
                    </button>
                </div>

                <select className="px-4 py-3 rounded-xl border border-gray-300">
                    <option>Sort by</option>
                    <option>Price Low to High</option>
                    <option>Price High to Low</option>
                </select>

            </div>

            
            <div className="px-4 sm:px-6 pb-10">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {renderData()}
                </div>

                {/* Pagination BELOW grid */}
                {renderPagination()}

            </div>

        </div>
    );
};

export default ProductPage;