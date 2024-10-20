import { useRef, useEffect } from 'react';
import styles from './index.module.css';

type Props = {};

function Index({ }: Props) {
    // Tạo tham chiếu đến container và các nút
    const containerRef = useRef<HTMLDivElement>(null);
    const btnSignInRef = useRef<HTMLButtonElement>(null);
    const btnSignUpRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const btnSignIn = btnSignInRef.current;
        const btnSignUp = btnSignUpRef.current;
    
        const handleSignInClick = () => {
            if (container) container.classList.add('active');
        };
    
        const handleSignUpClick = () => {
            if (container) container.classList.remove('active');
        };
    
        if (btnSignIn && btnSignUp && container) {
            btnSignIn.addEventListener('click', handleSignInClick);
            btnSignUp.addEventListener('click', handleSignUpClick);
        }
    
        // Cleanup để loại bỏ sự kiện khi component unmount
        return () => {
            if (btnSignIn && btnSignUp) {
                btnSignIn.removeEventListener('click', handleSignInClick);
                btnSignUp.removeEventListener('click', handleSignUpClick);
            }
        };
    }, []);
    

    return (
        // <div className={styles.container} ref={containerRef}>
        //     <div className={styles.box}>
        //         <div className={`${styles.form} ${styles.sign_in}`}>
        //             <h3>Sign In</h3>
        //             <span>or use your account</span>

        //             <form action="#" id="form_input">
        //                 <div className={`${styles.type}`}>
        //                     <input type={styles.email} placeholder="Email" name="" id="email" />
        //                 </div>
        //                 <div className={styles.type}>
        //                     <input type={styles.password} placeholder="Password" name="" id="password" />
        //                 </div>

        //                 <div className={styles.forgot}>
        //                     <span>Forgot your password?</span>
        //                 </div>

        //                 <button className={`${styles.btn} ${styles.bkg}`}>Sign In</button>
        //             </form>
        //         </div>

        //         <div className={`${styles.form} ${styles.sign_up}`}>
        //             <h3>Sign Up</h3>
        //             <span>or use your email for register</span>

        //             <form action="#" id="form_input">
        //                 <div className={styles.type}>
        //                     <input type="text" name="" placeholder="Name" id="name" />
        //                 </div>
        //                 <div className={styles.type}>
        //                     <input type="email" name="" placeholder="Email" id="email" />
        //                 </div>
        //                 <div className={styles.type}>
        //                     <input type="password" name="" placeholder="Password" id="password" />
        //                 </div>

        //                 <button className={`${styles.btn} ${styles.bkg}`}>Sign Up</button>
        //             </form>
        //         </div>
        //     </div>

        //     <div className={styles.overlay}>
        //         <div className={`${styles.page} ${styles.page_signIn}`}>
        //             <h3>Welcome Back!</h3>
        //             <p>To keep with us please login with your personal info</p>

        //             <button className={`${styles.btn} ${styles['btnSign-in']}`} ref={btnSignInRef}>
        //                 Sign Up <i className="bi bi-arrow-right"></i>
        //             </button>
        //         </div>

        //         <div className={`${styles.page} ${styles.page_signUp}`}>
        //             <h3>Hello Friend!</h3>
        //             <p>Enter your personal details and start journey with us</p>

        //             <button className={`${styles.btn} ${styles['btnSign-up']}`} ref={btnSignUpRef}>
        //                 <i className="bi bi-arrow-left"></i> Sign In
        //             </button>
        //         </div>
        //     </div>
        // </div>


        <div className="container">
        <div className="box">
            <div className="form sign_in">
                <h3>Sign In</h3>
                <span>or use your account</span>

                <form action="#" id="form_input">
                    <div className="type">
                        <input type="email" placeholder="Email" name="" id="email" />

                    </div>
                    <div className="type">
                        <input type="password" placeholder="Password" name="" id="password" />

                    </div>

                    <div className="forgot">
                        <span>Forgot your password?</span>
                    </div>

                    <button className="btn bkg">Sign In</button>
                </form>
            </div>
    
            <div className="form sign_up">
                <h3>Sign Up</h3>
                <span>or use your email for register</span>

                <form action="#" id="form_input">
                    <div className="type">

                        <input type="text" name="" placeholder="Name" id="name" />
                    </div>
                    <div className="type">
                        
                        <input type="email" name="" placeholder="Email" id="email" />
                    </div>
                    <div className="type">

                        <input type="password" name="" placeholder="Password" id="password" />
                    </div>

                    <button className="btn bkg">Sign Up</button>
                </form>
            </div>
        </div>

        <div className="overlay">
            <div className="page page_signIn">
                <h3>Welcome Back!</h3>
                <p>To keep with us please login with your personal info</p>

                <button className="btn btnSign-in">Sign Up <i className="bi bi-arrow-right"></i></button>
            </div>

            <div className="page page_signUp">
                <h3>Hello Friend!</h3>
                <p>Enter your personal details and start journey with us</p>

                <button className="btn btnSign-up">
                    <i className="bi bi-arrow-left"></i> Sign In</button>
            </div>
        </div>
    </div>
    );
}

export default Index;
