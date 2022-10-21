import logo from '../../../public/logo.svg';

const Header = () => {
    return (
        <nav
            className="w-full h-[5.5rem] px-[8.25rem] flex items-center justify-between fixed top-0 left-0 z-50 bg-[#f6f6f6] py-6"
        >
            <div className="flex flex-col items-center justify-center">
                <img src={logo} alt="lomas gym logo" />
                <span className="text-xs"
                    >Las Heras 646 - Lomas de Zamora - Buenos Aires</span
                >
            </div>
            <ul className="flex justify-between gap-[4.375rem]">
                <li className="text-lg font-bold">Actividades</li>
                <li className="text-lg font-bold">Horarios</li>
                <li className="text-lg font-bold">Precios</li>
                <li className="text-lg font-bold">Servicios</li>
            </ul>
            <div className="flex items-center gap-6">
                <button
                    className="text-lg font-medium border border-[#FF7A00] rounded-lg px-10 py-1 tracking-wider"
                    >Login</button
                >
                <button
                    className="bg-[#FF7A00] rounded-lg px-10 py-2 text-white tracking-wider"
                    >Registro</button
                >
            </div>
        </nav>
    );
}
export default Header;

