import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import Header from './Header';
import Table from './Table';
import Add from './Add';
import Edit from './Edit';

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase"

const Dashboard = ({ setIsAuthenticated }) => {
  const [products, setProducts] = useState();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "productos"));
    const products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    setProducts(products)
  }

  useEffect(() => {
    getProducts();
  }, []);

  const handleEdit = id => {
    const [product] = products.filter(product => product.id === id);

    setSelectedProduct(product);
    setIsEditing(true);
  };

  const handleDelete = id => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then(result => {
      if (result.value) {
        const [product] = products.filter(product => product.id === id);

        // TODO delete document

        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: `${product.firstName} ${product.lastName}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        const productsCopy = products.filter(product => product.id !== id);
        setProducts(productsCopy);
      }
    });
  };

  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header
            setIsAdding={setIsAdding}
            setIsAuthenticated={setIsAuthenticated}
          />
          <Table
            products={products}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {isAdding && (
        <Add
          products={products}
          setProducts={setProducts}
          setIsAdding={setIsAdding}
        />
      )}
      {isEditing && (
        <Edit
          products={products}
          selectedProduct={selectedProduct}
          setProducts={setProducts}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default Dashboard;
