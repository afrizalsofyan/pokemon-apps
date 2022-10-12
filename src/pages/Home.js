import React from 'react';
import { Button } from 'react-bootstrap';
import Layout from '../components/Layout';
import List from '../components/List';
import SearchInput from '../components/SearchInput';
function Home() {
  const [data, setData] = React.useState([]);
  const [next, setNext] = React.useState('');
  const [prev, setPrev] = React.useState('');
  const [page, setPage] = React.useState(1);
  const [dataSearch, setDataSearch] = React.useState([]);
  const [search, setSearch] = React.useState();
  const getData = async (url) => {
    try {
      const dataPokemon = await fetch(url);
      const finalResult = await dataPokemon.json();
      setNext(finalResult.next);
      setPrev(finalResult.previous);
      setData(finalResult.results);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    getData('https://pokeapi.co/api/v2/pokemon/');
    if(search != null){
      setDataSearch(data.filter((e) => e.name.includes(search.toLowerCase())));
    } else {
      getData('https://pokeapi.co/api/v2/pokemon/');
    }
  }, [search]);
  return (
    <Layout child={
      <div className='flex m-10'>
        <div className='flex flex-col w-full gap-4'>
          <SearchInput onChange={(e) => setSearch(e.target.value)}/>
          <div className='grid grid-cols-6 font-bold'>
            <div className=''>No</div>
            <div className='col-span-4'>Pokemon Name</div>
            <div className=''>Action</div>
          </div>
          {dataSearch?.length >= 1 || data?.length >= 1 ? <div className='grid grid-cols-6 text-cyan-800'>
            <List data={search ? dataSearch : data} /> 
          </div> : <div className='flex justify-center items-center text-2xl w-full min-h-screen'>{`No data with keyword ${search}`}</div>}
          <div className='flex justify-center items-center gap-3'>
            <Button disabled={prev===null} className='bg-gradient-to-r from-blue-700 to-cyan-500 border-0' onClick={()=>{getData(prev); setPage(page-1);}} >Prev</Button>
            <span>{page}</span>
            <Button disabled={next===null} className='bg-gradient-to-r from-blue-700 to-cyan-500 border-0' onClick={()=>{getData(next); setPage(page+1);}} >Next</Button>
          </div>
        </div>
      </div>
    } />
  );
}

export default Home;