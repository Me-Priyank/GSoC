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
