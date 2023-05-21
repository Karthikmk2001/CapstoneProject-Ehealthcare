export interface Imedicine {
  medicineId: number;
  medicineName: string;
  price: number;
  availableQuantity: number;
  image: string;
  categoryId: number;
  medicineAddedDate: Date;
  medicineAdded?: boolean;
}
