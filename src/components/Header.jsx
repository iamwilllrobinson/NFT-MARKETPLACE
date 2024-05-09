// import timelessLogo from '../assets/timeless.png';
// import { Wallet } from 'ethers';
import s from'../assets/s.png';
// import PropTypes from 'react';
 
 export default function Header(props){
  // const [value, setvalue] = useState('Connect Wallet');
  const value="Connect Wallet";
// const Header = () => {
  return (
    <nav className="w-4/5 flex md:justify-center justify-between items-center py-4 mx-auto">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img
          className="w-32 "
          src={s}
          alt="Timeless Logo"
        />
      </div>

      <ul
        className="md:flex-[0.5] text-white md:flex
        hidden list-none flex-row justify-between 
        items-center flex-initial"
      >
      </ul>     
    
        <button
          className="con-button shadow-xl shadow-black text-white
        bg-[#e32970] hover:bg-[#bd255f] md:text-xs p-2
          rounded-full cursor-pointer" onClick={props.connectWallet} >
          {/* Connect Wallet */}
          {value==='/'?'logout':'Connect Wallet'}
        </button>
      
    </nav>
  )
}

// export default Header(props);
