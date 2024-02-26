export class Router {
    routes = {}

    add(routeName, page, bg) {
        this.routes[routeName] = {page, bg};
    }

    route(href) {
        window.history.pushState({}, "", href);
        this.handle();
    }

    handle() {
        const { pathname } = window.location;
        const route = this.routes[pathname];
    
        fetch(route.page).then(data => data.text()).then(html => {
            document.querySelector("#app").innerHTML = html
            document.body.style.backgroundImage = `url(../assets/${route.bg})`
        })
    }
}