// import JSONLocation from "./address.json";

import data from './address.json';

// Hàm lấy district dựa trên districtId
export const getDistrict = (districtId: string | number) => {
  return data.district.find((district) => district.id === String(districtId));
};

// Hàm lấy province dựa trên provinceId
export const getProvince = (provinceId: string | number) => {
  return data.province.find((province) => province.id === String(provinceId));
};

// export const useAddress = () => {
//   const getDistrict = (provinceId: string | number) => {
//     return JSONLocation.district.filter((district) => {
//       return district.provinceId === provinceId
//     })
//   }

//   const getWard = (districtId: string | number) => {
//     return JSONLocation.ward.filter((ward) => {
//       return ward.districtId === districtId
//     })
//   }

//   const getProvince = () => {
//     return JSONLocation.province
//   }

//   const buildAddressFromId = (payload: any) => {
//     const phuong: any = getWard(payload.quan_id).find(y => y.id === payload.phuong_id)?.name || "chưa xác định";
//     const quan: any = getDistrict(payload.tinh_thanh_id).find(y => y.id === payload.quan_id)?.name || "chưa xác định";
//     const thanhPho: any = getProvince().find(y => y.id === payload.tinh_thanh_id)?.name || "chưa xác định";

//     return payload.dia_chi + ", " + phuong + ", " + quan + ", " + thanhPho
//   }

//   return { getDistrict, getWard, getProvince, buildAddressFromId };
// }