const yup = require("yup");

const yupObject = yup.object().shape({
  price: yup.number(),
  year: yup.number().required(),
  model: yup.string().required(),
  engine: yup.string().required()
});
