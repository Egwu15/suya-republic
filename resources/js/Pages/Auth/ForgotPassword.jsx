import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../../assets/img/suya/Mobile-Logo.png";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 custom-bg">
            {/* <GuestLayout> */}
            {/* <Head title="Forgot Password" /> */}
            {/* <ToastContainer /> */}
            <div
                className="card p-4 shadow"
                style={{ maxWidth: "400px", width: "100%" }}
            >
                <div className="text-center mb-4">
                    <img
                        src={logo}
                        alt=""
                        className="home-logo"
                        style={{ height: "50px" }}
                    />
                    <br />{" "}
                    <Link href="/" className="text-decoration-none">
                        Go Back To Home
                    </Link>{" "}
                </div>

                <div className="mb-4 text-sm text-gray-600">
                    <h4> Forgot your password?</h4>
                    No problem. Just let us know your email address and we will
                    email you a password reset link that will allow you to
                    choose a new one.
                </div>

                {status && (
                    <div className="mb-4 text-sm font-medium text-green-600">
                        {status}
                    </div>
                )}

                <form onSubmit={submit}>
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={data.email}
                        className="mt-1 block w-full form-control"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    <InputError
                        message={errors.email}
                        className="mt-2 text-danger"
                    />

                    <div className="mt-4 ">
                        <PrimaryButton
                            className="ms- btn btn-dark w-100"
                            disabled={processing}
                        >
                            Email Password Reset Link
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
        // </GuestLayout>
    );
}
