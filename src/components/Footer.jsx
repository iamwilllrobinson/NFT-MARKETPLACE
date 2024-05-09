// import timelessLogo from '../assets/timeless.png'

const Footer = () => (
  <div className="footer   gradient-bg-footer">
    <div className="footer-IN ">
      <div className="Logo flex-[0.25] justify-center items-center">
        <img   alt="" className="w-32" />
      </div>

      <div className="footer-content flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="Market text-white text-base text-center mx-2 cursor-pointer">
          Market
        </p>
        <p className="Artist text-white text-base text-center mx-2 cursor-pointer">
          Artist
        </p>
        <p className="Features text-white text-base text-center mx-2 cursor-pointer">
          Features
        </p>
        <p className="Community text-white text-base text-center mx-2 cursor-pointer">
          Community
        </p>
      </div>

      <div className="Copy-right flex flex-[0.25] justify-center items-center">
        <p className="text-white text-right text-xs">
          &copy;2023 SIGCE PROJECT
        </p> 
        
      </div>
     
    </div>
  </div>
)

export default Footer
