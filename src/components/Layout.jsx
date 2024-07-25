
const Layout = ({ children }) => {
    return (
        <div className="p-6 w-full">
            <div className="container mx-auto px-3 h-full">
            {children}
            </div>
        </div>
    )
}

export default Layout