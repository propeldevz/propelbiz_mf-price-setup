import React, { useState, Suspense } from "react";

// Lazy load components from UI Library
const Button = React.lazy(() => import("uiLibrary/Button"));
const TextInput = React.lazy(() => import("uiLibrary/TextInput"));
const Label = React.lazy(() => import("uiLibrary/Label"));

const PricebookModifier = ({ title, onNext }) => {
   const [billableRate, setBillableRate] = useState("120");
   const [primarySurchargePercent, setPrimarySurchargePercent] = useState("0");
   const [primarySurchargeDollar, setPrimarySurchargeDollar] = useState("10");
   const [memberDiscount, setMemberDiscount] = useState("0");
   const [discountOption, setDiscountOption] = useState("laborAndService");

   const [addOnBillableRate, setAddOnBillableRate] = useState("list");
   const [addOnSurchargePercent, setAddOnSurchargePercent] = useState("0");
   const [addOnSurchargeDollar, setAddOnSurchargeDollar] = useState("0");
   const [addOnMemberDiscount, setAddOnMemberDiscount] = useState("0");

   return (
      <div className="bg-white rounded-lg border border-[#E5E7EB] p-6 shadow-sm h-full">
         <h2 className="text-[16px] font-semibold text-[#222525] mb-4 pb-2 border-b border-[#E5E7EB] uppercase">
            {title}
         </h2>

         {/* Primary Section */}
         <div className="mb-6">
            <h3 className="text-[16px] font-medium text-[#222525] mb-4">Primary</h3>

            <div className="space-y-6">
               {/* Billable Rate */}
               <div className="flex items-center gap-4 mb-3">
                  <Suspense fallback={<label className="w-[120px] text-[14px] text-[#222525]">Billable Rate (hr)</label>}>
                     <Label className="w-[120px] !text-[14px] !mb-0">
                        Billable Rate (hr)
                     </Label>
                  </Suspense>
                  <div className="flex-1">
                     <Suspense fallback={<input className="w-full border rounded" />}>
                        <TextInput
                           type="number"
                           value={billableRate}
                           onChange={(e) => setBillableRate(e.target.value)}
                           placeholder="$ 0"
                           className="!h-[32px] w-[120px]"
                        />
                     </Suspense>
                     <div className="mt-1">
                        <a href="#" className="text-[12px] text-[#0A8080] hover:text-[#0A8080] hover:underline transition-colors">
                           Want multiple billable rates? Click here
                        </a>
                     </div>
                  </div>
               </div>

               {/* Surcharge ($) */}
               <div className="flex items-center gap-4 mb-3">
                  <Suspense fallback={<label className="w-[120px] text-[14px] text-[#222525]">Surcharge ($)</label>}>
                     <Label className="w-[120px] !text-[14px] !mb-0">
                        Surcharge ($)
                     </Label>
                  </Suspense>
                  <div className="flex-1">
                     <Suspense fallback={<input className="w-full border rounded" />}>
                        <TextInput
                           type="number"
                           value={primarySurchargeDollar}
                           onChange={(e) => setPrimarySurchargeDollar(e.target.value)}
                           placeholder="$ 0"
                           className="!h-[32px] w-[120px]"
                        />
                     </Suspense>
                  </div>
               </div>

               {/* Surcharge (%) */}
               <div className="flex items-center gap-4 mb-3">
                  <Suspense fallback={<label className="w-[120px] text-[14px] text-[#222525]">Surcharge (%)</label>}>
                     <Label className="w-[120px] !text-[14px] !mb-0">
                        Surcharge (%)
                     </Label>
                  </Suspense>
                  <div className="flex-1">
                     <Suspense fallback={<input className="w-full border rounded" />}>
                        <TextInput
                           type="number"
                           value={primarySurchargePercent}
                           onChange={(e) => setPrimarySurchargePercent(e.target.value)}
                           placeholder="% 0"
                           className="!h-[32px] w-[120px]"
                        />
                     </Suspense>
                  </div>
               </div>

               {/* Member Discount */}
               <div className="flex items-center gap-4 mb-3">
                  <Suspense fallback={<label className="w-[120px] text-[14px] text-[#222525]">Member Discount</label>}>
                     <Label className="w-[120px] !text-[14px] !mb-0">
                        Member Discount
                     </Label>
                  </Suspense>
                  <div className="flex-1 flex items-center">
                     <Suspense fallback={<input className="border rounded" />}>
                        <TextInput
                           type="number"
                           value={memberDiscount}
                           onChange={(e) => setMemberDiscount(e.target.value)}
                           placeholder="0"
                           className="!h-[32px] w-[60px]"
                        />
                     </Suspense>
                     <span className="ml-1 text-[14px] text-[#222525]">%</span>
                  </div>
               </div>

               {/* Discount Radio Options */}
               <div className="flex items-start gap-4 ml-[120px]">
                  <div className="space-y-2">
                     <label className="flex items-center gap-2 text-[12px] text-[#222525] cursor-pointer">
                        <input
                           type="radio"
                           name="discountOption"
                           value="afterLaborService"
                           checked={discountOption === "afterLaborService"}
                           onChange={(e) => setDiscountOption(e.target.value)}
                           className="w-4 h-4 text-[#0A8080] accent-[#0A8080] rounded-[2px]"
                        />
                        Apply discount after labor, service, and surcharge
                     </label>
                     <label className="flex items-center gap-2 text-[12px] text-[#222525] cursor-pointer">
                        <input
                           type="radio"
                           name="discountOption"
                           value="laborOnly"
                           checked={discountOption === "laborOnly"}
                           onChange={(e) => setDiscountOption(e.target.value)}
                           className="w-4 h-4 text-[#0A8080] accent-[#0A8080] rounded-[2px]"
                        />
                        Apply discount to labor only
                     </label>
                     <label className="flex items-center gap-2 text-[12px] text-[#222525] cursor-pointer">
                        <input
                           type="radio"
                           name="discountOption"
                           value="laborAndService"
                           checked={discountOption === "laborAndService"}
                           onChange={(e) => setDiscountOption(e.target.value)}
                           className="w-4 h-4 text-[#0A8080] accent-[#0A8080] rounded-[2px]"
                        />
                        <span className="text-[#0A8080]">Apply discount to labor and service, before the surcharge</span>
                     </label>
                  </div>
               </div>
            </div>
         </div>

         {/* Add On Section */}
         <div className="mb-6 pt-4 border-t border-[#E5E7EB]">
            <h3 className="text-[16px] font-medium text-[#222525] mb-4">Add On</h3>

            <div className="space-y-6">
               {/* Billable Rate */}
               <div className="flex items-center gap-4 mb-3">
                  <Suspense fallback={<label className="w-[120px] text-[14px] text-[#222525]">Billable Rate (hr)</label>}>
                     <Label className="w-[120px] !text-[14px] !mb-0">
                        Billable Rate (hr)
                     </Label>
                  </Suspense>
                  <div className="flex-1">
                     <Suspense fallback={<input className="w-full border rounded" />}>
                        <TextInput
                           type="number"
                           value={addOnBillableRate}
                           onChange={(e) => setAddOnBillableRate(e.target.value)}
                           placeholder="$ 0"
                           className="!h-[32px] w-[120px]"
                        />
                     </Suspense>
                     <div className="mt-1">
                        <a href="#" className="text-[12px] text-[#0A8080] hover:underline transition-colors">
                           Want multiple billable rates? Click here
                        </a>
                     </div>
                  </div>
               </div>

               {/* Surcharge ($) */}
               <div className="flex items-center gap-4 mb-3">
                  <Suspense fallback={<label className="w-[120px] text-[14px] text-[#222525]">Surcharge ($)</label>}>
                     <Label className="w-[120px] !text-[14px] !mb-0">
                        Surcharge ($)
                     </Label>
                  </Suspense>
                  <div className="flex-1">
                     <Suspense fallback={<input className="w-full border rounded" />}>
                        <TextInput
                           type="number"
                           value={addOnSurchargePercent}
                           onChange={(e) => setAddOnSurchargePercent(e.target.value)}
                           placeholder="$ 0"
                           className="!h-[32px] w-[120px]"
                        />
                     </Suspense>
                  </div>
               </div>

               {/* Surcharge (%) */}
               <div className="flex items-center gap-4 mb-3">
                  <Suspense fallback={<label className="w-[120px] text-[14px] text-[#222525]">Surcharge (%)</label>}>
                     <Label className="w-[120px] !text-[14px] !mb-0">
                        Surcharge (%)
                     </Label>
                  </Suspense>
                  <div className="flex-1">
                     <Suspense fallback={<input className="w-full border rounded" />}>
                        <TextInput
                           type="number"
                           value={addOnSurchargeDollar}
                           onChange={(e) => setAddOnSurchargeDollar(e.target.value)}
                           placeholder="% 0"
                           className="!h-[32px] w-[120px]"
                        />
                     </Suspense>
                  </div>
               </div>

               {/* Member Discount */}
               <div className="flex items-center gap-4 mb-3">
                  <Suspense fallback={<label className="w-[120px] text-[14px] text-[#222525]">Member Discount</label>}>
                     <Label className="w-[120px] !text-[14px] !mb-0">
                        Member Discount
                     </Label>
                  </Suspense>
                  <div className="flex-1 flex items-center">
                     <Suspense fallback={<input className="border rounded" />}>
                        <TextInput
                           type="number"
                           value={addOnMemberDiscount}
                           onChange={(e) => setAddOnMemberDiscount(e.target.value)}
                           placeholder="0"
                           className="!h-[32px] w-[60px]"
                        />
                     </Suspense>
                     <span className="ml-1 text-[14px] text-[#222525]">%</span>
                  </div>
               </div>
            </div>
         </div>

         {/* Next Button */}
         <div className="flex justify-end pt-4 mt-4">
            <Suspense fallback={<button className="px-8 py-2 bg-[#0A8080] text-white rounded">Next</button>}>
               <Button
                  variant="primary"
                  size="md"
                  // className="px-8 !text-[14px] !font-[500] uppercase"
                  onClick={onNext}
               >
                  Next
               </Button>
            </Suspense>
         </div>
      </div>
   );
}

export default PricebookModifier