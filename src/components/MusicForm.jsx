import React from "react";
 
const MusicForm = ({
  id,
  songName,
  setSongName,
  singerName,
  setSingerName,
  nationality,
  setNationality,
  onSubmit,
  onCancel,
  submitting,
  error,
  message,
}) => {
  return (
    <section className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            {id ? "Editar cancion": "Añadir nueva canción"}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Administra los datos de la API con los datos de tu musica favorita!.
          </p>
        </div>
 
        {id && (
          <button
            type="button"
            onClick={onCancel}
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Cancelar edición
          </button>
        )}
      </div>
 
      {error && (
        <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}
 
      {message && (
        <div className="mb-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
          {message}
        </div>
      )}
 
      <form className="space-y-4" onSubmit={onSubmit}>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Nombre de la canción
          </label>
          <input
            type="text"
            id="songName"
            value={songName}
            onChange={(event) => setSongName(event.target.value)}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholder="Ingresa el nombre de la canción"
          />
        </div>
 
        <div>
          <label
            htmlFor="singerName"
            className="block text-sm font-medium text-gray-700"
          >
            Cantante
          </label>
          <input
            type="text"
            id="singerName"
            value={singerName}
            onChange={(event) => setSingerName(event.target.value)}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholder="Ingrese el cantante/artista"
          />
        </div>

         <div>
          <label
            htmlFor="nationality"
            className="block text-sm font-medium text-gray-700"
          >
            Nacionalidad
          </label>
          <input
            type="text"
            id="nationality"
            value={nationality}
            onChange={(event) => setNationality(event.target.value)}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholder="Ingrese la nacionalidad"
          />
        </div>
       
 
        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
        >
          {submitting
            ? "Guardando..."
            : id
              ? "Actualizar registro"
              : "Crear registro"}
        </button>
      </form>
    </section>
  );
};
 
export default MusicForm;