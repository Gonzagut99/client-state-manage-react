import {  assign, createMachine, } from "xstate";
import { useMachine } from "@xstate/react";

interface WizardContext {
    name: string;
    age: number;
}

type WizardEvent =
    | { type: 'SET_NAME'; name: string }
    | { type: 'SET_AGE'; age: number }
    | { type: 'NEXT' }
    | { type: 'PREVIOUS' };

const wizardMachine = createMachine({
        id: 'wizard',
        initial: 'step1',
        context: {
            name: '',
            age: 0
        },
        types:{
            events: {} as WizardEvent,
            context: {} as WizardContext
        },
        states: {
            step1: {
                on: {
                    SET_NAME: {
                        actions: assign({
                            name: ({event}) => event.name
                        })
                    },
                    NEXT: {
                        target: 'step2',
                        guard: (context) => {
                            return context.context.name.trim().length > 0;
                        }
                    }
                }
            },
            step2: {
                on: {
                    SET_AGE: {
                        actions: assign({
                            age: ({event}) => event.age
                        })
                    },
                    NEXT: {
                        target: 'confirmation',
                        guard: (context) => {
                            return context.context.age > 0;
                        }
                    },
                    PREVIOUS: 'step1'
                }
            },
            confirmation: {
                type: 'final',
                on: {
                    PREVIOUS: 'step2'
                }
            }
        }
    });

export const XStateMachine = () => {
    const [state, send] = useMachine(wizardMachine);

    const { name, age } = state.context;
  
    return (
      <section>
        <h1>
            ✨ Wizard State Machine ✨
        </h1>
        {state.matches('step1') && (
          <>
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => send({ type: 'SET_NAME', name: e.target.value })}
                  placeholder="Complete name"
                />
              
              </div>
              <button onClick={() => send({type:"NEXT"})}>Next</button>
          </>
        )}
        {state.matches('step2') && (
          <>
              <div>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => send({ type: 'SET_AGE', age: parseInt(e.target.value) })}
                  placeholder="Edad"
                />
                
              </div>
              <button onClick={() => send({ type: "PREVIOUS" })}>Previous</button>
                <button onClick={() => send({ type: "NEXT"})}>Next</button>
          </>
        )}
        {state.matches('confirmation') && (
          <>
              <div>
                <p>Name: {name}</p>
                <p>Age: {age} years old</p>                
              </div>
              {/* <button onClick={() => send({ type: "PREVIOUS" })}>Previous</button> */}
          </>
        )}
      </section>
    );
  };

