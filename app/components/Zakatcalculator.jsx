"use client";
import { useState } from "react";

export default function ZakatCalculatorSection() {
  const [values, setValues] = useState({
    gold: "",
    money: "",
    savings: "",
    investment: "",
    liabilities: "",
    businessAssets: "",
    owed: "",
    outgoings: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (/^\d*\.?\d*$/.test(value)) {
      setValues({ ...values, [name]: value });
    }
  };

  const totalAssets =
    (parseFloat(values.gold) || 0) +
    (parseFloat(values.money) || 0) +
    (parseFloat(values.savings) || 0) +
    (parseFloat(values.investment) || 0) +
    (parseFloat(values.businessAssets) || 0) +
    (parseFloat(values.owed) || 0);

  const totalLiabilities =
    (parseFloat(values.liabilities) || 0) +
    (parseFloat(values.outgoings) || 0);

  const zakatPayable = Math.max((totalAssets - totalLiabilities) * 0.025, 0);

  return (
    <section className="py-26 px-4 bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          Don’t Guess, Use Our Zakat Calculator for Accurate Giving
        </h2>
        <p className="text-[#000000] mt-2 text-xs ">
          We’ve answered some of the most common questions to make your
          experience smooth and stress-free.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 ">
        {/* Left Side - Info */}
        <div className="bg-[#FFFFFF] rounded-2xl shadow p-6 space-y-4">
          {Array(6)
            .fill(
              "Zakat is one of the five pillars of Islam and a compulsory act of worship for every eligible Muslim. It is an annual obligation (Farz) to give. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            )
            .map((text, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="w-6 h-2 bg-red-600 rounded-full mt-2"></span>
                <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
              </div>
            ))}
        </div>

        {/* Right Side - Calculator */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden ">
          <div className="bg-[#22305B] text-white py-5 px-6 text-2xl  text-center">
            Zakat Calculator
          </div>

          <div className="p-6 space-y-5">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             <div>
  <label className="text-red-600 text-sm font-semibold block">
    Gold and Silver
  </label>
  <p className="text-gray-500 text-xs mb-1">
    Value of Gold & Silver
  </p>
  <input
    type="text"
    name="gold"
    value={values.gold}
    onChange={handleChange}
    className="w-full border border-gray-300 rounded px-3 py-2"
  />
</div>

              <div>
                <label className="text-red-600 text-sm font-semibold">
                  Money
                </label>
                <p className="text-gray-500 text-xs mb-1">
    Cash at Home & Bank Accounts
  </p>
                <input
                  type="text"
                  name="money"
                  value={values.money}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-gray-700 text-sm font-semibold">
                  Other Savings
                </label>
                <input
                  type="text"
                  name="savings"
                  
                  value={values.savings}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </div>
              <div>
                <label className="text-gray-700 text-sm font-semibold">
                  Investment & Share Values
                </label>
                <input
                  type="text"
                  name="investment"
                  
                  value={values.investment}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-red-600 text-sm font-semibold">
                  Short Term Liabilities
                </label>
                <p className="text-gray-500 text-xs mb-1">
    Money You Owe
  </p>
                
                <input
                  type="text"
                  name="liabilities"
                  value={values.liabilities}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </div>
              <div>
                <label className="text-red-600 text-sm font-semibold">
                  Business Assets
                </label>
                <p className="text-gray-500 text-xs mb-1">
    Stock Value
  </p>
                <input
                  type="text"
                  name="businessAssets"
                  
                  value={values.businessAssets}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-gray-700 text-sm font-semibold">
                  Money Owed to You
                </label>
                <input
                  type="text"
                  name="owed"
                
                  value={values.owed}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </div>
              <div>
                <label className="text-gray-700 text-sm font-semibold">
                  Other Outgoings Due
                </label>
                <input
                  type="text"
                  name="outgoings"
                  
                  value={values.outgoings}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </div>
            </div>

            {/* Total */}
            <div className="pt-4">
              <label className="text-gray-500 font-semibold text-sm mb-1 block">
                Total Zakat 
              </label>
              <input
                type="text"
                value={zakatPayable.toFixed(2)}
                readOnly
                className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
