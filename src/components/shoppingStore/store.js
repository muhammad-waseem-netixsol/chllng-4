// useProductStore.js
import {create} from 'zustand';
import axios from 'axios';

const useProductStore = create((set) => ({
  products: [], // Initially an empty array
  currentPage: 1,
  totalPages: 0,
  itemsPerPage: 6,
  cart: [],
    modal:false,
  fetchAllProducts: async () => {
    try {
    fetch("https://api.escuelajs.co/api/v1/products").then(resp => resp.json()).then(response => {
        set({products: [...response], totalPages: Math.ceil(response.length / 6)})
    }).catch(err => console.log(err))
      set({ totalPages: totalPagesCount, products: allProducts });
    } catch (error) {
      
    }
  },
  showModal: (status) => {set(state => ({modal: status}))}
  ,
  addToCart: (productId) => {
    set((state) => {
      const { products, cart } = state;
      const productToAdd = products.find(product => product.id === productId);

      if (productToAdd) {
        return { cart: [...cart, productToAdd] };
      }

      return state;
    });
  },

  setCurrentPage: (page) => {
    set((state) => ({ currentPage: page }));
  },

  nextPage: () => {
    set((state) => ({ currentPage: state.currentPage + 1 }));
  },

  prevPage: () => {
    set((state) => ({ currentPage: state.currentPage - 1 }));
  },
}));

export default useProductStore;
