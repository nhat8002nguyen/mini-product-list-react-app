import React, { createContext, Dispatch, ReactNode, useReducer } from "react"

export const dashboardContext = createContext<{
  ideas: string[]
}>({
  ideas: [],
})

export const dashboardDispatchContext = createContext<{
  ideasDispatch: Dispatch<IdeasReducerAction>
}>({
  ideasDispatch: () => { },
})

const DashboardContextProvider = dashboardContext.Provider
const DashboardDispatchContextProvider = dashboardDispatchContext.Provider


export const DashboardContextAllProvider: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const [ideas, dispatch] = useReducer(ideasReducer, [])

  return (
    <DashboardContextProvider value={{ ideas }}>
      <DashboardDispatchContextProvider value={{ ideasDispatch: dispatch }} >
        {children}
      </DashboardDispatchContextProvider>
    </ DashboardContextProvider >
  )
}

export interface IdeasReducerAction {
  type: "replace" | "default",
  payload: {
    ideas: string[]
  }
}

const ideasReducer = (ideas: string[], action: IdeasReducerAction) => {
  switch (action.type) {
    case "replace":
      return action.payload.ideas
    case "default":
      return ideas
  }
}