//6 load view
import Dashboard from "./views/Dashboard.js"
import Settings from "./views/Settings.js"
import Posts from "./views/Posts.js"

// 1 router
const router = async () => {
    const routes = [
        {path: '/', view: Dashboard},
        {path: '/posts', view: Posts},
        {path: '/settings', view: Settings},
    ]

//2 match function
   const potentialMatches = routes.map(route => {
        return{
            route: route,
            isMatch: location.pathname === route.path
     }
  })
 //console.log(potentialMatches)

 //3
  let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)

  if(!match){
    match = {
        route: routes[0],
        isMatch: true
    }
  }

  //console.log(match.route.view())

  //7 instance de la classse
  const view  = new match.route.view();

  document.querySelector("#app").innerHTML = await view.getHtml()
  
}
//4 recuperer le pathname
const navigateTo = url => {
    history.pushState(null, null, url)
    router()
}
//8 history

window.addEventListener('popstate', router)

//5
document.addEventListener("DOMContentLoaded", () =>{
    document.body.addEventListener("click", e => {
        //console.log(e)
        if(e.target.matches("[data-link]")){
            e.preventDefault()
            navigateTo(e.target.href)
        }
    })
    router()
})