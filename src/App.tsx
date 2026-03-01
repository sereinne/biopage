import './App.css'

function App() {
  return (
    <main className="bg-gray-900 h-screen flex flex-col flex-start justify-center items-center font-ibm-code text-teal-200">
      <div className='hero flex flex-col gap-y-8'>
        <img src="/akbar-blue-caligraphy.png" className='h-32 w-64 self-center' />
        <p className='text-2xl lg:text-4xl self-center select-none '>
          Muhammad <span className='bg-teal-200 text-gray-900 px-1 rounded-md font-semibold'>Akbar</span> Ilman Setijadi
        </p>
        <p className='text-gray-500 text-md text-center lg:text-left lg:text-lg '>
          &gt; Hi, There! you can call me Akbar. <br /> I'm an Information Systems student at <a className='underline decoration-teal-200 text-teal-200' href="https://is.its.ac.id">ITS</a> interested in Cybersecurity and Backend Engineering
          in general. <br /> Also quite a bit in Frontend and Design.
        </p>
        <div className='activities flex  flex-col lg:flex-row gap-y-5 justify-center items-center gap-x-5'>
          <div className='contributions flex flex-col gap-y-2'>
            <h1 className='text-xl rounded-md bg-teal-200 text-gray-900 font-semibold px-1 py-0.25 self-center lg:self-start'>Contributions</h1>
            <div className='contribution text-gray-500 flex gap-x-3 items-center self-center lg:self-start'>
              <a href="https://github.com/raycast/extensions/pull/24915" target='_blank'>
                <img src="/merged.svg" className='size-6' />
              </a>
              <p className='text-md lg:text-lg'>Raycast extension for upset.dev</p>
            </div>
            <div className='contribution text-gray-500 flex gap-x-3 items-center self-center lg:self-start'>
              <a href="https://github.com/raycast/extensions/pull/25809" target='_blank'>
                <img src="/pullreq.svg" className='size-6' />
              </a>
              <p className='text-md lg:text-lg'>Contribute to passwordstore.org Raycast extension</p>
            </div>
          </div>
          <div className='featured-repositories flex flex-col gap-y-2'>
            <h1 className='text-xl rounded-md bg-teal-200 text-gray-900 font-semibold px-1 py-0.25 self-center lg:self-start'>Repositories</h1>
            <div className='featured-repo text-gray-500 flex gap-x-3 items-center self-center lg:self-start'>
              <a href="https://github.com/sereinne/shqlite" target='_blank'>
                <img src="/repo.svg" className='size-6' />
              </a>
              <p className='text-md lg:text-lg'>Shqlite (Terminal sqlite database client)</p>
            </div>
            <div className='featured-repo text-gray-500 flex gap-x-3 items-center self-center lg:self-start'>
              <a href="https://github.com/sereinne/gummypy" target='_blank'>
                <img src="/repo.svg" className='size-6' />
              </a>
              <p className='text-md lg:text-lg'>Gummypy (gum cli command wrapper)</p>
            </div>
          </div>
        </div>
        <ul className='links flex gap-x-4 gap-y-3 flex self-center lg:self-start'>
          <li className="px-1 py-0.25 rounded-md font-semibold text-center self-center">
            <a href='https://github.com/sereinne'>
              <img src='/github.svg' className='size-8' />
            </a>
          </li>
          <li className="px-1 py-0.25 rounded-md font-semibold text-center self-center">
            <a href="https://linkedin.com/in/akbarilmnn">
              <img src='/linkedin.svg' className='size-8' />
            </a>
          </li>
          <li className="px-1 py-0.25 rounded-md font-semibold text-center self-center">
            <a href="mailto:akbarilman@sereinne.dev">
              <img src='/mail.svg' className='size-8' />
            </a>
          </li>
        </ul>
      </div>
    </main>
  )
}

export default App
