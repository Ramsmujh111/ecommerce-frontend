import React , {useState} from "react";


const DiscountPage = () => {
    const [discount , setDiscount] = useState(100);

    return (
        <>
            <div className="bg-lime-800 w-full flex items-center justify-center">
                <h1 className="text-xs text-white sm:text-base md:text-lg">Get free delivery order over ${discount}</h1>
            </div>
        </>
    )
}

export default DiscountPage;