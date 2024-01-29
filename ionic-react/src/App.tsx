
import { IonApp, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonRow, IonTitle, IonToolbar, setupIonicReact,IonAlert, } from '@ionic/react';

import { useRef,useState} from 'react';



/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import BmiResult from './components/BmiResult';
import BmiControl from './components/BmiControl';
import InputControl from './components/InputControl';

setupIonicReact();

const App: React.FC = () => {
const  [calculatedBmi,setCalculatedBmi] = useState<number>()
const [error, setError] = useState<string>()
const [calcUnits,setCalcUnits]=useState<'mkg' | 'ftlbs'>('mkg')
  const weightInputRef = useRef<HTMLIonInputElement>(null)
  const heightInputRef = useRef<HTMLIonInputElement>(null)
const calculateBMi =()=>{
  const enteredWeight =  weightInputRef.current!.value
  const enteredHeight = heightInputRef.current!.value

if(!enteredHeight || !enteredWeight || +enteredHeight<=0 || +enteredWeight<=0){
  setError('Please entered valid number')
  return 
}
const weightConversionFactor = calcUnits==='ftlbs'?2.2:1
const heightConversionFactor = calcUnits==='ftlbs'?3.28:1
const weight =  +enteredWeight / weightConversionFactor
const height = +enteredHeight / heightConversionFactor

  const bmi = weight / (height * height)
  setCalculatedBmi(bmi)
  
}
const reset=()=>{
  weightInputRef.current!.value=''
  heightInputRef.current!.value=''

}

const  clearError =()=>{
setError('')
}

const selectCalcUnitHandler =(selectedVal:'mkg'|'ftlbs')=>{
  setCalcUnits(selectedVal)

}
return (
  <>
  <IonAlert isOpen={!!error}
  message={error}
  buttons={[{text:"Okay",handler:clearError}]}
  ></IonAlert>
  <IonApp>
  <IonHeader>
    <IonToolbar color='primary'>
      <IonTitle>BMI Calculator</IonTitle>
    </IonToolbar>
  </IonHeader>
  <IonContent className="ion-padding">
    <IonGrid>
      <IonRow>
        <IonCol>
          <InputControl selectedVal={calcUnits} onSelectVal={selectCalcUnitHandler}/>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonItem>
            <IonLabel position="floating">
              Your Height ({calcUnits ==='mkg'?'meters':'feet'})
             </IonLabel>
            <IonInput type ="number"ref={heightInputRef}></IonInput>
          </IonItem>
          
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
        <IonItem>
            <IonLabel position="floating">
              Your Weight ({calcUnits==='mkg'?'kg':'lbs'})
             </IonLabel>
            <IonInput type ="number" ref={weightInputRef} ></IonInput>
          </IonItem>
        </IonCol>
      </IonRow>
      <BmiControl  onCalculate ={calculateBMi} onReset={reset}/>
      
      {calculatedBmi && <BmiResult result={calculatedBmi}/> }
    </IonGrid>
  </IonContent>
    
  </IonApp>
  </>
)
};

export default App;
