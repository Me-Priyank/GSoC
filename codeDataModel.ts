interface FSMDefinition {
    name: string
    type: 'MOORE' | 'MEALY' | 'DFA' | 'NFA'
    states: FSMState[]
    transitions: FSMTransition[]
    inputs: string[]          // Signal names: ['X', 'Y']
    outputs: string[]         // Signal names: ['Z']
    initialState: string      // State ID
    encoding: 'BINARY' | 'GRAY' | 'ONE_HOT' | 'CUSTOM'
    customEncoding?: Record<string, string>  // State ID → binary code
}

interface FSMState {
    id: string
    label: string
    isInitial: boolean
    isFinal: boolean
    position: { x: number; y: number }
    outputs?: Record<string, number>  // Moore outputs: { Z: 1 }
}

interface FSMTransition {
    id: string
    from: string              // State ID
    to: string                // State ID
    inputs: Record<string, number | string>  // { X: 1, Y: 0 }
    outputs?: Record<string, number>         // Mealy outputs
    label?: string
}
