const ProductCard = () => {
    //border: 1px solid black
    //width: 300px;
    // display:flex;
    // flex-direction: column;
    // align-items: center
    // small - sm
    // medium- md
    // large - lg
    // extra large - xl
    //padding-top: 4px
    //border-radius : 25px
    return (
        <div className="border-1 border-black w-[350px] flex flex-col items-center gap-10 py-4 rounded-xl">
            <img src="vite.svg" alt="" className="w-[150px] h-[150px] border-4 border-blue-600 rounded-full" />
            <div className="flex flex-col gap-5 items-center">
                <h2 className="font-bold text-4xl text-blue-600">Product 1</h2>
                <p className="text-xl text-gray-700 text-center">This is a sample Product for sample testing</p>
                <p className="text-2xl font-bold text-green-600">$29.99</p>
                <button className="bg-blue-600 text-white w-[90%] py-4 rounded-2xl cursor-pointer hover:bg-blue-900">Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductCard