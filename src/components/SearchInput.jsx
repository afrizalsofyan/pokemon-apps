import React from 'react';
import { Form, Image, InputGroup } from 'react-bootstrap';
import { FiSearch } from 'react-icons/fi';
import PokemonTitle from '../assets/pokemon-logo.png';

function SearchInput({onChange}) {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-center'>
        <Image src={PokemonTitle} width={200}/>
      </div>
      <InputGroup className='my-5'>
        <InputGroup.Text className='bg-white border-0'><FiSearch /></InputGroup.Text>
        <Form.Control
          placeholder='Search pokemon'
          className='shadow-none border-0'
          onChange={onChange}
        />
      </InputGroup>
    </div>
  );
}

export default SearchInput;