import React from 'react';

export default function App() {
  return (
    <footer className='text-center text-white' style={{ backgroundColor: 'var(--pri)' }}>
      <div className='p-4'>
        <section className='mb-4'>

          <a outline color="light" floating className='m-1 fafa' href='mailto:sarisha0004@gmail.com' role='button'>
           <i className="fa-solid fa-square-envelope m-2 icon"></i>
          </a>

          <a outline color="light" floating className='m-1 fafa' href='' role='button'>
          <i className="fa-brands fa-linkedin m-2 icon"></i>
          </a>

          <a outline color="light" floating className='m-2 fafa' href='https://github.com/Sarisha-T' role='button'>
            <i className="fa-brands fa-github m-2 icon"></i>
          </a>
        </section>

        <section className=''>
          <form action=''>
            <div className='row d-flex justify-content-center'>
              <div size="col auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>

              <div md='5' start='12'>
                <input contrast type='email' label='Email address' className='mb-4' />
              </div>

              <div size="auto">
                <button outline color='dark' type='submit' className='mb-4'>
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>

      <div className='text-center p-3' style={{ backgroundColor:'var(--pri)' }}>
        © 2020 Copyright:
        <a className="text-white mx-2" href='https://github.com/Sarisha-T/GOODFOOD'>
          FoodsoGood.com
        </a>
      </div>
    </footer>
  );
}





