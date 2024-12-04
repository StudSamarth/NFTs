import timelessLogo from '../assets/timeless.png'

const Footer = () => (
  <div className="flex flex-col items-center justify-between w-full p-4 md:justify-center gradient-bg-footer">
    <div className="flex flex-col items-center justify-between w-full my-4 sm:flex-row">
      <div className="flex flex-[0.25] justify-center items-center">
        <img src={timelessLogo} alt="logo" className="w-32" />
      </div>

      <div className="flex flex-wrap items-center flex-1 w-full mt-5 justify-evenly sm:mt-0">
        <p className="mx-2 text-base text-center text-white cursor-pointer">
          Market
        </p>
        <p className="mx-2 text-base text-center text-white cursor-pointer">
          Artist
        </p>
        <p className="mx-2 text-base text-center text-white cursor-pointer">
          Features
        </p>
        <p className="mx-2 text-base text-center text-white cursor-pointer">
          Community
        </p>
      </div>

      <div className="flex flex-[0.25] justify-center items-center">
        <p className="text-xs text-right text-white">
          &copy;2024 All rights reserved
        </p>
      </div>
    </div>
  </div>
)

export default Footer
