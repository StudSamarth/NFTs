import Identicon from 'react-identicons'
import { FaTimes } from 'react-icons/fa'
import { useGlobalState, setGlobalState, truncate, setAlert } from '../store'
import { buyNFT } from '../Blockchain.Services'

const ShowNFT = () => {
  const [showModal] = useGlobalState('showModal')
  const [connectedAccount] = useGlobalState('connectedAccount')
  const [nft] = useGlobalState('nft')

  const onChangePrice = () => {
    setGlobalState('showModal', 'scale-0')
    setGlobalState('updateModal', 'scale-100')
  }

  const handleNFTPurchase = async () => {
    setGlobalState('showModal', 'scale-0')
    setGlobalState('loading', {
      show: true,
      msg: 'Initializing NFT transfer...',
    })

    try {
      await buyNFT(nft)
      setAlert('Transfer completed...', 'green')
      window.location.reload()
    } catch (error) {
      console.log('Error transfering NFT: ', error)
      setAlert('Purchase failed...', 'red')
    }
  }

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center
          justify-center bg-black bg-opacity-50 transform
          transition-transform duration-300 ${showModal}`}
    >
      <div className="bg-[#151c25] shadow-xl shadow-[#e32970] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
        <div className="flex flex-col">
          <div className="flex flex-row items-center justify-between">
            <p className="font-semibold text-gray-400">Buy NFT</p>
            <button
              type="button"
              onClick={() => setGlobalState('showModal', 'scale-0')}
              className="bg-transparent border-0 focus:outline-none"
            >
              <FaTimes className="text-gray-400" />
            </button>
          </div>

          <div className="flex flex-row items-center justify-center mt-5 rounded-xl">
            <div className="w-40 h-40 overflow-hidden shrink-0 rounded-xl">
              <img
                className="object-cover w-full h-full cursor-pointer"
                src={nft?.metadataURI}
                alt={nft?.title}
              />
            </div>
          </div>

          <div className="flex flex-col justify-start mt-5 rounded-xl">
            <h4 className="font-semibold text-white">{nft?.title}</h4>
            <p className="my-1 text-xs text-gray-400">{nft?.description}</p>

            <div className="flex items-center justify-between mt-3 text-white">
              <div className="flex items-center justify-start">
                <Identicon
                  string={nft?.owner}
                  size={50}
                  className="object-contain w-10 h-10 mr-3 rounded-full"
                />
                <div className="flex flex-col items-start justify-center">
                  <small className="font-bold text-white">@owner</small>
                  <small className="font-semibold text-pink-800">
                    {nft?.owner ? truncate(nft.owner, 4, 4, 11) : '...'}
                  </small>
                </div>
              </div>

              <div className="flex flex-col">
                <small className="text-xs">Current Price</small>
                <p className="text-sm font-semibold">{nft?.cost} ETH</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between space-x-2">
            {connectedAccount == nft?.owner ? (
              <button
                className="flex flex-row justify-center items-center
                w-full text-[#e32970] text-md border-[#e32970]
                py-2 px-5 rounded-full bg-transparent 
                drop-shadow-xl border hover:bg-[#bd255f]
                hover:bg-transparent hover:text-white
                hover:border hover:border-[#bd255f]
                focus:outline-none focus:ring mt-5"
                onClick={onChangePrice}
              >
                Change Price
              </button>
            ) : (
              <button
                className="flex flex-row justify-center items-center
                w-full text-white text-md bg-[#e32970]
                hover:bg-[#bd255f] py-2 px-5 rounded-full
                drop-shadow-xl border border-transparent
                hover:bg-transparent hover:text-[#e32970]
                hover:border hover:border-[#bd255f]
                focus:outline-none focus:ring mt-5"
                onClick={handleNFTPurchase}
              >
                Purchase Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowNFT
