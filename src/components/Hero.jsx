const Hero = () => {
   return (
    <div className="my-40 w-full flex flex-col items-center justify-center">
      <h1 className=" font-display text-center text-7xl font-bold tracking-tight max-w-2xl leading-tight bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-500   ">Unleash the power of intuitive finance</h1>
      <p className="text-neutral-500 text-xl max-w-3xl text-center mt-10 selection:bg-white">Say goodbye to the <span className="text-primary">outdated</span> financial tools. Every small business owner, 
      regardless of the background, can now manage their <span className="text-primary">business</span> like a pro.
      Simple. Intuitive. And never boring.
      </p>
      <div className=" mt-8 flex justify-center w-full max-w-lg">
        <input type="text" className="rounded-xl border border-neutral-600 mr-4 text-white px-4 placeholder:text-neutral-500 flex-1 focus:outline-none focus:ring-1 focus:ring-primary transition duration-200"
        placeholder="Enter your email" />
        <button className="relative border border-neutral-700 text-white px-4 py-2 rounded-xl cursor-pointer">
        <div className="absolute -bottom-px inset-x-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent-"></div>    
            Join Waitlist</button>
      </div>
    </div>
   )
}

export default Hero