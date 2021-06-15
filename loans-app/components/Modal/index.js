export default function Modal({children, isOpen, setOpenState}) {
    return <div className="bg-black bg-opacity-80 absolute w-full h-screen flex flex-wrap content-center">
        {
            isOpen && <div className="mx-auto w-1/2 bg-gray-200 p-12">
                <div role="contentinfo">
                    <button onClick={() => setOpenState({})}>
                    ❌ 
                    </button>
                    {children}
                </div>
            </div>
        }
    </div>
}