import { IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from "@ionic/react"
import { Redirect, Route } from "react-router-dom"
import {ellipse,triangle} from 'ionicons/icons'
import Tabs1 from "./Tabs1"
import Tabs2 from "./Tabs2"
import Details from "./Details"


const Tabs:React.FC =()=>{
    return (
        <IonTabs>
            <IonRouterOutlet>
            <Route exact path='/app/tab1'component={Tabs1}/>
            <Route exact path='/app/tab1/details' component={Details}/>
            <Route exact path='/app/tab2' component={Tabs2}/>

                <Route exact path='/app'>
                    <Redirect to='/app/tab1'/>

                </Route>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">

<IonTabButton tab="tab1" href="/app/tab1">
    <IonIcon icon={ellipse}></IonIcon>
    <IonLabel>Tab1</IonLabel>
</IonTabButton>

<IonTabButton tab="tab2" href="/app/tab2">
    <IonIcon icon={triangle}></IonIcon>
    <IonLabel>Tab2</IonLabel>
</IonTabButton>
            </IonTabBar>
        </IonTabs>
    )
}

export default Tabs