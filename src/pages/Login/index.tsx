import React, { useEffect, useRef, useState } from "react";
// import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from "../../assets/images/logo-company.png";

const IndexPage: React.FC = () => {
  const [active, setActive] = useState<boolean>(true);

  const toggleActive = () => {
    setActive(!active);
  };

  // Tạo tham chiếu đến container và các nút
  const containerRef = useRef<HTMLDivElement>(null);
  const btnSignInRef = useRef<HTMLButtonElement>(null);
  const btnSignUpRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const btnSignIn = btnSignInRef.current;
    const btnSignUp = btnSignUpRef.current;

    const handleSignInClick = () => {
      if (container) container.classList.add("active");
    };

    const handleSignUpClick = () => {
      if (container) container.classList.remove("active");
    };

    if (btnSignIn && btnSignUp && container) {
      btnSignIn.addEventListener("click", handleSignInClick);
      btnSignUp.addEventListener("click", handleSignUpClick);
    }

    // Cleanup để loại bỏ sự kiện khi component unmount
    return () => {
      if (btnSignIn && btnSignUp) {
        btnSignIn.removeEventListener("click", handleSignInClick);
        btnSignUp.removeEventListener("click", handleSignUpClick);
      }
    };
  }, []);

  return (
    <div className={`flex justify-center items-center min-h-screen w-full`}>
      <div
         className={`relative w-3/5 h-[650px] shadow-[rgba(0,0,0,0.25)_0px_14px_28px,rgba(0,0,0,0.22)_0px_10px_10px] rounded-3xl overflow-hidden flex ${
          active ? "transform transition-all duration-[1.5s]" : ""
        }`}
      >
        {/* Sign In/Up Forms */}
        <div
           className={`relative w-1/2 flex flex-col items-center justify-center text-center bg-white transition-transform duration-[1.15s] ${
            active ? "translate-x-full" : ""
          }`}
        >
          {/* Sign In Form */}
          <div
             className={`absolute w-full h-full flex flex-col items-center justify-center text-center transition-opacity duration-1000 ${
              active ? "opacity-0 z-0" : "opacity-100 z-50"
            }`}
          >
            <img src={logo} alt="img-logo" />
            <h3 className="text-4xl text-gray-800">Sign In</h3>
            <span className="text-gray-600">or use your account</span>
            <form className="mt-6">
              <div className="mb-6">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-80 h-12 bg-gray-200 px-4 text-lg"
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-80 h-12 bg-gray-200 px-4 text-lg"
                />
              </div>
              <div className="text-sm mb-4">
                <span className="text-gray-600 cursor-pointer">
                  Forgot your password?
                </span>
              </div>
              <button
                type="button"
                className="bg-[#3e8fff] text-white py-3 px-12 rounded-full"
              >
                Sign In
              </button>
            </form>
          </div>

          {/* Sign Up Form */}
          <div
             className={`absolute w-full h-full flex flex-col items-center justify-center text-center transition-opacity duration-1000 ${
              active ? "opacity-100 z-50" : "opacity-0 z-0"
            }`}
          >
            <img src={logo} alt="img-logo" />
            <h3 className="text-4xl text-gray-800">Sign Up</h3>
            <span className="text-gray-600">
              or use your email for registration
            </span>
            <form className="mt-6">
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-80 h-12 bg-gray-200 px-4 text-lg"
                />
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-80 h-12 bg-gray-200 px-4 text-lg"
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-80 h-12 bg-gray-200 px-4 text-lg"
                />
              </div>
              <button
                type="button"
                className="bg-[#3e8fff] text-white py-3 px-12 rounded-full"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>

        {/* Overlay */}
        <div
          className={`w-1/2 bg-[#3e8fff] flex flex-col items-center justify-center text-center transition-transform duration-[1.5s] ${
            active ? "-translate-x-full" : "translate-x-0"
          }`}
        >
          {/* Sign In Side */}
          <div
            className={`absolute flex flex-col items-center justify-center gap-5 h-full w-[450px] transition-transform duration-1000 ${
              active ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            <h3 className="text-4xl text-white">Welcome Back!</h3>
            <p className="text-lg text-white font-semibold mb-4">
              To keep connected with us please login with your personal info
            </p>
            <button
              onClick={toggleActive}
              className="text-white py-3 px-12 border border-white rounded-full"
            >
              Sign Up <i className="bi bi-arrow-right ml-2"></i>
            </button>
          </div>

          {/* Sign Up Side */}
          <div
            className={`absolute flex flex-col items-center justify-center gap-5 h-full w-[430px] transition-opacity duration-1000 ${
              active ? "opacity-100 ml-0" : "opacity-0"
            }`}
          >
            <h3 className="text-4xl text-white">Hello Friend!</h3>
            <p className="text-lg text-white font-semibold mb-4">
              Enter your personal details and start your journey with us
            </p>
            <button
              onClick={toggleActive}
              className="text-white py-3 px-12 border border-white rounded-full"
            >
              <i className="bi bi-arrow-left mr-2"></i> Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className={styles.container} ref={containerRef}>
  //     <div className={styles.box}>
  //       <div className={`${styles.form} ${styles.sign_in}`}>
  //         <h3>Sign In</h3>
  //         <span>or use your account</span>

  //         <form action="#" id="form_input">
  //           <div className={`${styles.type}`}>
  //             <input type={styles.email} placeholder="Email" name="" id="email" />
  //           </div>
  //           <div className={styles.type}>
  //             <input type={styles.password} placeholder="Password" name="" id="password" />
  //           </div>

  //           <div className={styles.forgot}>
  //             <span>Forgot your password?</span>
  //           </div>

  //           <button className={`${styles.btn} ${styles.bkg}`}>Sign In</button>
  //         </form>
  //       </div>

  //       <div className={`${styles.form} ${styles.sign_up}`}>
  //         <h3>Sign Up</h3>
  //         <span>or use your email for register</span>

  //         <form action="#" id="form_input">
  //           <div className={styles.type}>
  //             <input type="text" name="" placeholder="Name" id="name" />
  //           </div>
  //           <div className={styles.type}>
  //             <input type="email" name="" placeholder="Email" id="email" />
  //           </div>
  //           <div className={styles.type}>
  //             <input type="password" name="" placeholder="Password" id="password" />
  //           </div>

  //           <button className={`${styles.btn} ${styles.bkg}`}>Sign Up</button>
  //         </form>
  //       </div>
  //     </div>

  //     <div className={styles.overlay}>
  //       <div className={`${styles.page} ${styles.page_signIn}`}>
  //         <h3>Welcome Back!</h3>
  //         <p>To keep with us please login with your personal info</p>

  //         <button className={`${styles.btn} ${styles['btnSign-in']}`} ref={btnSignInRef}>
  //           Sign Up <i className="bi bi-arrow-right"></i>
  //         </button>
  //       </div>

  //       <div className={`${styles.page} ${styles.page_signUp}`}>
  //         <h3>Hello Friend!</h3>
  //         <p>Enter your personal details and start journey with us</p>

  //         <button className={`${styles.btn} ${styles['btnSign-up']}`} ref={btnSignUpRef}>
  //           <i className="bi bi-arrow-left"></i> Sign In
  //         </button>
  //       </div>
  //     </div>
  //   </div>

  // );
};

export default IndexPage;
