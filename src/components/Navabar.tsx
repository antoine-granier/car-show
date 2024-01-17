import porscheLogo from "../assets/porsche-logo.png"

function Navabar() {
    return (
        <nav className="fixed w-full top-0 z-50 bg-[#d2dae1] backdrop-filter backdrop-blur-lg bg-opacity-30">
            <div className="px-4 flex items-center justify-between h-16">
                <img className="h-10" src={porscheLogo} alt="logo" />
                <div className="flex space-x-4">
                    <a href="#">Dashboard</a>
                    <a href="#">About</a>
                    <a href="#">Projects</a>
                    <a href="#">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Navabar