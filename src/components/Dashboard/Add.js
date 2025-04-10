import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Add = ({ products, setProducts, setIsAdding }) => {
  const [Producto, setProducto] = useState('');
  const [Descripcion, setDescripcion] = useState('');
  const [Precio, setPrecio] = useState('');
  const [Categoria, setCategoria] = useState('');

  const handleAdd = e => {
    e.preventDefault();

    if (!Producto || !Descripcion || !Precio || !Categoria) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const newProduct = {
      Producto,
      Descripcion,
      Precio,
      Categoria,
    };

    products.push(newProduct);

    // TODO: Add doc to DB

    setProducts(products);
    setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${Producto} data has been added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Product</h1>
        <label htmlFor="Producto">Productoe</label>
        <input
          id="Producto"
          type="text"
          name="Producto"
          value={Producto}
          onChange={e => setProducto(e.target.value)}
        />
        <label htmlFor="Descripcion">Descripcion</label>
        <input
          id="Descripcion"
          type="text"
          name="Descripcion"
          value={Descripcion}
          onChange={e => setDescripcion(e.target.value)}
        />
        <label htmlFor="Precio">Precio ($)</label>
        <input
          id="Precio"
          type="number"
          name="Precio"
          value={Precio}
          onChange={e => setPrecio(e.target.value)}
        />
        <label htmlFor="Categoria">Categoria</label>
        <input
          id="Categoria"
          type="text"
          name="Categoria"
          value={Categoria}
          onChange={e => setCategoria(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
