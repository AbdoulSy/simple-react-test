export default function Modal({children, isOpen, setOpenState}) {
    return <div>
        {
            isOpen && <div>
                <div role="contentinfo">
                    {children}
                </div>
                <button onClick={() => setOpenState({})}>
                    close
                </button>
            </div>
        }
    </div>
}