// import avatar from '../assets/avatar.png';
// import { Link} from 'react-router-dom';
// import { useState } from 'react';
// import { SearchIcon } from '@heroicons/react/outline';



// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <>
//         <header className="relative p-4">
//         <div className="container mx-auto py-1 flex justify-between items-center">
//           <Link to='/'>
//             <div className="logo">
//               DIYHub
//             </div>
//           </Link>
//           <div className="flex-grow mx-28 relative">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring focus:border-blue-300 pl-10"
//             />
//             <SearchIcon className="h-5 w-5 text-gray-600 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
//           </div>
//           <nav className="hidden md:flex space-x-4 ml-auto">
//             <a href="/" className="hover:text-gray-100">Home</a>
//             <a href="/projects" className="hover:text-gray-100">Projects</a>
//             <a href="/community" className="hover:text-gray-100">Community</a>
//             <a href="/about" className="hover:text-gray-100">About</a>
//           </nav>

//           <div className="hidden md:flex items-center px-5">
//             <img
//               src={avatar}
//               alt="Profile"
//               className="w-14 h-14 rounded-full ml-12 cursor-pointer hover:shadow-lg"
//             />
//           </div>

//           <div className="md:hidden mx-6">
//             <button onClick={toggleMenu} className="text-black focus:outline-none">
//               <svg className="h-9 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {isMenuOpen && (
//           <div className="md:hidden py-2 px-4">
//             <div className="nav-list">
//               <a href="/" className="block py-2 px-4 font-bold hover:bg-gray-500">Home</a>
//               <a href="/projects" className="block py-2 px-4 font-bold hover:bg-gray-500">Projects</a>
//               <a href="/community" className="block py-2 px-4 font-bold hover:bg-gray-500">Community</a>

//               <a href="/about" className="block py-2 px-4 font-bold hover:bg-gray-500">About</a>
//             </div>
//             <div className="sign-list flex justify-center mt-4">
//               <img
//                 src={avatar}
//                 alt="Profile"
//                 className="w-10 h-10 rounded-full cursor-pointer hover:shadow-lg"
//               />
//             </div>
//           </div>
//         )}
//       </header>
//     </>
//   );
// };

// export default Header;


import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon } from '@heroicons/react/outline';
import avatar from '../assets/avatar.png';
import createIcon from '../assets/create-icon.svg'
import ExProjectForm from '../pages/ExProjectForm.jsx';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <header className="relative p-4">
        <div className="container mx-auto py-1 flex justify-between items-center">
          <Link to='/'>
            <div className="logo">DIYHub</div>
          </Link>
          <div className="flex-grow mx-28 relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring focus:border-blue-300 pl-10"
            />
            <SearchIcon className="h-5 w-5 text-gray-600 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>
          <nav className="hidden md:flex space-x-4 ml-auto">
            <a href="/" className="hover:text-gray-100">Home</a>
            <a href="/projects" className="hover:text-gray-100">Projects</a>
            <a href="/community" className="hover:text-gray-100">Community</a>
            <a href="/about" className="hover:text-gray-100">About</a>
          </nav>
          <div className="hidden md:flex items-center px-5">
            <button onClick={toggleModal} className="bg-blue-500 text-white px-4 py-2 rounded ml-4 hover:bg-blue-600 flex items-center">
              <img className='h-5 mr-2' src={createIcon} alt='create' /> Create
            </button>
            <img
              src={avatar}
              alt="Profile"
              className="w-14 h-14 rounded-full ml-12 cursor-pointer hover:shadow-lg"
            />
          </div>

          <div className="md:hidden mx-6">
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              <svg className="h-9 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-2 px-4">
            <div className="nav-list">
              <a href="/" className="block py-2 px-4 font-bold hover:bg-gray-500">Home</a>
              <a href="/projects" className="block py-2 px-4 font-bold hover:bg-gray-500">Projects</a>
              <a href="/community" className="block py-2 px-4 font-bold hover:bg-gray-500">Community</a>
              <a href="/about" className="block py-2 px-4 font-bold hover:bg-gray-500">About</a>
            </div>
            <div className="sign-list flex justify-center mt-4">
              <img
                src={avatar}
                alt="Profile"
                className="w-10 h-10 rounded-full cursor-pointer hover:shadow-lg"
              />
            </div>
          </div>
        )}
      </header>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50" onClick={toggleModal}></div>
          <div className="relative bg-white p-8 rounded-lg shadow-lg z-10 w-full max-w-6xl h-3/4 overflow-auto">
            <button onClick={toggleModal} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
              &times;
            </button>
            <ExProjectForm />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
