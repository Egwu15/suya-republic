import axios from 'axios';
window.axios = axios;
import { router } from '@inertiajs/react';

router.on('navigate', (event) => {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href,
            page_path: window.location.pathname,
        });
    }
});

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
