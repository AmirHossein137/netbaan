
const Layout = ({ children }) => {
    return (
        <div className="bg-background p-6 w-full h-screen">
            <div className="container mx-auto px-3">
            {children}
            </div>
        </div>
    )
}

export default Layout