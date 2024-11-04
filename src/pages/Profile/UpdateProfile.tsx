import React, { useEffect, useState } from 'react';
import { Button, Col, DatePicker, Drawer, Input, Row, Select, Space, Form, Upload, message } from 'antd';
import { userProfileApi } from '../../redux/reducers/userReducer'
import moment, { Moment } from 'moment';
import axios from 'axios';
import { getProvince } from '../../Hooks/useAddress/useAddress';
import addressData from '../../Hooks/useAddress/address.json';
import { RcFile, UploadFile } from 'antd/es/upload';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/configStore';
import { PlusOutlined } from '@ant-design/icons';
import {  useForm } from 'react-hook-form'
const UpdateProfile: React.FC = () => {
  const { userProfile } = useSelector((state: RootState) => state.userReducer)
  const [avatar, setAvatar] = useState<RcFile>()
  const [open, setOpen] = useState(false);
  const [selectedProvinceId, setSelectedProvinceId] = useState<string>('');
  // const [fileList, setFileList] = useState([]);
  const [form] = Form.useForm();
  const { control } = useForm();
  const getDistrictsByProvinceId = (provinceId: string) => {
    return addressData.district.filter(d => d.provinceId === provinceId);
  };

  const dob: Moment | null = userProfile?.dob
    ? moment(userProfile.dob, "YYYY-MM-DD")
    : null;




  // của hiển thị drawer
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  // của form
  const onFinish = (values: userProfileApi) => {
    // const payload = {
    //   ...values,
    //   avatar: values.avatar?.file?.oringinFileObj
    // }
    const dataForm = Object.assign(values,{
      avatar
    })
    
    console.log('Success:', moment(values.dob).format('YYYY-MM-DD'));
    updateProfile(values)
    console.log(dataForm);


  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };




  // Gọi api để thay đổi dữ liệu trên server
  const updateProfile = async (values: userProfileApi) => {
    const accessToken = localStorage.getItem('access_token');
    console.log(accessToken)
    try {
      const response = await axios.patch('https://api.easyjob.io.vn/api/v1/self', {
        ...values,
        // dob: moment(values.dob).format('YYYY-MM-DD'),
        // provinceId: values.provinceId,
        // districtId: values.districtId,
        // avatar: values.avatar



      }, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        message.success('Cập nhật thông tin thành công');
        onClose();
      }
    } catch (error) {
      message.error('Có lỗi xảy ra khi cập nhật thông tin');
      console.error(error);
    }
  };

  useEffect(() => {
    if (dob) {
      form.setFieldsValue({ dob });
    }
  }, [dob, form]);

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  console.log(userProfile)

  // upload picture
  const fileList: UploadFile[] = [
    {
      uid: '-1',
      name: 'yyy.png',
      status: 'done',
      url: userProfile?.avatar,
    },

  ];
  const handleBeforUpload = (file: RcFile )=>{
    setAvatar(file)
    console.log(file)
    return false 
  }


  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Chỉnh sửa thông tin
      </Button>
      <Drawer
        title="Chỉnh sửa thông tin"
        width={720}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary" htmlType="submit" form="updateProfileForm">
              Submit
            </Button>
          </Space>
        }
      >
        <Form 
        initialValues={{
          fullname: userProfile?.fullname || 'Chưa có thông tin ',
          phone: userProfile?.phone || 'Chưa có thông tin ',
          email: userProfile?.email || 'Chưa có thông tin ',
          dob: dob,
          address: userProfile?.address || 'Chưa có thông tin ',
          provinceId: userProfile?.provinceId ? getProvince(userProfile.provinceId.toString())?.name : 'Chưa cập nhật',
          districtId: userProfile?.districtId ? getProvince(userProfile.districtId.toString())?.name : 'Chưa cập nhật',
          skillIds: [1, 2, 3]

        }} layout="vertical" id="updateProfileForm" onFinish={onFinish}
          onFinishFailed={onFinishFailed}>
          <Row gutter={16}>
            <Col span={24}>

              <Form.Item name="avatar" label="Avatar" getValueFromEvent={normFile}>
                <Upload maxCount={1} listType="picture-card" defaultFileList={fileList} beforeUpload={handleBeforUpload}  
                >
                  <button style={{ border: 0, background: 'none' }} type="button">
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </button>
                </Upload>
               
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="fullname"
                label="Họ và tên"
                rules={[{ message: 'Hãy nhập tên của bạn !!' }]}
              >
                <Input placeholder={userProfile?.fullname || 'Chưa cập nhật'} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="email"
                label="Họ và tên"
                rules={[{ message: 'Hãy nhập tên của bạn !!' }]}
              >
                <Input disabled placeholder={userProfile?.email} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="phone"
                label="Số điện thoại"
                rules={[
                  {
                    pattern: /^(0|84)(3|5|7|8|9)[0-9]{8}$/,
                    message: 'Số điện thoại không hợp lệ!'
                  }
                ]}
              >
                <Input
                  placeholder="Nhập số điện thoại của bạn"
                  maxLength={10}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="dob"
                label="Ngày sinh"
              >
                <DatePicker
                  format="YYYY-MM-DD"
                  style={{ width: '100%' }}
                />
              </Form.Item>
            </Col>

          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                name="address"
                label="Địa chỉ"
              >
                <Input value={userProfile?.address} placeholder="Nhập địa chỉ" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="provinceId"
                label="Tỉnh / Thành phố"
              >
                <Select
                  placeholder="Chọn tỉnh/thành phố"
                  onChange={(value) => setSelectedProvinceId(value)}
                >
                  {addressData.province.map(p => (
                    <Select.Option key={p.id} value={p.id}>
                      {p.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="districtId"
                label="Quận / Huyện"
              >
                <Select
                  placeholder="Chọn quận/huyện"
                  disabled={!selectedProvinceId}
                >
                  {selectedProvinceId && getDistrictsByProvinceId(selectedProvinceId).map(d => (
                    <Select.Option key={d.id} value={d.id}>
                      {d.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>

          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="skillIds"
                label="Skill"

              >
                <Input placeholder={'skill'} disabled />
              </Form.Item>
            </Col>

          </Row>


        </Form>
      </Drawer>
    </>
  );
};

export default UpdateProfile;