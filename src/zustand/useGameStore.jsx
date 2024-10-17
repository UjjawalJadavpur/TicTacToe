import { create } from 'zustand';

const useGameStore = create((set) => ({
  gameTurns: [],

  addTurn: (newTurn) => set((state) => ({
    gameTurns: [newTurn, ...state.gameTurns]
  })),

  resetTurns: () => set({ gameTurns: [] })
}));

export default useGameStore;
