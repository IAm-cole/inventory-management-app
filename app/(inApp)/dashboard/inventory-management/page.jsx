"use client";

import AddProduct from "../../dashboard-components/add-product/page";

import EditProduct from "../../dashboard-components/edit-page/page";
import SearchComponent from "../../dashboard-components/input-search/page";
import { useFilter } from "@/app/context/context";


const InventoryPage = () => {
  const {
    editItems,
    addItems,
    filteredData,
    deleteItems,
  } = useFilter();

  // const [inventoryItems, setInventoryItems] = useState([]);

  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   const savedItems = localStorage.getItem("localData");
  //   if (savedItems) {
  //     const parsedItems = JSON.parse(savedItems);
  //     setInventoryItems(parsedItems);
  //     setItems(parsedItems);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("localData", JSON.stringify(inventoryItems));
  // }, [inventoryItems]);

  // useEffect(() => {
  //   const query = value.toLowerCase().trim();

  //   const filtered = items.filter((item) => {
  //     return item.name.toLowerCase().includes(query);
  //   });
  //   setInventoryItems(filtered);
  // }, [value, items]);

  // const addItems = (item) => {
  //   const newItem = {
  //     ...item,
  //     // name: item.name,
  //     // price: item.price,
  //     // category: item.category,
  //     // stock: item.stock,
  //     id: uuidv4(),
  //     isEditing: false,
  //   };

  //   setInventoryItems((prev) => [...prev, newItem]);
  //   setItems((prev) => [...prev, newItem]);
  // };

  return (
    <section className="min-h-screen w-full px-4 md:px-8 lg:px-16">
      <main className="flex flex-col justify-center items-center">
        <div className="mt-10 max-w-[1200] flex flex-col gap-6">
          <h1 className="text-base font-semibold text-gray-600 uppercase mb-2 ml-4">
            Product Stock Overview
          </h1>

          <SearchComponent />

          {/* Product Table */}
          <div className="w-full overflow-x-auto bg-white rounded-lg border border-gray-200">
            <table className="min-w-full border-collapse ">
              <thead>
                <tr className="gap-4">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                    PRODUCT NAME
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                    CATEGORY
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                    PRICE (₦)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                    STOCK
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                    ACTION
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-400">
                {filteredData?.filter(Boolean).map((item) =>
                  item.isEditing ? (
                    <tr key={item.id}>
                      <td colSpan={5}>
                        <EditProduct task={item} />
                      </td>
                    </tr>
                  ) : (
                    <tr key={item.id}>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {item.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {item.category}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {item.price}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {item.stock}
                      </td>

                      <td className="flex gap-4 px-6 py-4 text-sm text-gray-500">
                        <button
                          onClick={() => deleteItems(item.id)}
                          className="text-red-600 hover:text-red-700 cursor-pointer"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => editItems(item.id)}
                          className="text-gray-600 hover:text-gray-700 cursor-pointer"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>

          <AddProduct addItems={addItems} />
        </div>
      </main>
    </section>
  );
};

export default InventoryPage;
