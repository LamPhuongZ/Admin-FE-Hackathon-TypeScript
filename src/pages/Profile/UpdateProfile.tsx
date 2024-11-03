import React, { useEffect, useState } from 'react';
import { Button, Col, DatePicker, Drawer, Input, Row, Select, Space, Form, Upload, message } from 'antd';
import { userProfileApi } from '../../redux/reducers/userReducer'
import { InboxOutlined } from '@ant-design/icons';
import moment, { Moment } from 'moment';
import axios from 'axios';
import { getDistrictIdByName, getProvinceIdByName } from '../../Hooks/useAddress/useAddress';
import addressData from '../../Hooks/useAddress/address.json';
import { getDataJsonStorage } from '../../Utils/utilMethod';
import { ACCESS_TOKEN } from '../../Utils/config';
import { RcFile } from 'antd/es/upload';
interface UpdateProfileProps {
  getUserProfile: userProfileApi | null;
}

const UpdateProfile: React.FC<UpdateProfileProps> = ({ getUserProfile }) => {
  const [open, setOpen] = useState(false);
  const [selectedProvinceId, setSelectedProvinceId] = useState<string>('');
  // const { Dragger } = Upload;
  const [form] = Form.useForm();
  const getDistrictsByProvinceId = (provinceId: string) => {
    return addressData.district.filter(d => d.provinceId === provinceId);
  };

  const dob: Moment | null = getUserProfile?.dob
    ? moment(getUserProfile.dob, "YYYY-MM-DD")
    : null;

  // const onChange = (info: any) => {
  //   const { status } = info.file;
  //   if (status !== 'uploading') {
  //     console.log(info.file, info.fileList);
  //   }
  //   if (status === 'done') {
  //     message.success(`${info.file.name} file uploaded successfully.`);
  //   } else if (status === 'error') {
  //     message.error(`${info.file.name} file upload failed.`);
  //   }
  // }

  // const onDrop = (e: any) => {
  //   console.log('Dropped files', e.dataTransfer.files);
  // }

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onFinish = (values: userProfileApi) => {
    // console.log('Success:', moment(values.dob).format('YYYY-MM-DD'));
    updateProfile(values)
    // console.log('Province ID:', values.provinceId);
    // console.log('District ID:', values.districtId);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  // const onChangeUpload = async (info: any) => {
  //   const { status, originFileObj } = info.file;
  //   if (status === 'uploading') {
  //     return;
  //   }
  //   if (status === 'done') {
  //     // Lấy response từ server sau khi upload thành công
  //     const imageUrl = info.file.response?.url;
  //     if (imageUrl) {
  //       message.success('Tải ảnh lên thành công');
  //       // Cập nhật avatar trong form
  //       form.setFieldsValue({ avatar: imageUrl });
  //     }
  //   } else if (status === 'error') {
  //     message.error('Tải ảnh lên thất bại');
  //   }
  // };

  // const beforeUpload = (file: RcFile) => {
  //   const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  //   if (!isJpgOrPng) {
  //     message.error('Chỉ chấp nhận file JPG/PNG!');
  //     return false;
  //   }
  //   const isLt2M = file.size / 1024 / 1024 < 2;
  //   if (!isLt2M) {
  //     message.error('Kích thước ảnh phải nhỏ hơn 2MB!');
  //     return false;
  //   }
  //   return true;
  // };



  const updateProfile = async (values: userProfileApi) => {
    const accessToken = localStorage.getItem('access_token');
    console.log(accessToken)
    try {
      const response = await axios.patch('https://api.easyjob.io.vn/api/v1/self', {
        ...values,
        dob: moment(values.dob).format('YYYY-MM-DD'),
        provinceId: values.provinceId,
        districtId: values.districtId
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
        <Form form={form} layout="vertical" id="updateProfileForm" onFinish={onFinish}
          onFinishFailed={onFinishFailed}>
          {/* <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="avatar"
                label="Avatar"

              >
                <Dragger name='file'
                  onChange={onChange} onDrop={onDrop} accept=".jpg,.jpeg,.png"
                >
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">Bấm hoặc kéo thả hình ảnh </p>

                </Dragger>
              </Form.Item>
            </Col>
          </Row> */}



          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="fullname"
                label="Họ và tên"
                rules={[{ message: 'Hãy nhập tên của bạn !!' }]}
              >
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="email"
                label="Email"
                rules={[{
                  type: 'email',
                  message: 'Email không đúng định dạng!'
                },
                ]}
              >
                <Input type='email' placeholder='Nhập email'></Input>
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
                rules={[{ required: true, message: 'Vui lòng chọn ngày sinh!' }]}
                initialValue={dob}
              >
                <DatePicker
                  format="YYYY-MM-DD"
                  style={{ width: '100%' }}
                  placeholder="Chọn ngày sinh"
                  getPopupContainer={(trigger) => trigger.parentElement!}
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
                <Input placeholder="Nhập địa chỉ" />
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
        </Form>
      </Drawer>
    </>
  );
};

export default UpdateProfile;