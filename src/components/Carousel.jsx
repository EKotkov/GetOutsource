//import React, { useState } from "react";
//import { ChevronLeft, ChevronRight } from "lucide-react";

//const Carousel = ({ children, visibleItems = 1 }) => {
//    const [currentIndex, setCurrentIndex] = useState(0);
//    const totalSlides = React.Children.count(children);

//    const prevSlide = () => {
//        setCurrentIndex((prevIndex) =>
//            prevIndex === 0 ? totalSlides - visibleItems : prevIndex - 1
//        );
//    };

//    const nextSlide = () => {
//        setCurrentIndex((prevIndex) =>
//            prevIndex + visibleItems >= totalSlides ? 0 : prevIndex + 1
//        );
//    };

//    return (
//        <div className="relative w-full max-w-lg mx-auto overflow-hidden">
//            <div className="overflow-hidden rounded-lg h-64">
//                <div
//                    className="flex transition-transform duration-300 ease-in-out"
//                    style={{
//                        transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
//                        width: `${(totalSlides / visibleItems) * 100}%`,
//                    }}
//                >
//                    {React.Children.toArray(children).map((child, index) => (
//                        <div
//                            key={index}
//                            className="flex-shrink-0"
//                            style={{ width: `${100 / visibleItems}%` }}
//                        >
//                            {child}
//                        </div>
//                    ))}
//                </div>
//            </div>
//            <button
//                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
//                onClick={prevSlide}
//            >
//                <ChevronLeft size={24} />
//            </button>
//            <button
//                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
//                onClick={nextSlide}
//            >
//                <ChevronRight size={24} />
//            </button>
//        </div>
//    );
//};

//export default Carousel;
