import React, { useState } from 'react';
import Swal from 'sweetalert2';

import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase"

const Edit = ({ products, selectedProduct, setProducts, setIsEditing, getProducts }) => {
  const id = selectedProduct.id;

  const [Producto, setProducto] = useState(selectedProduct.Producto);
  const [Descripcion, setDescripcion] = useState(selectedProduct.Descripcion);
  const [Precio, setPrecio] = useState(selectedProduct.Precio);
  const [Categoria, setCategoria] = useState(selectedProduct.Categoria);

  const handleUpdate = async(e) => {
    e.preventDefault();

    if (!Producto || !Descripcion || !Precio || !Categoria) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const product = {
      id,
      Producto,
      Descripcion,
      Precio,
      Categoria,
    };

    setDoc(doc(db, "productos", id), {
      ...product
    });

    setProducts(products);
    setIsEditing(false);
    getProducts()

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${product.Producto} ${product.Producto}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Product</h1>
        <label htmlFor="Producto">Producto</label>
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
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
