# How it all Connects

### (Layer wise connection)

```typescript
// FSM Editor Panel → Circuit Synthesis

// Step 1: Validate
const errors = validateFSM(fsmStore.currentFSM)    // Layer 2
if (errors.length > 0) → show errors, abort

// Step 2: (Optional) Minimize states
const result = minimizeFSM(fsmStore.currentFSM)    // Layer 3

// Step 3: Synthesize
const synthesizer = new FSMSynthesizer(fsmStore.currentFSM)   // Layer 4
const circuitData = synthesizer.synthesize()

// Internally: encodeStates() → generateTruthTable() → extractNextStateLogic() → extractOutputLogic()

// Step 4: Generate circuit
const projectData = generateCircuitVerseJSON(fsmStore.currentFSM)  //Layer 5

// Internally: parse expressions → place gates → wire with orthogonal routing → JSON output

// Step 5: Load into simulator
const scope = newCircuit(scopeName)
loadScope(scope, projectData.scopes[0]) // Circuit appears in simulator

// Step 6: (Optional) Export Verilog
const verilog = generateVerilogFromFSM(fsmStore.currentFSM)   // Layer 6
```

### Layer 2 - validateFSM() : [Code](https://github.com/Me-Priyank/cv-frontend-vue/blob/Priyank-fsm/src/simulator/src/fsm/fsmValidator.ts#L11-L18)
### Layer 3 - minimizeFSM() : [Code](https://github.com/Me-Priyank/cv-frontend-vue/blob/Priyank-fsm/src/simulator/src/fsm/stateMinimizer.ts#L296-L312)
### Layer 4 - synthesizer function : [Code](https://github.com/Me-Priyank/cv-frontend-vue/blob/Priyank-fsm/src/simulator/src/fsm/circuitGenerator.ts#L649-L680)
### Layer 5 - generateCircuitVerseJSON() : [Code](https://github.com/Me-Priyank/cv-frontend-vue/blob/Priyank-fsm/src/simulator/src/fsm/circuitGenerator.ts#L174-L188)
### Layer 6 - Export Verilog : [Code](https://github.com/Me-Priyank/cv-frontend-vue/blob/Priyank-fsm/src/simulator/src/fsm/fsmSynthesizer.ts@L345-L459)
