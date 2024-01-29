import { IonLabel, IonSegment,IonSegmentButton } from "@ionic/react"

const InputControl:React.FC<{selectedVal:'mkg'|'ftlbs';onSelectVal:(value:'mkg'|'ftlbs')=>void}>=props=>{
    const inputChangeHandler =(event:CustomEvent)=>{
        props.onSelectVal(event.detail.value)

    }
    return (
        <IonSegment value={props.selectedVal} onIonChange={inputChangeHandler}>
            <IonSegmentButton value='mkg'>
                <IonLabel>m/kg</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value='ftlbs'>
                <IonLabel>
                    ft/lbs
                </IonLabel>
            </IonSegmentButton>
        </IonSegment>

    )
}

export default InputControl