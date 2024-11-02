import React from 'react';
import { RangePickerProps } from 'antd/es/date-picker'
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';

const onChange: RangePickerProps['onChange'] = (date, dateString) => {
    console.log(dateString);
  };

const App: React.FC = () => (
  <Space direction="vertical" size={12}>
    <RangePicker
      defaultValue={[dayjs('2015/01/01', dateFormat), dayjs('2015/01/01', dateFormat)]}
      format={dateFormat}
    />

<RangePicker onChange={onChange} />

  </Space>
);

export default App;