import React, { useState, Suspense } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { CaretDownIcon } from "@phosphor-icons/react";
import PricebookModifier from "./components/PricebookModifier";

// Lazy load components from UI Library
const Button = React.lazy(() => import("uiLibrary/Button"));
const Card = React.lazy(() => import("uiLibrary/Card"));
const PageHeader = React.lazy(() => import("uiLibrary/PageHeader"));
const TextInput = React.lazy(() => import("uiLibrary/TextInput"));
const Label = React.lazy(() => import("uiLibrary/Label"));
const TabNavigation = React.lazy(() => import("uiLibrary/TabNavigation"));
const MuiTable = React.lazy(() => import("uiLibrary/MuiTable"));

// Import design system CSS
import("uiLibrary/DesignSystem");
import './styles/tailwind.css';
import PriceSetupResult from "./pages/PriceSetup";

console.log('Price Setup Page Loaded');

// Mock service categories data
const serviceCategories = [
   { id: 1, name: "HVAC", subcategories: ["Rheem", "Goodman"] },
   { id: 2, name: "Plumbing", subcategories: [] },
   { id: 3, name: "Coupons", subcategories: [] },
   { id: 4, name: "Membership", subcategories: [] },
   { id: 5, name: "Silver Add-ons", subcategories: [] },
   { id: 6, name: "Gold Add-ons", subcategories: [] },
   { id: 7, name: "Platinum Add-ons", subcategories: [] },
   { id: 8, name: "Electrical", subcategories: [] },
];


// Mock material categories data
const materialCategories = [
   { id: 1, name: "Linestats", subcategories: [] },
   { id: 2, name: "PVC Fittings", subcategories: [] },
   { id: 3, name: "Copper Fittings", subcategories: [] },
   { id: 4, name: "Service/Parts Pricebook", subcategories: [] },
];

// Mock table data

function CategorySelector({ categories, title }) {
   const [selectedCategories, setSelectedCategories] = useState(['1']);
   const [expandedCategories, setExpandedCategories] = useState({});

   const toggleCategory = (categoryId) => {
      setExpandedCategories(prev => ({
         ...prev,
         [categoryId]: !prev[categoryId]
      }));
   };

   const toggleSelection = (categoryId) => {
      const catId = `${categoryId}`;
      setSelectedCategories(prev =>
         prev.includes(catId)
            ? prev.filter(id => id !== catId)
            : [...prev, catId]
      );
   };

   const toggleSelectAll = (checked) => {
      if (checked) {
         setSelectedCategories(categories.map(cat => `${cat.id}`));
      } else {
         setSelectedCategories([]);
      }
   };

   return (
      <div>
         <p className="text-[14px] text-[#7A7C7C] mb-4">
            Please select categories below:
         </p>

         {/* Category Selection */}
         <div className="space-y-0 mb-6">
            {/* Select All */}
            <div className="flex items-center gap-3 py-2 border-b border-[#E5E7EB] hover:bg-[#F9FAFB] cursor-pointer">
               <input
                  type="checkbox"
                  className="w-4 h-4 text-[#0A8080] accent-[#0A8080] cursor-pointer rounded-[2px]"
                  checked={selectedCategories.length === categories.length}
                  onChange={(e) => toggleSelectAll(e.target.checked)}
               />
               <span className="flex-1 text-[14px] font-medium text-[#222525]">
                  Select All
               </span>
            </div>            {/* Categories */}
            {categories.map((category) => (
               <div key={category.id}>
                  <div className="flex items-center gap-3 py-3 border-b border-[#E5E7EB] hover:bg-[#F9FAFB] cursor-pointer">
                     <input
                        type="checkbox"
                        className="w-4 h-4 text-[#0A8080] accent-[#0A8080] cursor-pointer rounded-[2px]"
                        checked={selectedCategories.includes(`${category.id}`)}
                        onChange={() => toggleSelection(category.id)}
                     />
                     <span className="flex-1 text-[16px] text-[#222525]">
                        {category.name}
                     </span>
                     {category.subcategories && category.subcategories.length > 0 && (
                        <button
                           onClick={() => toggleCategory(category.id)}
                           className="p-1 hover:bg-gray-100 rounded-full"
                        >
                           <CaretDownIcon
                              size={16}
                              className={`text-[#0A8080] transition-transform ${expandedCategories[category.id] ? 'rotate-180' : ''}`}
                           />
                        </button>
                     )}
                  </div>

                  {/* Subcategories */}
                  {expandedCategories[category.id] && category.subcategories && category.subcategories.length > 0 && (
                     <div className="ml-8 mt-2 space-y-2">
                        {category.subcategories.map((subcat, idx) => (
                           <div key={idx} className="flex items-center gap-3 py-2 hover:bg-[#F9FAFB] cursor-pointer">
                              <input
                                 type="checkbox"
                                 className="w-4 h-4 text-[#0A8080] accent-[#0A8080] cursor-pointer rounded-[2px]"
                              />
                              <span className="text-[14px] text-[#7A7C7C]">{subcat}</span>
                           </div>
                        ))}
                     </div>
                  )}
               </div>
            ))}
         </div>
      </div>
   );
}

function ServiceCategorySelection() {
   const navigate = useNavigate();
   const location = useLocation();
   const [activeTab, setActiveTab] = useState('services');

   const tabs = [
      { key: 'services', label: 'Services' },
      { key: 'materials', label: 'Materials' }
   ];

   const handleNextClick = () => {
      navigate('result');
   };

   return (
      <div className="max-w-full mx-auto scroll-hide">
         <Suspense fallback={<div>Loading header...</div>}>
            <PageHeader
               title="Price Setup"
               subtitle="Use the Price Setup modifier to calculate flat rate service prices when you have modified material cost, material markups, or add hours. The calculator uses these values in combination with the rate or surcharge you set below to calculate new flat rate prices."
               showBorder={false}
            />
         </Suspense>
         <div className="relative">
            <div className="overflow-y-auto scroll-hide pr-1 lg:max-h-[calc(100vh-240px)]">
               <div className="flex gap-6 my-6 mt-4">
                  {/* Left Side - Categories */}
                  <div className="w-1/2">
                     <Suspense fallback={<div className="h-64 bg-gray-200 rounded animate-pulse"></div>}>
                        <Card>
                           <div className="p-6">
                              <Suspense fallback={<div className="h-8 bg-gray-200 rounded animate-pulse mb-4"></div>}>
                                 <TabNavigation
                                    tabs={tabs}
                                    activeKey={activeTab}
                                    onChange={setActiveTab}
                                 />
                              </Suspense>

                              <div className="py-6">
                                 {activeTab === 'services' && (
                                    <>
                                       <h2 className="text-[20px] font-semibold text-[#222525] mb-4">Services</h2>
                                       <CategorySelector categories={serviceCategories} title="Services" />
                                    </>
                                 )}

                                 {activeTab === 'materials' && (
                                    <>
                                       <h2 className="text-[20px] font-semibold text-[#222525] mb-4">Materials</h2>
                                       <CategorySelector categories={materialCategories} title="Materials" />
                                    </>
                                 )}
                              </div>
                           </div>
                        </Card>
                     </Suspense>
                  </div>

                  {/* Right Side - Pricebook Modifier */}
                  <div className="w-1/2">
                     <PricebookModifier title="PRICEBOOK MODIFIER" onNext={handleNextClick} />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default function Page() {
   return (
      <Routes>
         <Route path="/" element={<ServiceCategorySelection />} />
         <Route path="result" element={<PriceSetupResult />} />
      </Routes>
   );
}


