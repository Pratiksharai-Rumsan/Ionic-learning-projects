import { IonButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"

const Tabs1:React.FC =()=>{
    return (
        <IonPage>
<IonHeader>
    <IonToolbar>
        <IonTitle>Tabs</IonTitle>
        <IonButtons slot="end">
<IonButton routerLink="/" routerDirection="root">
    Logout
</IonButton>
        </IonButtons>
    </IonToolbar>
</IonHeader>
<IonContent>
<IonButton routerLink="/app/tab1/details" expand="full">
    Go deeeper
</IonButton>
<IonButton routerLink="/detailsonly" expand="full">
    Go details outside !!
</IonButton>

</IonContent>
</IonPage>
    )
}

export default Tabs1