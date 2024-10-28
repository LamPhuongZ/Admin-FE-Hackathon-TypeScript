import React, { useState } from 'react';
import { Input, Space } from 'antd';


const { Search } = Input;


export default function SearchInput() {
    const [searchValue, setSearchValue] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        setSearchValue(e.target.value);
    };
    
    return (
        <Space direction="vertical">
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          value={searchValue}
          onChange={handleChange}
        />
      </Space>
    )
}
