import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, useForm } from "@inertiajs/react";
import "./auth.css";
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
        <div className="container-fluid">
            <div className="row" style={{ height: "100vh" }}>
                <div className="col-12 background-img order-1 order-md-2 col-md-6 col-lg-6 px-2">
                    <div className="">
                        <div className="d-md-none  d-flex mb-4 px-5 ">
                            <img
                                src={logo}
                                alt="Logo"
                                className="img-fluid"
                                style={{ height: "50px" }}
                            />
                        </div>{" "}
                        <div className="text-center mb-4">
                            <h2 className="alpha-text text-warning mb-3">
                                The pure taste of
                            </h2>
                            <h2 className="gro text-white">Naija</h2>
                            <p className="poppins-heading text-center px-3 mt-3">
                                We Cure your Nostalgia with our Tasty Suya. Get
                                you Spicy Suya anywhere, anytime within the UK.
                            </p>
                        </div>
                    </div>
                </div>

                {/* LOGIN FORM - SHOWS SECOND ON MOBILE */}
                <div className="col-12 order-2 order-md-1 col-md-6 col-lg-6 d-flex align-items-center">
                    <div className="bg-white container p-4">
                        <div className="col-md-8 mx-auto ">
                            <div className="d-md-flex  d-none mb-4">
                                <img
                                    src={logo}
                                    alt="Logo"
                                    className="img-fluid"
                                    style={{ height: "50px" }}
                                />
                            </div>
                            <h4 className="mt-2 fw-bold mb-4">
                                Reset Password{" "}
                            </h4>
                            <p>
                                Input your verified email address to receive the
                                verification code for your password reset.
                            </p>
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
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.email}
                                    className="mt-2 text-danger"
                                />

                                <div className="mt-4 ">
                                    <PrimaryButton
                                        className="ms- btn bg-red rounded w-100"
                                        disabled={processing}
                                    >
                                        Email Password Reset Link
                                    </PrimaryButton>
                                </div>
                                <p className="text-center py-3">
                                    Already have one?{" "}
                                    <Link
                                        href={"/login"}
                                        className="mx-2 text-red fw-bold  text-decoration-none w-100"
                                    >
                                        Log in
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
