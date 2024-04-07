export type TStage = {
    currentStage: {
        stageId: number
        duration?: number
    }
}

// export const StageContext = createContext<TStage>({ currentStage: { stageId: 0 } })

// export const StageContextProvider = ({ children }: { children: ReactNode }) => (

//     <StageContext.Provider value={Х}>{children}</StageContext.Provider>
// )
