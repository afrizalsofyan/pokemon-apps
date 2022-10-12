import React from 'react';

const Layout = ({child}) => {
  return (
    <section className='min-h-screen w-full flex justify-center p-10 bg-banner'>
      <main className='w-11/12 bg-white/80 min-h-screen backdrop-blur-lg'>
        {child}
      </main>
    </section>
  );
};

export default Layout;