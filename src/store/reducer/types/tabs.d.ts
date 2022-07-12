
interface ITabsInitialState {
        activeTab: number
}

interface ITabsPayload {
        activeTab: number
}

interface ITabsRootState {
        tabs: {
                activeTab: number
        }
}

export { ITabsInitialState, ITabsPayload, ITabsRootState }