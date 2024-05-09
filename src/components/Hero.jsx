 
const Hero = () => {
   
  // const onCreatedNFT = () => {
    
  // }

  return (
    <div
      className="flex flex-col md:flex-row w-4/5 justify-between 
      items-center mx-auto py-10"
    >
      <div className="md:w-3/6 w-full">
        <div className="container-2">
          <h1 className="text-BUY text-5xl font-bold">
            Buy and Sell <br /> Digital Arts, <br />
            <span className="text-gradient">NFTs</span> Collections
          </h1>
          <p className="text-mint">
            Mint and collect the hottest NFTs around.
          </p>
        </div>

      </div>

      <div
        className=" shadow-xl shadow-black md:w-2/5 w-full 
      mt-10 md:mt-0 rounded-md overflow-hidden bg-gray-800"
      >
        <img
          src="https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDYvNGE4NmNmOWQtODM2Mi00YmVhLThiMzctZDEyODAxNjUxZTE1LmpwZWc=.jpg"
          alt="NFT Art"
          className="NFT-IMG h-60 w-full object-cover"
        />
        
      </div>
    </div>
  )
}

export default Hero
