import React, { Suspense } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { pricebookModifierSchema } from "../schemas/pricebookModifierSchema";

// Lazy load components from UI Library
const Button = React.lazy(() => import("uiLibrary/Button"));
const TextInput = React.lazy(() => import("uiLibrary/TextInput"));
const Label = React.lazy(() => import("uiLibrary/Label"));

const PricebookModifier = ({ title, onNext }) => {
   const {
      register,
      handleSubmit,
      formState: { errors, touchedFields, isSubmitted },
   } = useForm({
      resolver: yupResolver(pricebookModifierSchema),
      mode: "onSubmit",
      reValidateMode: "onChange",
      defaultValues: {
         billableRate: "120",
         primarySurchargePercent: "0",
         primarySurchargeDollar: "10",
         memberDiscount: "0",
         discountOption: "laborAndService",
         addOnBillableRate: "0",
         addOnSurchargePercent: "0",
         addOnSurchargeDollar: "0",
         addOnMemberDiscount: "0",
      },
   });

   const onSubmit = (data) => {
      console.log("Form data:", data);
      if (onNext) {
         onNext(data);
      }
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg border border-[#E5E7EB] p-6 shadow-sm h-full">
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
                           type="text"
                           {...register("billableRate")}
                           placeholder="$ 0"
                        />
                     </Suspense>
                     {errors.billableRate && (touchedFields.billableRate || isSubmitted) && (
                        <p className="text-red-500 text-[12px] mt-1">{errors.billableRate.message}</p>
                     )}
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
                           type="text"
                           {...register("primarySurchargeDollar")}
                           placeholder="$ 0"
                        />
                     </Suspense>
                     {errors.primarySurchargeDollar && (touchedFields.primarySurchargeDollar || isSubmitted) && (
                        <p className="text-red-500 text-[12px] mt-1">{errors.primarySurchargeDollar.message}</p>
                     )}
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
                           type="text"
                           {...register("primarySurchargePercent")}
                           placeholder="% 0"
                        />
                     </Suspense>
                     {errors.primarySurchargePercent && (touchedFields.primarySurchargePercent || isSubmitted) && (
                        <p className="text-red-500 text-[12px] mt-1">{errors.primarySurchargePercent.message}</p>
                     )}
                  </div>
               </div>

               {/* Member Discount */}
               <div className="flex items-center gap-4 mb-3">
                  <Suspense fallback={<label className="w-[120px] text-[14px] text-[#222525]">Member Discount</label>}>
                     <Label className="w-[120px] !text-[14px] !mb-0">
                        Member Discount
                     </Label>
                  </Suspense>
                  <div className="flex-1">
                     <div className="flex items-center">
                        <Suspense fallback={<input className="border rounded" />}>
                           <TextInput
                              type="text"
                              {...register("memberDiscount")}
                              placeholder="0"
                           />
                        </Suspense>
                        <span className="ml-1 text-[14px] text-[#222525]">%</span>
                     </div>
                     {errors.memberDiscount && (touchedFields.memberDiscount || isSubmitted) && (
                        <p className="text-red-500 text-[12px] mt-1">{errors.memberDiscount.message}</p>
                     )}
                  </div>
               </div>

               {/* Discount Radio Options */}
               <div className="flex items-start gap-4 ml-[120px]">
                  <div className="space-y-2">
                     <label className="flex items-center gap-2 text-[12px] text-[#222525] cursor-pointer">
                        <input
                           type="radio"
                           {...register("discountOption")}
                           value="afterLaborService"
                           className="w-4 h-4 text-[#0A8080] accent-[#0A8080] rounded-[2px]"
                        />
                        Apply discount after labor, service, and surcharge
                     </label>
                     <label className="flex items-center gap-2 text-[12px] text-[#222525] cursor-pointer">
                        <input
                           type="radio"
                           {...register("discountOption")}
                           value="laborOnly"
                           className="w-4 h-4 text-[#0A8080] accent-[#0A8080] rounded-[2px]"
                        />
                        Apply discount to labor only
                     </label>
                     <label className="flex items-center gap-2 text-[12px] text-[#222525] cursor-pointer">
                        <input
                           type="radio"
                           {...register("discountOption")}
                           value="laborAndService"
                           className="w-4 h-4 text-[#0A8080] accent-[#0A8080] rounded-[2px]"
                        />
                        <span className="text-[#0A8080]">Apply discount to labor and service, before the surcharge</span>
                     </label>
                     {errors.discountOption && (touchedFields.discountOption || isSubmitted) && (
                        <p className="text-red-500 text-[12px] mt-1">{errors.discountOption.message}</p>
                     )}
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
                           type="text"
                           {...register("addOnBillableRate")}
                           placeholder="$ 0"
                        />
                     </Suspense>
                     {errors.addOnBillableRate && (touchedFields.addOnBillableRate || isSubmitted) && (
                        <p className="text-red-500 text-[12px] mt-1">{errors.addOnBillableRate.message}</p>
                     )}
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
                           type="text"
                           {...register("addOnSurchargeDollar")}
                           placeholder="$ 0"
                        />
                     </Suspense>
                     {errors.addOnSurchargeDollar && (touchedFields.addOnSurchargeDollar || isSubmitted) && (
                        <p className="text-red-500 text-[12px] mt-1">{errors.addOnSurchargeDollar.message}</p>
                     )}
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
                           type="text"
                           {...register("addOnSurchargePercent")}
                           placeholder="% 0"
                        />
                     </Suspense>
                     {errors.addOnSurchargePercent && (touchedFields.addOnSurchargePercent || isSubmitted) && (
                        <p className="text-red-500 text-[12px] mt-1">{errors.addOnSurchargePercent.message}</p>
                     )}
                  </div>
               </div>

               {/* Member Discount */}
               <div className="flex items-center gap-4 mb-3">
                  <Suspense fallback={<label className="w-[120px] text-[14px] text-[#222525]">Member Discount</label>}>
                     <Label className="w-[120px] !text-[14px] !mb-0">
                        Member Discount
                     </Label>
                  </Suspense>
                  <div className="flex-1">
                     <div className="flex items-center">
                        <Suspense fallback={<input className="border rounded" />}>
                           <TextInput
                              type="text"
                              {...register("addOnMemberDiscount")}
                              placeholder="0"
                           />
                        </Suspense>
                        <span className="ml-1 text-[14px] text-[#222525]">%</span>
                     </div>
                     {errors.addOnMemberDiscount && (touchedFields.addOnMemberDiscount || isSubmitted) && (
                        <p className="text-red-500 text-[12px] mt-1">{errors.addOnMemberDiscount.message}</p>
                     )}
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
                  type="submit"
               >
                  Next
               </Button>
            </Suspense>
         </div>
      </form>
   );
}

export default PricebookModifier