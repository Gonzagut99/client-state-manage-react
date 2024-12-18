import { useState } from "react"

type StateMachineConfig<StateType, StepNames extends string> = {
    initial: StepNames
    steps: {
        [key in StepNames]: {
            // on: {
            //     [key: string]: string
            // }
            canAdvance: (state: StateType) => boolean
        }
    }
    views: {
        [key in StepNames]: React.ComponentType<
            {
                state: StateType
                setState: React.Dispatch<React.SetStateAction<StateType>>
            }
        >
    }
}

type WizardState = {
    name:string
    age:number
}
type StepNames = 'step1' | 'step2' | 'confirmation'

const stateMachineConfig:StateMachineConfig<WizardState, StepNames> = {
    initial: 'step1',
    steps: {
        step1: {
            canAdvance: (state) => !!state.name
        },
        step2: {
            canAdvance: (state) => state.age > 0
        },
        confirmation: {
            canAdvance: () => true
        
        }
    },
    views: {
        step1: ({ state, setState }) => <div>
            <input 
                type="text" 
                value={state.name} 
                onChange={(e) => setState((prev)=>({...prev, name:e.target.value}))}
                placeholder="Full Name"
            />
        </div>,
        step2: ({ state, setState }) => <div>
            <input 
                type="number" 
                value={state.age} 
                onChange={(e) => setState((prev)=>({...prev, age:parseInt(e.target.value)}))}
                placeholder="Age"
            />
        </div>,
        confirmation: ({ state }) => <div>
            <p>Name: {state.name}</p>
            <p>Age: {state.age} years old</p>
        </div>
    }
}

export const StateMachine = () => {
    const [wizardState, setWizardState] = useState<WizardState>({name:'', age:0})
    const [step, setStep] = useState<StepNames>(stateMachineConfig.initial)

    const getStepView = <T, V extends string>(
        config:StateMachineConfig<T, V>, 
        stepName:V
    ):React.ComponentType<{
        state: T,
        setState: React.Dispatch<React.SetStateAction<T>>
    }>=> config.views[stepName]

    const StepComponent = getStepView(stateMachineConfig, step)

    const handleNextStep = () => {
        const canAdvance =  stateMachineConfig.steps[step].canAdvance(wizardState)
        if(canAdvance){
            setStep((prev) => {
                switch(prev){
                    case 'step1':
                        return 'step2'
                    case 'step2':
                        return 'confirmation'
                    default:
                        return prev
                }
            })
        } else {
            alert('Please fill all the fields')
        }
    }
  return (
    <section>
        <h1>
            ✨ Wizard State Machine ✨
        </h1>
        <StepComponent state={wizardState} setState={setWizardState}></StepComponent>
        {
            step !== 'confirmation' && (
                <button onClick={handleNextStep}>
                    Next
                </button>
            )
        }
    </section>
  )
}
