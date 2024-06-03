import { useCallback } from 'react';

export const useFreeSlots = () => {
    return useCallback((maxAllowedMembers: number, totalCurrentMembers: number) => {
        return maxAllowedMembers - totalCurrentMembers;
    }, []);
}

export const useIsFull = () => {
    return useCallback((maxAllowedMembers: number, totalCurrentMembers: number) => {
        return totalCurrentMembers === maxAllowedMembers;
    }, []);
}