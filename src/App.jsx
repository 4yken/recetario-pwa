import { useState } from 'react';
import './App.css';
import ImgPizza from './assets/pizza.png';
import ImgTacosCanasta from './assets/tacos-de-canasta.jpg';
import ImgTacosPastor from './assets/tacos-al-pastor.jpeg';
import ImgTlayuda from './assets/tlayuda.jpg';

function App() {
  const platillos = [
    {
      nombre: "Tacos de Canasta",
      imagen: ImgTacosCanasta,
      descripcion: "Tacos suaves y rellenos, perfectos para llevar.",
      ingredientes: [
        "Tortillas de maíz",
        "Frijoles refritos",
        "Chicharrón prensado",
        "Salsa verde",
        "Cebolla",
        "Cilantro"
      ],
      receta: [
        "Rellenar las tortillas con frijoles y chicharrón.",
        "Colocar en una canasta y cubrir.",
        "Servir con salsa, cebolla y cilantro."
      ],
      procedimientos: [
        "Calentar las tortillas en un comal.",
        "Preparar los frijoles refritos.",
        "Rellenar las tortillas con frijoles y chicharrón prensado.",
        "Colocar los tacos en una canasta y cubrir para que se mantengan calientes.",
        "Servir con salsa verde, cebolla picada y cilantro."
      ]
    },
    {
      nombre: "Tacos de Pastor",
      imagen: ImgTacosPastor,
      descripcion: "Tacos deliciosos con carne adobada y piña.",
      ingredientes: [
        "Tortillas de maíz",
        "Carne de cerdo adobada",
        "Cebolla",
        "Cilantro",
        "Piña",
        "Salsa roja"
      ],
      receta: [
        "Cocinar la carne en un trompo.",
        "Servir en tortillas con cebolla, cilantro y piña.",
        "Añadir salsa roja al gusto."
      ],
      procedimientos: [
        "Marinar la carne de cerdo en adobo por varias horas.",
        "Cocinar la carne en un trompo o en una parrilla.",
        "Cortar la carne en tiras delgadas.",
        "Calentar las tortillas y colocar la carne, cebolla y cilantro.",
        "Agregar trozos de piña y salsa roja al gusto."
      ]
    },
    {
      nombre: "Tlayuda",
      imagen: ImgTlayuda,
      descripcion: "Una deliciosa tortilla grande y crujiente con diversos toppings.",
      ingredientes: [
        "Tortilla de maíz grande",
        "Frijoles negros",
        "Queso Oaxaca",
        "Carne asada",
        "Lechuga",
        "Salsa"
      ],
      receta: [
        "Cocinar la tortilla hasta que esté crujiente.",
        "Untar frijoles y agregar los toppings.",
        "Servir con salsa."
      ],
      procedimientos: [
        "Calentar la tortilla grande en un comal hasta que esté crujiente.",
        "Untar una capa de frijoles negros sobre la tortilla.",
        "Agregar queso Oaxaca deshebrado y carne asada en trozos.",
        "Decorar con lechuga picada y salsa al gusto.",
        "Servir caliente como plato principal."
      ]
    }
  ];

  const [selectedPlatillo, setSelectedPlatillo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (platillo) => {
    setSelectedPlatillo(platillo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlatillo(null);
  };

  return (
    <>
      <div className="lg:h-screen">
        <header className="flex flex-col md:flex-row items-center h-full p-4 gap-2">
          <div className="flex items-center w-full md:w-1/2">
            <div className="h-52 w-4 bg-gray-500 rounded-md mr-5"></div>
            <div className="text-left">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                RECETARIO
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est ut
                quaerat tenetur numquam quibusdam ullam enim recusandae nam ex,
                harum officiis eligendi, ducimus porro soluta eum dolorem
                cupiditate quas asperiores.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center w-full md:w-1/2">
            <img src={ImgPizza} alt="Pizza" className="w-full aspect-[1/1] md:ml-8" />
          </div>
        </header>
      </div>

      <section className="h-screen pt-10 px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {platillos.map((platillo) => (
            <section
              key={platillo.nombre}
              className="p-3 shadow-md bg-gray-50 rounded-lg border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-100"
              onClick={() => openModal(platillo)}
            >
              <img
                className="w-full aspect-[3/2] rounded-md"
                src={platillo.imagen}
                alt={platillo.nombre}
              />
              <h2 className="font-semibold text-lg md:text-2xl text-left m-2">
                {platillo.nombre}
              </h2>
              <p className="text-left font-normal text-sm md:text-base">
                {platillo.descripcion}
              </p>
            </section>
          ))}
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-5 max-w-lg mx-auto relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white py-2 px-3 bg-red-500 hover:bg-red-700 rounded-lg font-bold"
            >
              X
            </button>
            {selectedPlatillo && (
              <>
                <h2 className="font-semibold text-2xl">
                  {selectedPlatillo.nombre}
                </h2>
                <img
                  className="mt-3 w-full aspect-[3/2] rounded-md mb-4"
                  src={selectedPlatillo.imagen}
                  alt={selectedPlatillo.nombre}
                />
                <h3 className="font-semibold">Ingredientes:</h3>
                <ul className="list-disc ml-5 mb-2 text-left">
                  {selectedPlatillo.ingredientes.map((ingrediente, index) => (
                    <li key={index}>{ingrediente}</li>
                  ))}
                </ul>
                <h3 className="font-semibold mt-2">Receta:</h3>
                <ol className="list-decimal ml-5 mb-2 text-left">
                  {selectedPlatillo.receta.map((paso, index) => (
                    <li key={index}>{paso}</li>
                  ))}
                </ol>
                <h3 className="font-semibold mt-2">Procedimientos:</h3>
                <ol className="list-decimal ml-5 mb-2 text-left">
                  {selectedPlatillo.procedimientos.map(
                    (procedimiento, index) => (
                      <li key={index}>{procedimiento}</li>
                    )
                  )}
                </ol>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
