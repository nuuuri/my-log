import { create } from 'zustand';

interface SidebarStoreType {
  isOpen: boolean;
  actions: {
    openSidebar: () => void;
    closeSidebar: () => void;
  };
}

const useSidebarStore = create<SidebarStoreType>((set) => ({
  isOpen: false,
  actions: {
    openSidebar: () => set({ isOpen: true }),
    closeSidebar: () => set({ isOpen: false }),
  },
}));

export const useSidebarIsOpen = () => useSidebarStore((state) => state.isOpen);
export const useSidebarActions = () =>
  useSidebarStore((state) => state.actions);
