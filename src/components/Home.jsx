import React, { Fragment, useEffect, useState } from "react";
import MetaData from "./layouts/MetaData";
import { getProducts } from "../actions/productsActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./layouts/Loader";
import Product from "./product/Product";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pagination from "react-js-pagination";

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading, error, productsCount, resPerPage } = useSelector((state) => state.productsState);
  const[currentPage, setCurrentPage] = useState(1)


  const setCurrentPageNo = (pageNo)=>{

   setCurrentPage(pageNo)

  }

  useEffect(() => {
    if(error){
     return toast.error(error,{
        position: toast.POSITION.BOTTOM_CENTER
      })

    };
 
     dispatch(getProducts(null, currentPage));

  },[error, dispatch, currentPage ] );


  return (
    <Fragment>
      {loading? <Loader/>:   
    <Fragment>
      <MetaData title={"Latest Products"} />
      <h1 id="products_heading">Latest Products</h1>

      <section id="products" className="container mt-5 m-5">
        <div className="row">
          {products && products.map(( product) => {
         
          
            return(
              <Product  key={product._id} product={product}/>          

            
           
          )

              
            })}
        </div>
      </section>

      {productsCount  >0 && productsCount > resPerPage ?
      <div className="d-flex justify-content-center mt-5">
        <Pagination

        activePage={currentPage}

        onChange={setCurrentPageNo}

        totalItemsCount={productsCount}

        itemsCountPerPage={resPerPage}

        nextPageText={">"}

        prevPageText={"<"}

        firstPageText={"First"}

        lastPageText={"Last"}

        itemClass={'page-item'}

        linkClass={"page-link"}

        
        />

      </div>
     : null }
    </Fragment>
    }
    </Fragment>
  );
};

export default Home;
