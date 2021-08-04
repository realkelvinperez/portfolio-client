export const isMobileWindow = (): boolean | null => {
    if(typeof window !== "undefined"){
        return window.innerWidth < 500
    } else {
        return null
    }
}

