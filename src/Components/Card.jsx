import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, fetchTodoApi } from "../Store/Features/GetApi/GetApi";

function Cards() {
  // const selector = useSelector((state) => state.todo);

  // this variable Store Api data
  const fetch_data = useSelector((state) => state.data);

  const callApi = fetch_data;

  console.log(callApi);

  const dispatch = useDispatch();

  // its working to get api's data from my store
  useEffect(() => {
    dispatch(fetchTodoApi());
  }, [dispatch]);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap justify-center gap-5 -m-4">
            {callApi.map((v, i) => {
              return (
                <>
                  <div
                    key={i}
                    className="lg:w-[23.5%] md:w-1/2 p-4 w-full rounded-lg duration-300 hover:shadow-xl border"
                  >
                    <a className="block  h-48 rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block hover:scale-125 transition-all duration-500"
                        src={v.thumbnail}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {v.category}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {v.title}
                      </h2>
                      <p className="mt-1">${v.price}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Cards;
