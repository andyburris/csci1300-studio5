export function Button({ children, onClick, className }) {
    return (
        <button 
            onClick={onClick}
            className={"flex px-3 py-2 border border-slate-200 bg-slate-100 rounded-xl text-left " + (className ? className : "")}
            >
            {children}
        </button>
    )
}