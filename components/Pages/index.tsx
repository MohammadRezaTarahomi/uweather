import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';
import { Span } from 'next/dist/trace';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles
  let name = "خوش آمدید"


  return (
    <div style={{ direction: "rtl", minHeight: "11vh", }}>
      <br-x />
      <Window title={name} 
      style={{ minHeight: 200, margin: 10, width: "calc(100% - 20px)", 
        backgroundImage:'url("https://cdn.ituring.ir/research/51/bg2.webp")',
        backgroundSize:"cover"
      }}>
      <div style={{direction: "ltr", fontFamily:"vin", fontSize:25}}>
        <c-x>
        <br/>
        <br/>
        <center>Weather </center> 
        <br/>
        <br/>
      
        <f-cse>
        <f-cc style={{height:80, width: 250, backgroundColor:"white" ,borderRadius: 15}} >
            <img src= "https://cdn.ituring.ir/research/51/temp2.webp"
              style={{height: 30, objectFit: "contain" }}/>
              <sp-3/>
          <f-cc>
              <f-20>Feels like:</f-20>
              <sp-3/>
              <f-20>{props.feelslikec}</f-20>
              <f-20>°</f-20>
              <f-20>C</f-20>
          </f-cc>
         </f-cc>


          <f-cc style={{height:80, width: 250, backgroundColor:"white" ,borderRadius: 15}} >
            <img src= "https://cdn.ituring.ir/research/51/temp3.webp"
              style={{height: 30, objectFit: "contain" }}/>
              <sp-3/>
          <f-cc>
              <f-20>Humidity:</f-20>
              <sp-3/>
              <f-20>{props.humidity}</f-20>
              <f-20>%</f-20>
              
          </f-cc>
          </f-cc>
        </f-cse>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <f-cc style={{width:"100"}}>
          <f-18>junior team</f-18>
        </f-cc>
       </c-x>
             

      </div>

      </Window>
    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;

    let data =  await (await fetch("http://cdn.ituring.ir/research/api/weather")).json()
    
    let feelslikec = data.current_condition[0].FeelsLikeC
    let humidity = data.current_condition[0].humidity
    
    
    

  return {
    props: {
      data: global.QSON.stringify({
        session,
        feelslikec,
        humidity,
        

        // nlangs,
      })
    },
  }
}