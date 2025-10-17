import React, { Suspense } from "react";
import { useNavigate } from "react-router-dom";

// Lazy load components from UI Library
const Button = React.lazy(() => import("uiLibrary/Button"));
const PageHeader = React.lazy(() => import("uiLibrary/PageHeader"));

const PriceSetupResult = () => {
   const navigate = useNavigate();

   const tableData = [
      { id: 'BASICSYS1', sku: 'BASICSYS1', modelId: '', displayName: 'Basic System Install', price: '$13,025.00', member: '$0.00', addOn: '$0.00', hfAddOn: '$0.00', newPrice: '$10.00', newMember: '$10.00', newAddOn: '$10.00', newHfAddOn: '$10.00' },
      { id: 'BE1', sku: 'BE1', modelId: '', displayName: 'Breath Easy Stage 1', price: '$2,063.00', member: '$1,650.00', addOn: '$1,550.00', hfAddOn: '$0.00', newPrice: '$10.00', newMember: '$10.00', newAddOn: '$10.00', newHfAddOn: '$10.00' },
      { id: 'BE2', sku: 'BE2', modelId: '', displayName: 'Breath Easy Stage 2', price: '$1,439.00', member: '$1,150.00', addOn: '$1,050.00', hfAddOn: '$0.00', newPrice: '$10.00', newMember: '$10.00', newAddOn: '$10.00', newHfAddOn: '$10.00' },
      { id: 'BE3', sku: 'BE3', modelId: '', displayName: 'Breath Easy Stage 3', price: '$2,813.00', member: '$2,250.00', addOn: '$1,850.00', hfAddOn: '$0.00', newPrice: '$10.00', newMember: '$10.00', newAddOn: '$10.00', newHfAddOn: '$10.00' },
      { id: 'BE4', sku: 'BE4', modelId: '', displayName: 'Breath Easy Stage 4', price: '$3,063.00', member: '$2,442.00', addOn: '$2,150.00', hfAddOn: '$0.00', newPrice: '$10.00', newMember: '$10.00', newAddOn: '$10.00', newHfAddOn: '$10.00' },
      { id: 'BE5', sku: 'BE5', modelId: '', displayName: 'Breath Easy Stage 5', price: '$7,406.00', member: '$5,997.00', addOn: '$4,895.00', hfAddOn: '$0.00', newPrice: '$10.00', newMember: '$10.00', newAddOn: '$10.00', newHfAddOn: '$10.00' },
      { id: 'BE6', sku: 'BE6', modelId: '', displayName: 'Breath Easy Stage 6', price: '$4,496.00', member: '$3,597.00', addOn: '$3,125.00', hfAddOn: '$0.00', newPrice: '$10.00', newMember: '$10.00', newAddOn: '$10.00', newHfAddOn: '$10.00' },
      { id: 'BE7', sku: 'BE7', modelId: '', displayName: 'Breath Easy Stage 7', price: '$6,246.00', member: '$4,997.00', addOn: '$4,298.00', hfAddOn: '$0.00', newPrice: '$10.00', newMember: '$10.00', newAddOn: '$10.00', newHfAddOn: '$10.00' }
   ];

   return (
      <div className="max-w-full mx-auto">
         <Suspense fallback={<div>Loading header...</div>}>
            <PageHeader
               title="Price Setup"
               subtitle="Use the Price Setup modifier to calculate flat rate service prices when you have modified material cost, material markups, or add hours. The calculator uses these values in combination with the rate or surcharge you set below to calculate new flat rate prices."
            />
         </Suspense>
         <div className="relative">
            <div className="overflow-y-auto scroll-hide pr-1 lg:max-h-[calc(100vh-300px)]">
               <div className="flex items-center justify-between my-6 mt-4">
                  <div>
                     <h2 className="text-[24px] font-semibold text-[#222525]">Services</h2>
                     <p className="text-[14px] text-[#7A7C7C] mt-1">Does this look about right?</p>
                  </div>
                  <div className="flex gap-3">
                     <Suspense fallback={<button className="px-6 py-2">GO BACK</button>}>
                        <Button
                           variant="outline"
                           size="md"
                           onClick={() => navigate('..')}
                        >
                           Go Back
                        </Button>
                     </Suspense>
                     <Suspense fallback={<button className="px-6 py-2">SAVE</button>}>
                        <Button
                           variant="primary"
                           size="md"
                        >
                           Save
                        </Button>
                     </Suspense>
                  </div>
               </div>

               <div className="p-6 bg-white">
                  <Suspense fallback={<div className="h-64 bg-gray-200 rounded animate-pulse"></div>}>

                     {/* Custom Table with Column Grouping */}
                     <div className="overflow-x-auto rounded-xl border border-[#E5E7EB] custom-scrollbar">
                        <table className="w-full border-collapse">
                           <thead>
                              {/* Column Group Headers */}
                              <tr className="bg-[#F9FAFB]">
                                 <th className="border-b border-r border-[#E5E7EB] p-4 text-left"></th>
                                 <th className="border-b border-r border-[#E5E7EB] p-4 text-left"></th>
                                 <th className="border-b border-r border-[#E5E7EB] p-4 text-left"></th>
                                 <th colSpan="4" className="border-b border-r border-[#E5E7EB] p-4 text-center text-[14px] font-[700] text-[#222525] uppercase">
                                    CURRENT PRICING
                                 </th>
                                 <th colSpan="4" className="border-b border-[#E5E7EB] p-4 text-center text-[14px] font-[700] text-[#0A8080] uppercase">
                                    NEW PRICING
                                 </th>
                              </tr>
                              {/* Column Headers */}
                              <tr className="bg-[#F9FAFB]">
                                 <th className="border-b border-r border-[#E5E7EB] px-6 py-4 text-left text-[16px] font-[700] text-[#222525]">SKU</th>
                                 <th className="border-b border-r border-[#E5E7EB] px-6 py-4 text-left text-[16px] font-[700] text-[#222525]">Model #</th>
                                 <th className="border-b border-r border-[#E5E7EB] px-6 py-4 text-left text-[16px] font-[700] text-[#222525]">Display Name</th>
                                 <th className="border-b border-r border-[#E5E7EB] px-6 py-4 text-left text-[16px] font-[700] text-[#222525]">Price</th>
                                 <th className="border-b border-r border-[#E5E7EB] px-6 py-4 text-left text-[16px] font-[700] text-[#222525]">Member</th>
                                 <th className="border-b border-r border-[#E5E7EB] px-6 py-4 text-left text-[16px] font-[700] text-[#222525]">Add On</th>
                                 <th className="border-b border-r border-[#E5E7EB] px-6 py-4 text-left text-[16px] font-[700] text-[#222525]">M Add On</th>
                                 <th className="border-b border-r border-[#E5E7EB] px-6 py-4 text-left text-[16px] font-[700] text-[#222525]">Price</th>
                                 <th className="border-b border-r border-[#E5E7EB] px-6 py-4 text-left text-[16px] font-[700] text-[#222525]">Member</th>
                                 <th className="border-b border-r border-[#E5E7EB] px-6 py-4 text-left text-[16px] font-[700] text-[#222525]">Add On</th>
                                 <th className="border-b border-[#E5E7EB] px-6 py-4 text-left text-[16px] font-[700] text-[#222525]">M Add On</th>
                              </tr>
                           </thead>
                           <tbody>
                              {tableData.map((row, index) => (
                                 <tr
                                    key={row.id}
                                    className={`transition-colors hover:bg-[#EAF7F7] ${index % 2 === 0 ? 'bg-white' : 'bg-[#FBFAFA]'}`}
                                 >
                                    <td className="border-r border-[#E5E7EB] px-6 py-5 text-[16px] font-[500] text-[#222525]">{row.sku}</td>
                                    <td className="border-r border-[#E5E7EB] px-6 py-5 text-[16px] font-[500] text-[#222525]">{row.modelId}</td>
                                    <td className="border-r border-[#E5E7EB] px-6 py-5 text-[16px] font-[500] text-[#222525]">{row.displayName}</td>
                                    <td className="border-r border-[#E5E7EB] px-6 py-5 text-[16px] font-[500] text-[#222525]">{row.price}</td>
                                    <td className="border-r border-[#E5E7EB] px-6 py-5 text-[16px] font-[500] text-[#222525]">{row.member}</td>
                                    <td className="border-r border-[#E5E7EB] px-6 py-5 text-[16px] font-[500] text-[#222525]">{row.addOn}</td>
                                    <td className="border-r border-[#E5E7EB] px-6 py-5 text-[16px] font-[500] text-[#222525]">{row.hfAddOn}</td>
                                    <td className="border-r border-[#E5E7EB] px-6 py-5 text-[16px] font-[500] text-[#222525]">{row.newPrice}</td>
                                    <td className="border-r border-[#E5E7EB] px-6 py-5 text-[16px] font-[500] text-[#222525]">{row.newMember}</td>
                                    <td className="border-r border-[#E5E7EB] px-6 py-5 text-[16px] font-[500] text-[#222525]">{row.newAddOn}</td>
                                    <td className="px-6 py-5 text-[16px] font-[500] text-[#222525]">{row.newHfAddOn}</td>
                                 </tr>
                              ))}
                           </tbody>
                        </table>
                     </div>
                  </Suspense>
               </div>
            </div>
         </div>
      </div>
   );
}

export default PriceSetupResult