import React from 'react'
import { setGlobalState } from '../store'
const imgHero = 'https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDYvNGE4NmNmOWQtODM2Mi00YmVhLThiMzctZDEyODAxNjUxZTE1LmpwZWc=.jpg'
const Artworks = () => {
  return (
    <div className='bg-[#151c25] gradient-bg-artworks'>
        <div className='w-4/5 py-10 mx-auto'> 
            <h4 className='text-3xl font-bold text-white uppercase text-gradient'>Latest Artworks</h4>

            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-6 md:gaps-4 lg:gaps-3 py-2.5'>
                {Array(4).fill().map((nft , i) => ( 
                    <Card key={i} nft={i + 1}/>
                 ))}
            </div>
            <div className='my-5 text-center'>
            <button className='shadow-lg shadow-black text-white bg-[#e32970] hover:bg-[#bd255f] rounded-full p-2'>Load More</button>
            </div>
        </div>
    </div>
  )
}

const Card = ({nft}) => (
    <div className='w-full p-3 my-2 overflow-hidden bg-gray-800 rounded-md shadow-xl shadow-black'>
        <img className='object-cover w-full mb-3 rounded-lg shadow-lg h-60 shadow-black' src={imgHero} alt="{NFT-image}" />
        <h4 className='font-semibold text-white'>NFT #{nft}</h4>
        <p className='my-1 text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex explicabo, culpa laudantium accusantium alias sint atque commodi debitis! Quam sequi tenetur molestias eos asperiores possimus minima animi veniam deleniti in?</p>
        <div className='flex items-center justify-between mt-3 text-white'>
            <div className='flex flex-col'>
                <small className='text-xs'>Current Price</small>
                <p className='text-sm font-semibold'>0.34 ETH</p>
            </div>
            <button className='shadow-lg shadow-black text-sm bg-[#e32970] hover:bg-[#bd255f] rounded-full px-1.5 py-1' onClick={() => setGlobalState('showModal' , 'scale-100')}>View Details</button>
        </div>
    </div>
)

export default Artworks