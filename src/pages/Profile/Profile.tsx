// import { useEffect, useState } from "react";
// import { RiErrorWarningFill } from 'react-icons/ri';
// import { USER_LOGIN } from "../../Utils/config";
// import { getDataJsonStorage } from "../../Utils/utilMethod";

// import { useFormik } from "formik";
// import * as yup from "yup";
// import { useDispatch, useSelector } from "react-redux";
// import { DispatchType, RootState } from "../../redux/configStore";
// import { userProfileApi } from "../../redux/reducers/userReducer";

// export default function Profile() {

//   const storedUserLogin = getDataJsonStorage(USER_LOGIN);
//   const [isEditingName, setIsEditingName] = useState(false);
//   const [isEditingEmail, setIsEditingEmail] = useState(false);
//   const [isEditingPhone, setIsEditingPhone] = useState(false);
//   const [isEditingBirthday, setIsEditingBirthday] = useState(false);
//   const [isEditingGender, setIsEditingGender] = useState(false);

//   const { closeInput } = useSelector((state: RootState) => state.userReducer);
//   const dispatch: DispatchType = useDispatch();

//   const handleEditName = () => setIsEditingName(true);
//   const handleCancelName = () => setIsEditingName(false);
//   const handleEditEmail = () => setIsEditingEmail(true);
//   const handleCancelEmail = () => setIsEditingEmail(false);
//   const handleEditPhone = () => setIsEditingPhone(true);
//   const handleCancelPhone = () => setIsEditingPhone(false);
//   const handleEditBirthday = () => setIsEditingBirthday(true);
//   const handleCancelBirthday = () => setIsEditingBirthday(false);
//   const handleEditGender = () => setIsEditingGender(true);
//   const handleCancelGender = () => setIsEditingGender(false);

//   useEffect(() => {
//     window.scrollTo(0, 0); // Cuộn về đầu trang khi component được render
//     setTimeout(() => {
//       setIsEditingName(false);
//       setIsEditingEmail(false);
//       setIsEditingPhone(false);
//       setIsEditingBirthday(false);
//       setIsEditingGender(false);
//     }, 300);
//   }, [closeInput]);

//   const changeProfileFrm = useFormik<userProfileApi>({
//     initialValues: {
//       fullname: storedUserLogin?.user.fullname || "",
//       phone: storedUserLogin?.user.phone || "",
//       dob: storedUserLogin?.user.dob 
//         ? new Date(storedUserLogin.user.dob).toISOString().split('T')[0] 
//         : "", // dob là string trong Formik
//       address: storedUserLogin?.user.address || "",
//       districtId: storedUserLogin?.user.districtId,
//     },
//     validationSchema: yup.object().shape({
//       fullname: yup
//         .string()
//         .required("Họ và tên không được bỏ trống!")
//         .matches(/^[a-zA-Z\s]+$/, "Tên chỉ được chứa chữ cái."),
//       address: yup
//         .string()
//         .required("Địa chỉ không được bỏ trống!"),
//       phone: yup
//         .string()
//         .required("Số điện thoại không được bỏ trống!")
//         .matches(/^\d+$/, "Vui lòng chỉ điền số!")
//         .min(10, "Số điện tối thiểu là 10 số!")
//         .max(10, "Số điện tối đa là 10 số!"),
//       dob: yup
//         .string()
//         .required("Ngày sinh không được bỏ trống!"),
//     }),
//     onSubmit: (values) => {
//       const submitValues = {
//         ...values,
//         dob: new Date(values.dob), // Chuyển đổi dob từ `string` sang `Date`
//       };
//       console.log(submitValues);
//       // const actionApi = changeProfileAsyncAction(submitValues);
//       // dispatch(actionApi);
//     },
//   });

//   return (
//     <div className="container mx-auto xl:max-w-[1220px] mt-4">
//       <h1 className="text-[32px] font-extrabold text-[#484848] mb-8">
//         Thông tin cá nhân
//       </h1>
//       <div className="grid md:grid-cols-3 gap-3">
//         <div className="col-span-2 md:me-[20px] lg:me-[88px]">
//           <form onSubmit={changeProfileFrm.handleSubmit}>
//             <div className="flex flex-col">

