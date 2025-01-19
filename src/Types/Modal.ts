export type ModalParamList = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  onTouchFilters: any;
  currentActiveFilter: any;
};

export interface ModalComponentsProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  onTouchFilters: (action: string) => void;
  currentActiveFilter: number;
}

export interface Filter {
  id: number;
  label: string;
  action: string;
}
