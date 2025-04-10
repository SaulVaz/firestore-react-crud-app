import React from 'react';

const Table = ({ products, handleEdit, handleDelete }) => {

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: null,
  });

  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Producto</th>
            <th>Descripcion</th>
            <th>Precio (MXN)</th>
            <th>Categoria</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {products ? (
            products.map((product, i) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.Producto}</td>
                <td>{product.Descripcion}</td>
                <td>{product.Categoria}</td>
                <td>{formatter.format(product.Precio)}</td>
                <td className="text-right">
                  <button
                    onClick={() => handleEdit(product.id)}
                    className="button muted-button"
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="button muted-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Products</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
