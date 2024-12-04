import React from 'react'
import {BiTransfer} from 'react-icons/bi'
import {MdOpenInNew} from 'react-icons/md'


const transactions = () => {
  return (
    <div className='bg-[#151c25]'>
        <div className='w-4/5 py-10 mx-auto'>
            <h4 className='text-3xl font-bold text-white uppercase text-gradient'>Latest Transactions</h4>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gaps-4 lg:gaps-2 py-2.5'>
                {Array(3).fill().map((nft , i) => ( 
                    <Transaction key={i} tx={i + 1} />
                 ))}
            </div>

            <div className='my-5 text-center'>
            <button className='shadow-lg shadow-black text-white bg-[#e32970] hover:bg-[#bd255f] rounded-full p-2'>Load More</button>
            </div>
        </div>
    </div>
  )
}

 const Transaction = ({ tx }) => (
    <div className='flex items-center justify-between w-full p-3 my-2 overflow-hidden text-gray-400 bg-gray-800 border border-pink-500 rounded-md shadow-xl shadow-black'>
        <div className='p-2 rounded-md shadow-sm shadow-pink-500'> 
            <BiTransfer />
        </div>

        <div>
            <h4 className='text-sm'>#{tx} Fund Transfered</h4>
            <small className='flex items-center justify-start'>
                <span className='mr-1'>Recieved By</span>
                <a className='mr-2 text-pink-500' href="#" target='_blank'>0x31...037e</a>
                <MdOpenInNew />
            </small>
        </div>

        <p className='text-sm font-medium'>0.32 ETH</p>
    </div>
 )

export default transactions