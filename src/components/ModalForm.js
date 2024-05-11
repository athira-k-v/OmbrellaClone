import React from 'react';
// import './tailwind.css';

const ModalForm = ({  onClose }) => {
  // if (!isOpen) return null;


  return (
    <div className="min-h-screen bg-gray-100 container2 bg-opacity-25 backdrop-blur-s  "  >
      <header style={{ textAlign: 'left' }} className="bg-500 text-black text-center py-16 ">
        <h1 className="text-4xl">Schedule A Call</h1>
        <button className='text-4xl' style={{ textAlign: 'right' }} onClick={onClose}><i class="fa-solid fa-xmark"></i></button>
      </header>

      <main className="p-8">

        <section>
          <form className="mt-8">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phonenumber" className="block text-gray-700">
                Phone Number
              </label>
              <input
                type="number"
                id="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            <button style={{ textAlign: 'end' }}
              type="submit"
              className="w-50 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              Schedule
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default ModalForm;