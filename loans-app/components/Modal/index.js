export default function Modal({children, setOpenState}) {
    return <div>
        <div role="contentinfo">
            {children}
        </div>
        <button onClick={() => setOpenState(false)}>
            close
        </button>
    </div>
}