"use client";

import React, { useState } from "react";
import { useFilter } from "@/app/context/context";

const AddProduct = ({addItems}) => {
  const { } = useFilter();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
  });
  console.log("formData :", formData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.price ||
      !formData.category ||
      !formData.stock
    ) {
      return alert("Please fill in all fields");
    }

    const saved = localStorage.getItem("localData");
    const items = saved ? JSON.parse(saved) : [];
    const existingItem = items.find(
      (item) =>
        item.name.toLowerCase() === formData.name.toLowerCase &&
        item.category.toLowerCase() === formData.category.toLowerCase()
    );
    if (existingItem) {
      existingItem.price = existingItem.price;
      existingItem.stock = Number(existingItem.stock) + Number(formData.stock);
    } else {
      addItems(formData);
    }

    setFormData({
      name: "",
      price: "",
      category: "",
      stock: "",
    });
  };

  return (
    <div className="mt-4">
      <main className="p-2">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Add New Product
        </h1>

        <div className="bg-white rounded-lg border border-gray-200 mt-2 p-4">
          <form
            onSubmit={handleSubmit}
            className="flex flex-wrap gap-4 items-end"
          >
            <div>
              <label className="text-sm font-medium text-gray-700 flex flex-col mb-2">
                Name of product:
              </label>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-38 px-2 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 flex flex-col mb-2">
                Price:
              </label>
              <input
                name="price"
                type="number"
                value={formData.price}
                onChange={handleChange}
                required
                className="w-38 px-2 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 flex flex-col mb-2">
                Category:
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="px-6 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
              >
                <option value="">Select Category</option>
                <option value="Canned">Canned</option>
                <option value="Bottled">Bottled</option>
                <option value="Plastic">Plastic</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 flex flex-col mb-2">
                Initial Stock:
              </label>
              <input
                name="stock"
                type="number"
                value={formData.stock}
                onChange={handleChange}
                required
                className="w-38 px-2 py-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-xl text-white text-base text-nowrap cursor-pointer"
              >
                Register Product
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddProduct;
