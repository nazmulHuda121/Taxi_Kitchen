import logo from '../../assets/logo.png'; // you should re-import image based on your image location

const Header = () => {
  return (
    <>
      <header>
        <nav className="content-box flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5 py-5">
          <div className="flex items-center gap-1 ">
            <img className="w-10 " src={logo} alt="" />
            <h2 className="text-xl font-bold text-shadow-xs">
              Taxi
              <span className="text-amber-500"> Kitchen</span>
            </h2>
          </div>
          <div>
            <ul className="flex gap-16 ">
              <li className="">
                <a
                  href="#"
                  className="border-b-3 border-rpimary py-1   border-primary duration-200 hover:font-bold"
                >
                  Orders
                </a>
              </li>
              <li className="">
                <a
                  href="#"
                  className="border-b-3 border-rpimary py-1   border-primary duration-200 hover:font-bold"
                >
                  Foods
                </a>
              </li>
              <li className="">
                <a
                  href="#"
                  className="border-b-3 border-rpimary py-1   border-primary duration-200 hover:font-bold"
                >
                  Tables
                </a>
              </li>
              <li className="">
                <a
                  href="#"
                  className="border-b-3 border-rpimary py-1   border-primary duration-200 hover:font-bold"
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
