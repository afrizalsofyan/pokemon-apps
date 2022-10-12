import React from 'react';
import { Image } from 'react-bootstrap';
import { IoArrowBack, IoImageOutline } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom';
import Spinners from '../components/Spinners';

function DetailsPokemon() {
  const param = useParams();
  const navigate = useNavigate();
  const [detailData, setDetailData] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const getDetailsData = async () => {
    try {
      const details = await fetch(`https://pokeapi.co/api/v2/pokemon/${param.name}`);
      setDetailData(await details.json());
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    getDetailsData();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {detailData && loading === false ? 
        <div className='w-full flex flex-col justify-center items-center bg-gradient-to-b from-cyan-500 to-cyan-100'>
          <div className='w-3/4 lg:w-9/12 text-cyan-800 p-10 border m-10 shadow-2xl rounded-xl bg-white'>
            <div className='cursor-pointer' onClick={()=>navigate('/')}>
              <IoArrowBack size={30}/>
            </div>
            <div className='flex flex-col-reverse gap-2 justify-center items-center w-full'>
              {detailData?.sprites.front_default || detailData?.sprites.front_shiny ? <Image src={detailData?.sprites.front_default ? detailData?.sprites.front_default : detailData?.sprites.front_shiny} fluid={true} className='w-40' /> 
                : <div className='flex flex-col w-full justify-center items-center'>
                  <IoImageOutline size={100}/>
                  <span className='text-lg font-semibold'>Image not found.</span>
                </div>
              }
              <div className='flex flex-col justify-center items-center'>
                <span className='text-2xl font-semibold'>{detailData?.name.toUpperCase()}</span>
                <span className='text-sm'>{`Species ${detailData?.species.name}`}</span>
              </div>
            </div>
            <div className='w-full flex-col justify-center items-center text-center'>
              <div className='mb-3 font-semibold'>
                <span>{`Height : ${detailData?.height}`}</span>
              </div>
              <div className='flex flex-col justify-center items-center gap-2'>
                <span className='text-lg font-semibold'>Abilities</span>
                <div className='grid grid-cols-2 md:flex gap-2 content-center'>
                  {detailData?.abilities.map((e,i) => <div key={'key ability '+i} className={`px-3 py-1 text-xs md:text-sm rounded-xl ${i%2 === 0 ? 'bg-gradient-to-b from-blue-600 to-blue-400' : 'bg-gradient-to-r from-green-600 to-green-400'} text-white sm:truncate lg:overflow-hidden w-full md:w-auto`}>{e.ability.name}</div>)}
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-2 my-10 lg:justify-center lg:items-center'>
              <span className='text-start mb-3 font-semibold text-lg'>Stats</span>
              {detailData?.stats.map((e, i) => {
                return (
                  <div key={'key stats '+i} className='flex flex-col md:grid grid-cols-3 lg:w-7/12'>    
                    <span className='col-span-1 capitalize font-semibold'>{e.stat.name}</span>
                    <div className='col-span-2 w-full border-[0.5px] border-blue-900/50 rounded-xl px-1'>
                      <div className={'bg-gradient-to-r from-blue-600 to-cyan-400 h-5 flex justify-center items-center rounded-full my-[4px]'} style={{width: `${e.base_stat}%`}}>
                        <div className='z-10 text-white text-xs'>{`${e.base_stat}%`}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div> : <div className='flex justify-center items-center min-h-screen w-full'><Spinners/></div>
      }
            
    </>
  );
}

export default DetailsPokemon;