import React from "react";

// function Forms() {
//   const [formDataAll, setFormDataAll] = React.useState([]);
//   const [formData, setFormData] = React.useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     comments: "",
//     isFriendly: false,
//     employment: "",
//     favColor: "",
//   });

//   console.log(formData);

//   function HandleEvent(event) {
//     console.log(event.target.name);
//     const { name, value, type, checked } = event.target;

//     setFormData((prevFormData) => {
//       return {
//         ...prevFormData,
//         [name]: type === "checkbox" ? checked : value,
//       };
//     });
//   }

//   function handleSubmit(event) {
//     event.prefentDefault();
//     console.log(formData);
//   }

//   return (
//     <div className="row">
//       <div className="col-sm-12 text-center">
//         <h1>Forms</h1>
//       </div>
//       <div className="col-sm-6">
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="first name"
//             onChange={HandleEvent}
//             value={formData.firstName}
//           />
//           <input
//             type="text"
//             placeholder="last name"
//             onChange={HandleEvent}
//             value={formData.lastName}
//           />
//           <input
//             type="text"
//             placeholder="email"
//             onChange={HandleEvent}
//             value={formData.email}
//           />
//           <textarea
//             name="comments"
//             placeholder="comments"
//             onChange={HandleEvent}
//             id=""
//             cols="30"
//             rows="10"
//           ></textarea>

//           <input
//             type="checkbox"
//             id="isFriendly"
//             name="isFriendly"
//             value={formData.isFriendly}
//             checked={formData.isFriendly}
//             onChange={HandleEvent}
//           ></input>
//           <label htmlFor="isFriendly">are you friendly</label>

//           <fieldset>
//             <legend>what is your current employment</legend>

//             <input
//               type="radio"
//               name="employment"
//               id="unemployed"
//               value="unemployed"
//               onChange={HandleEvent}
//               checked={formData.employment === "unemployed"}
//             />
//             <label htmlFor="unemployed">unemployed</label>
//             <br />

//             <input
//               type="radio"
//               name="employment"
//               id="fullTime"
//               value="fullTime"
//               onChange={HandleEvent}
//               checked={formData.employment === "fullTime"}
//             />
//             <label htmlFor="fullTime">full time</label>
//             <br />

//             <input
//               type="radio"
//               name="employment"
//               id="partTime"
//               value="partTime"
//               onChange={HandleEvent}
//               checked={formData.employment === "partTime"}
//             />
//             <label htmlFor="partTime">part time</label>
//             <br />
//           </fieldset>

//           <br />
//           <label htmlFor="favColor"> what's your favorite color?</label>
//           <br />
//           <select
//             name="favColor"
//             id="favColor"
//             value={formData.favColor}
//             onChange={HandleEvent}
//           >
//             <option value="">choose color</option>
//             <option value="red">red</option>
//             <option value="blue">blue</option>
//             <option value="green">green</option>
//             <option value="orange">orange</option>
//             <option value="yellow">yellow</option>
//             <option value="indigo">indigo</option>
//             <option value="violet">violet</option>
//           </select>
//           <br />
//           <br />
//           <button>Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// }

function Forms() {
  const [formData, setFormData] = React.useState({
    email: "",
    name: "",
    comments: "",
    isFriendly: false,
    employment: "",
    favColor: "",
  });

  function handleChange() {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="row">
      <div className="col-sm-12">
        <h1>Forms</h1>
      </div>
      <div className="col-sm-12">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="email"
            onChange={handleChange}
            name="email"
            value={formData.email}
          />

          <input
            type="text"
            placeholder="name"
            onChange={handleChange}
            name="name"
            value={formData.name}
          />
          <br />
          <textarea
            placeholder="comments"
            name="comments"
            onChange={handleChange}
            value={formData.comments}
          />
          <br />
          <input
            type="checkbox"
            id="isFriendly"
            name="isFriendly"
            checked={formData.isFriendly}
            onChange={handleChange}
          />
          <label htmlFor="isFriendly">are you friendly</label>
          <br />
          <br />
          <fieldset>
            <legend>employment status</legend>
            <label htmlFor="unemployed"> unemployed</label>
            <input
              type="radio"
              id="unemployed"
              name="employment"
              value="unemployed"
              checked={formData.employment === "unemployed"}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="employed"> employed</label>
            <input
              type="radio"
              id="employed"
              name="employment"
              value="employed"
              checked={formData.employment === "employed"}
              onChange={handleChange}
            />
          </fieldset>

          <br />
          <select
            value={formData.favColor}
            name="favColor"
            id="favColor"
            onChange={handleChange}
          >
            <option value="">choose</option>
            <option value="red">red</option>
            <option value="green">green</option>
            <option value="blue">blue</option>
            <option value="yellow">yellow</option>
          </select>

          <br />
          <button>send</button>
        </form>
      </div>
    </div>
  );
}

export default Forms;
