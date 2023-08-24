


// 1 router
const router = async () => {
    const routes = [
        {path: '/', view: () => console.log('Vue dashboard')},
        {path: '/posts', view: () => console.log('Vue posts')},
        {path: '/settings', view: () => console.log('Vue settings')},
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

  console.log(match.route.view())
}



//5
document.addEventListener("DOMContentLoaded", () =>{
    document.body.addEventListener("click", e => {
        //console.log(e)
        if(e.target.matches("[data-link]")){
            e.preventDefault()
        }
    })
    router()
})