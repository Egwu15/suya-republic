import "../css/app.css";
// import "../css/main.css";
import "./bootstrap";

import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";
import {Elements} from "@stripe/react-stripe-js";
const appName = import.meta.env.VITE_APP_NAME || "Suya Republick";

createInertiaApp({
    title: (title) => `${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);
        const stripe = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
        root.render(
            <Elements stripe={stripe}>
            <App {...props} />
            </Elements>
        );
    },
    progress: {
        color: "#4B5563",
    },
});

import "bootstrap/dist/css/bootstrap.min.css";
import {loadStripe} from "@stripe/stripe-js";

