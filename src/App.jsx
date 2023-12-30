import React from 'react'
import Card from'./components/card'

function App() {
let data=[
  {
    plan:"Free",
    price:0,
    user:"single User",
    isuser:true,
    Storage:"5 GB",
    isStorage:true,
    publicProjects:"Unlimited Public Projects",
    isPublicProjects:true,
    communityAccess:"community Access",
iscommunityAccess:true,
privateProjects:"Unlimited Private Projects",
isprivateProjects:false,
phoneSupport:"Dediacted Phone Support",
isphoneSupport:false,
subDomain:"Free Subdomain",
isSubdomain:false,
reports:"Monthly status Reports",
isReports:false
  },
  {
    plan:"PLUS",
    price:9,
    user:"5 User",
    isuser:true,
    Storage:"50 GB",
    isStorage:true,
    publicProjects:"Unlimited Public Projects",
    isPublicProjects:true,
    communityAccess:"community Access",
iscommunityAccess:true,
privateProjects:"Unlimited Private Projects",
isprivateProjects:true,
phoneSupport:"Dediacted Phone Support",
isphoneSupport:true,
subDomain:"Free Subdomain",
isSubdomain:true,
reports:"Monthly status Reports",
isReports:false
  },
  {
  plan:"PRO",
    price:49,
    user:"Unlimited User",
    isuser:true,
    Storage:"150 GB",
    isStorage:true,
    publicProjects:"Unlimited Public Projects",
    isPublicProjects:true,
    communityAccess:"community Access",
iscommunityAccess:true,
privateProjects:"Unlimited Private Projects",
isprivateProjects:true,
phoneSupport:"Dediacted Phone Support",
isphoneSupport:true,
subDomain:" unlimited Free Subdomains",
isSubdomain:true,
reports:"Monthly status Reports",
isReports:true
}
]
return <>
  <section className="pricing py-5">
  <div className="container">
    <div className="row">
      
     {
      data.map((e,i)=>{
        return <Card data={e} key={i}/>
      })
     }
       </div>
    </div>
 </section>
 </>
}
  export default App
