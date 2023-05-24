import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Form = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      country: "Pakistan",
      terms: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().required("Required"),
      terms: Yup.bool("must be checked").required(
        "Terms of Service must be checked"
      ),
    }),

    onSubmit: (values) => {
      console.log("form valyes", values);
      navigate("/thank-you");
    },
  });

  console.log(formik);
  console.log(formik.values);

  return (
    <div className="h-screen flex items-center justify-center bg-cyan-700">
      <div className="w-1/2 rounded-lg bg-white shadow-sm p-4">
        <h1 className="text-3xl text-center font-bold">Sign Up</h1>

        <form onSubmit={formik.handleSubmit}>
          <div className="field-item mb-3">
            <label htmlFor="name" className="block text-black text-lg mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name"
              className="border p-2 focus:outline-none w-full"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <p className="text-red-700">
              {formik.errors.name && formik.touched.name
                ? formik.errors.name
                : ""}
            </p>
          </div>

          <div className="field-item mb-3">
            <label htmlFor="email" className="block text-black text-lg mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              className="border p-2 focus:outline-none w-full"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <p className="text-red-700">
              {formik.errors.email && formik.touched.email
                ? formik.errors.email
                : ""}
            </p>
          </div>
          <div className="field-item mb-3">
            <label htmlFor="password" className="block text-black text-lg mb-1">
              Password
            </label>
            <input
              type="text"
              name="password"
              id="password"
              placeholder="Enter Your Password"
              className="border p-2 focus:outline-none w-full"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <p className="text-red-700">
              {formik.errors.password && formik.touched.password
                ? formik.errors.password
                : ""}
            </p>
          </div>
          <div className="field-item mb-3">
            <label htmlFor="country" className="block text-black text-lg mb-1">
              Country
            </label>
            <select
              name="country"
              id="country"
              value={formik.values.country}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="border p-2 w-full"
            >
              <option value="select">Select Your Country</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="India">India</option>
            </select>
          </div>
          <div className="field-item mb-3">
            <input
              type="checkbox"
              name="terms"
              id="terms"
              value={formik.values.terms}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="terms" className="ml-2 text-black text-lg mb-1">
              Terms & Condition
            </label>
            <p className="text-red-700">
              {formik.errors.terms && formik.touched.terms
                ? formik.errors.terms
                : ""}
            </p>
          </div>
          <div className="field-item">
            <button
              type="submit"
              className="rounded bg-indigo-950 hover:bg-indigo-800 text-white py-3 px-10"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
