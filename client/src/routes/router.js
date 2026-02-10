import { Login } from '../pages/login.js'
import  Home   from '../pages/home.js'

const routes = {
    '/': Home,
    '/login': Login
}


export function router(){
    const path = window.location.pathname
    const page = routes[path] || Home

    const app = document.getElementById('app')

    app.innerHTML = page()

    window.scrollTo(0,0)
}

export function navigate(path) {
    window.history.pushState({}, '',path)
    router()
}

window.addEventListener('popstate', router)