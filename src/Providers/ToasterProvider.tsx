import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ToasterProvider() {
  return (
    <>
      {/* Các thành phần khác */}
      <ToastContainer /> {/* Thêm ToastContainer để thông báo hiện lên */}
    </>
  );
}

export default ToasterProvider;
