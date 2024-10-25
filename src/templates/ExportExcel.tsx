import React from "react";
import { Table, Button } from "antd";
import { Excel } from "antd-table-saveas-excel";
import type { ColumnsType, ColumnType } from "antd/es/table";

// Định nghĩa kiểu cột cho Excel
interface IExcelColumn {
  title: string;
  dataIndex: string;
  key?: string;
}

// Kiểu dữ liệu cho bảng
interface DataType {
  key: string;
  name: string;
  age: number;
  tel: string;
  phone: number;
  address: string;
}

const renderContent = (value: any, _row: DataType, index: number) => {
  const obj = {
    children: value,
    props: {} as { colSpan?: number; rowSpan?: number; style?: React.CSSProperties },
  };
  if (index === 4) {
    obj.props.colSpan = 0;
  }
  return obj;
};

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text: string, _row: DataType, index: number) => {
      if (index < 4) {
        return <a>{text}</a>;
      }
      return {
        children: <a>{text}</a>,
        props: {
          colSpan: 5,
        },
      };
    },
  },
  {
    title: "Age",
    dataIndex: "age",
    render: renderContent,
  },
  {
    title: "Home phone",
    colSpan: 2,
    dataIndex: "tel",
    render: (value: string, _row: DataType, index: number) => {
      const obj = {
        children: value,
        props: {} as { rowSpan?: number; colSpan?: number; style?: React.CSSProperties },
      };
      if (index === 2) {
        obj.props.rowSpan = 2;
        obj.props.style = { color: "red" };
      }
      if (index === 3) {
        obj.props.rowSpan = 0;
        obj.props.style = { color: "red" };
      }
      if (index === 4) {
        obj.props.colSpan = 0;
        obj.props.style = { color: "red" };
      }
      return obj;
    },
  },
  {
    title: "Phone",
    colSpan: 0,
    dataIndex: "phone",
    render: renderContent,
  },
  {
    title: "Address",
    dataIndex: "address",
    render: renderContent,
  },
];


// ====================================================
//                EXPORT EXCEL FILE
// ====================================================
// Dữ liệu cho bảng
// const data: DataType[] = originData;

// Dữ liệu cho bảng
const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    tel: "0571-22098909",
    phone: 18889898989,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    tel: "0571-22098333",
    phone: 18889898888,
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    tel: "0575-22098909",
    phone: 18900010002,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 18,
    tel: "0575-22098909",
    phone: 18900010002,
    address: "London No. 2 Lake Park",
  },
  {
    key: "5",
    name: "Jake White",
    age: 18,
    tel: "0575-22098909",
    phone: 18900010002,
    address: "Dublin No. 2 Lake Park",
  },
];

// Hàm kiểm tra kiểu
const isColumnType = (
  column: ColumnType<DataType> | any
): column is ColumnType<DataType> => {
  return !!column.dataIndex;
};

// Tạo kiểu cột cho Excel
const excelColumns: IExcelColumn[] = columns
  .filter(isColumnType) // Lọc các cột chỉ có dataIndex
  .map((col) => ({
    title: col.title as string,
    dataIndex: col.dataIndex as string,
  }));

type Props = {};

const ExportExcel: React.FC<Props> = () => {
  return (
    <div>
      <Button
        style={{
          marginBottom: 20,
        }}
        onClick={() => {
          const excel = new Excel();
          excel
            .addSheet("test")
            .addColumns(excelColumns) // Sử dụng excelColumns thay vì columns của Table
            .addDataSource(data)
            .saveAs("Data.xlsx");
        }}
      >
        Export File Excel
      </Button>
      <Table<DataType> bordered columns={columns} dataSource={data} />
    </div>
  );
};

export default ExportExcel;
