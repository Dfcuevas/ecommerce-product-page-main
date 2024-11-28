import closeIcon from "../../assets/icon-close.svg";

interface Props {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar = ({ setIsMenuOpen }: Props) => {
  return (
    <nav className="flex text-darkGrayishBlue fixed top-0 left-0 ml-0 h-screen w-[60%] p-6 flex-col gap-16 bg-white sm:static sm:h-auto sm:p-0  sm:items-center sm:w-auto sm:gap-0 sm:ml-4 z-50">
      <div>
        <img
          className="cursor-pointer sm:hidden"
          width={18}
          src={closeIcon}
          alt="close icon menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        />
      </div>
      <ul className="flex gap-4 flex-col items-start font-bold sm:font-normal text-2xl sm:text-base sm:flex-row">
        <li className="md:pb-8 border-b-4 border-transparent hover:border-orange">
          <a href="#">Collections</a>
        </li>
        <li className="md:pb-8 border-b-4 border-transparent hover:border-orange">
          <a href="#">Men</a>
        </li>
        <li className="md:pb-8 border-b-4 border-transparent hover:border-orange">
          <a href="#">Women</a>
        </li>
        <li className="md:pb-8 border-b-4 border-transparent hover:border-orange">
          <a href="#">About</a>
        </li>
        <li className="md:pb-8 border-b-4 border-transparent hover:border-orange">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
