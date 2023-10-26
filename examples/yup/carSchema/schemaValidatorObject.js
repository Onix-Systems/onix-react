const yup = require("yup");
const schemaValidatorObject = yup.object().shape({
  year: yup
    .number()
    .required()
    .min(2010)
    .max(2023)
});
