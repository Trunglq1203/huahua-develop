import {Link} from "react-router-dom";
import Button from "./Button.tsx";
import ModalLogin from "./ModalLogin.tsx";
import {useState} from "react";

const Sidebar = () => {
  const [modalLogin, setModalLogin] = useState(false)
  return (
    <>
      {modalLogin && <ModalLogin onClose={() => {
        setModalLogin(false)
      }}/>}
      <nav className="bg-teal-500 text-white p-4">
        <div className="container mx-auto flex justify-between">
          <Link to="/" className="text-2xl font-bold cursor-pointer">
            HuaHua
          </Link>
          
          <span onClick={() => setModalLogin(true)}>
            <Button>Login</Button>
        </span>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
