import React , {useState} from "react";


const DiscountPage = () => {
    const [discount , setDiscount] = useState(100);

    return (
        <>
            <div className="flex justify-center items-center overflow-auto bg-lime-600 h-10 w-full">
                <h1 className="text-xl">Get free delivery order over ${discount}</h1>
            </div>
        </>
    )
}

export default DiscountPage;