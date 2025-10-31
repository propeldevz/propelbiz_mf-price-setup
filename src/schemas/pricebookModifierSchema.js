import * as yup from "yup";

const REQUIRED_MSG = "This field is required";

export const pricebookModifierSchema = yup.object({
  billableRate: yup
    .string()
    .trim()
    .required(REQUIRED_MSG)
    .test("is-number", "Billable Rate must be a number", (value) => {
      if (!value) return true;
      return !isNaN(Number(value));
    })
    .test("is-non-negative", "Billable Rate cannot be negative", (value) => {
      if (!value || isNaN(Number(value))) return true;
      return Number(value) >= 0;
    }),
  primarySurchargePercent: yup
    .string()
    .trim()
    .required(REQUIRED_MSG)
    .test("is-number", "Surcharge (%) must be a number", (value) => {
      if (!value) return true;
      return !isNaN(Number(value));
    })
    .test("is-non-negative", "Surcharge (%) cannot be negative", (value) => {
      if (!value || isNaN(Number(value))) return true;
      return Number(value) >= 0;
    })
    .test("max-100", "Surcharge (%) cannot exceed 100", (value) => {
      if (!value || isNaN(Number(value))) return true;
      return Number(value) <= 100;
    }),
  primarySurchargeDollar: yup
    .string()
    .trim()
    .required(REQUIRED_MSG)
    .test("is-number", "Surcharge ($) must be a number", (value) => {
      if (!value) return true;
      return !isNaN(Number(value));
    })
    .test("is-non-negative", "Surcharge ($) cannot be negative", (value) => {
      if (!value || isNaN(Number(value))) return true;
      return Number(value) >= 0;
    }),
  memberDiscount: yup
    .string()
    .trim()
    .required(REQUIRED_MSG)
    .test("is-number", "Member Discount must be a number", (value) => {
      if (!value) return true;
      return !isNaN(Number(value));
    })
    .test("is-non-negative", "Member Discount cannot be negative", (value) => {
      if (!value || isNaN(Number(value))) return true;
      return Number(value) >= 0;
    })
    .test("max-100", "Member Discount cannot exceed 100", (value) => {
      if (!value || isNaN(Number(value))) return true;
      return Number(value) <= 100;
    }),
  discountOption: yup
    .string()
    .required(REQUIRED_MSG),
  addOnBillableRate: yup
    .string()
    .trim()
    .required(REQUIRED_MSG)
    .test("is-number", "Add On Billable Rate must be a number", (value) => {
      if (!value) return true;
      return !isNaN(Number(value));
    })
    .test("is-non-negative", "Add On Billable Rate cannot be negative", (value) => {
      if (!value || isNaN(Number(value))) return true;
      return Number(value) >= 0;
    }),
  addOnSurchargePercent: yup
    .string()
    .trim()
    .required(REQUIRED_MSG)
    .test("is-number", "Add On Surcharge (%) must be a number", (value) => {
      if (!value) return true;
      return !isNaN(Number(value));
    })
    .test("is-non-negative", "Add On Surcharge (%) cannot be negative", (value) => {
      if (!value || isNaN(Number(value))) return true;
      return Number(value) >= 0;
    })
    .test("max-100", "Add On Surcharge (%) cannot exceed 100", (value) => {
      if (!value || isNaN(Number(value))) return true;
      return Number(value) <= 100;
    }),
  addOnSurchargeDollar: yup
    .string()
    .trim()
    .required(REQUIRED_MSG)
    .test("is-number", "Add On Surcharge ($) must be a number", (value) => {
      if (!value) return true;
      return !isNaN(Number(value));
    })
    .test("is-non-negative", "Add On Surcharge ($) cannot be negative", (value) => {
      if (!value || isNaN(Number(value))) return true;
      return Number(value) >= 0;
    }),
  addOnMemberDiscount: yup
    .string()
    .trim()
    .required(REQUIRED_MSG)
    .test("is-number", "Add On Member Discount must be a number", (value) => {
      if (!value) return true;
      return !isNaN(Number(value));
    })
    .test("is-non-negative", "Add On Member Discount cannot be negative", (value) => {
      if (!value || isNaN(Number(value))) return true;
      return Number(value) >= 0;
    })
    .test("max-100", "Add On Member Discount cannot exceed 100", (value) => {
      if (!value || isNaN(Number(value))) return true;
      return Number(value) <= 100;
    }),
});

export default pricebookModifierSchema;