//               <div className="flex flex-row items-start justify-between mt-6">
//                 <h2>Tên pháp lý</h2>
//                 <button type="button" className="text-black font-bold underline" onClick={isEditingName ? handleCancelName : handleEditName}>
//                   {isEditingName ? "Hủy" : "Chỉnh sửa"}
//                 </button>
//               </div>
//               {isEditingName ? (
//                 <div>
//                   <input
//                     id="fullname"
//                     name="fullname"
//                     onChange={changeProfileFrm.handleChange}
//                     onBlur={changeProfileFrm.handleBlur}
//                     value={changeProfileFrm.values.fullname}
//                     className="border-2 border-gray-300 w-full rounded p-3"
//                   />
//                   {changeProfileFrm.errors.fullname && (
//                     <p className="text-rose-500 text-sm flex items-center">
//                       <RiErrorWarningFill /> &nbsp;{changeProfileFrm.errors.fullname}
//                     </p>
//                   )}
//                   <button type="submit" className="text-white bg-black rounded-xl px-[24px] py-[14px] font-bold block my-4">Lưu</button>
//                 </div>
//               ) : (
//                 <p className="text-sm text-gray-500 mb-6">
//                   {storedUserLogin?.user.fullname}
//                 </p>
//               )}
//               <hr />

//               <div className="flex flex-row items-start justify-between mt-6">
//                 <h2>Số điện thoại</h2>
//                 <button type="button" className="text-black font-bold underline" onClick={isEditingPhone ? handleCancelPhone : handleEditPhone}>
//                   {isEditingPhone ? "Hủy" : "Chỉnh sửa"}
//                 </button>
//               </div>
//               {isEditingPhone ? (
//                 <div>
//                   <input
//                     id="phone"
//                     name="phone"
//                     onChange={changeProfileFrm.handleChange}
//                     onBlur={changeProfileFrm.handleBlur}
//                     value={changeProfileFrm.values.phone}
//                     className="border-2 border-gray-300 w-full rounded p-3"
//                   />
//                   {changeProfileFrm.errors.phone && (
//                     <p className="text-rose-500 text-sm flex items-center">
//                       <RiErrorWarningFill /> &nbsp;{changeProfileFrm.errors.phone}
//                     </p>
//                   )}
//                   <button type="submit" className="text-white bg-black rounded-xl px-[24px] py-[14px] font-bold block my-4">Lưu</button>
//                 </div>
//               ) : (
//                 <p className="text-sm text-gray-500 mb-6">
//                   {storedUserLogin?.user.phone}
//                 </p>
//               )}
//               <hr />

//               <div className="flex flex-row items-start justify-between mt-6">
//                 <h2>Ngày tháng năm sinh</h2>
//                 <button type="button" className="text-black font-bold underline" onClick={isEditingBirthday ? handleCancelBirthday : handleEditBirthday}>
//                   {isEditingBirthday ? "Hủy" : "Chỉnh sửa"}
//                 </button>
//               </div>
//               {isEditingBirthday ? (
//                 <div>
//                   <input
//                     id="dob"
//                     name="dob"
//                     type="date"
//                     onChange={changeProfileFrm.handleChange}
//                     onBlur={changeProfileFrm.handleBlur}
//                     value={changeProfileFrm.values.dob} // Giá trị dob là chuỗi
//                     className="border-2 border-gray-300 w-full rounded p-3"
//                   />
//                   {changeProfileFrm.errors.dob && (
//                     <p className="text-rose-500 text-sm flex items-center">
//                       <RiErrorWarningFill /> &nbsp;{changeProfileFrm.errors.dob}
//                     </p>
//                   )}
//                   <button type="submit" className="text-white bg-black rounded-xl px-[24px] py-[14px] font-bold block my-4">Lưu</button>
//                 </div>
//               ) : (
//                 <p className="text-sm text-gray-500 mb-6">
//                   {storedUserLogin?.user.dob}
//                 </p>
//               )}
//               <hr />

//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
