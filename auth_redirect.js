// auth_redirect.js — njs script for auth-aware redirect
//
// Checks whether the user has a valid oauth2-proxy session by making
// a subrequest to /oauth2/auth (proxied to oauth2-proxy in-cluster).
//
// Flow:
//   1. If no _oauth2_proxy cookie → skip auth check, serve landing (fast path)
//   2. If cookie present → subrequest to oauth2-proxy /oauth2/auth
//      a. 2xx → session valid → 302 redirect to app.curiabots.com
//      b. 401 → session invalid/expired → serve landing normally
//      c. Error → serve landing (fail-open for anonymous content)

async function checkAuthAndRedirect(r) {
    // Fast path: no oauth2 cookie → serve landing directly.
    // This avoids an extra network hop for the vast majority of visitors
    // who have never authenticated.
    let cookie = r.headersIn['Cookie'] || '';
    if (!cookie.includes('_oauth2_proxy=')) {
        r.internalRedirect('@landing');
        return;
    }

    try {
        let res = await r.subrequest('/oauth2/auth');
        if (res.status >= 200 && res.status < 300) {
            // Valid session → redirect to the authenticated app
            r.return(302, 'https://app.curiabots.com');
        } else {
            // Invalid/expired session → serve landing
            r.internalRedirect('@landing');
        }
    } catch (e) {
        // Auth check failed (oauth2-proxy unreachable, etc.) → fail-open
        // and serve the landing page rather than breaking the site.
        r.internalRedirect('@landing');
    }
}

export default { checkAuthAndRedirect };
