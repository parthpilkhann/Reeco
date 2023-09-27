import { Badge } from "@mantine/core";

export interface ProductDataItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  quantity: number;
  reason: string;
  total: number;
  status: string;
}

export function getStatusJsx(status: string) {
  let color;
  if (status === "approved") color = "green";
  else if (status === "missing") color = "red";
  else if (status === "urgentlyMissing") color = "rgb(122, 7, 7)";
  else color = "rgb(161, 10, 10)";
  const badge = <Badge color={color}>{status}</Badge>;
  return badge;
}

export const data: ProductDataItem[] = [
  {
    id: "1",
    name: "Lorem ipsum dolor sit ",
    brand: "amet consectetur adi",
    price: 40,
    quantity: 23,
    reason: "quantity",
    total: 99,
    status: "approved",
  },
  {
    id: "2",
    name: "Lorem ipsum dolor sit ",
    brand: "amet consectetur adi",
    price: 40,
    quantity: 23,
    reason: "quantity",
    total: 99,
    status: "missing",
  },
  {
    id: "3",
    name: "Lorem ipsum dolor sit ",
    brand: "amet consectetur adi",
    price: 40,
    quantity: 23,
    reason: "quantity",
    total: 99,
    status: "approved",
  },
  {
    id: "4",
    name: "Lorem ipsum dolor sit ",
    brand: "amet consectetur adi",
    price: 40,
    quantity: 23,
    reason: "quantity",
    total: 99,
    status: "urgentlyMissing",
  },
  {
    id: "5",
    name: "Lorem ipsum dolor sit ",
    brand: "amet consectetur adi",
    price: 40,
    quantity: 23,
    reason: "quantity",
    total: 99,
    status: "approved",
  },
  {
    id: "6",
    name: "Lorem ipsum dolor sit ",
    brand: "amet consectetur adi",
    price: 40,
    quantity: 23,
    reason: "quantity",
    total: 99,
    status: "urgentlyMissing",
  },
  {
    id: "7",
    name: "Lorem ipsum dolor sit ",
    brand: "amet consectetur adi",
    price: 40,
    quantity: 23,
    reason: "quantity",
    total: 99,
    status: "urgentlyMissing",
  },
  {
    id: "8",
    name: "Lorem ipsum dolor sit ",
    brand: "amet consectetur adi",
    price: 40,
    quantity: 23,
    reason: "quantity",
    total: 99,
    status: "urgentlyMissing",
  },
  {
    id: "9",
    name: "Lorem ipsum dolor sit ",
    brand: "amet consectetur adi",
    price: 40,
    quantity: 23,
    reason: "quantity",
    total: 99,
    status: "approved",
  },
  {
    id: "10",
    name: "Lorem ipsum dolor sit ",
    brand: "amet consectetur adi",
    price: 40,
    quantity: 23,
    reason: "quantity",
    total: 99,
    status: "urgentlyMissing",
  },
  {
    id: "11",
    name: "Lorem ipsum dolor sit ",
    brand: "amet consectetur adi",
    price: 40,
    quantity: 23,
    reason: "quantity",
    total: 99,
    status: "approved",
  },
  {
    id: "12",
    name: "Lorem ipsum dolor sit ",
    brand: "amet consectetur adi",
    price: 40,
    quantity: 23,
    reason: "quantity",
    total: 99,
    status: "urgentlyMissing",
  },
  {
    id: "13",
    name: "Lorem ipsum dolor sit ",
    brand: "amet consectetur adi",
    price: 40,
    quantity: 23,
    reason: "quantity",
    total: 99,
    status: "missing",
  },
  {
    id: "14",
    name: "Lorem ipsum dolor sit ",
    brand: "amet consectetur adi",
    price: 40,
    quantity: 23,
    reason: "quantity",
    total: 99,
    status: "approved",
  },
  {
    id: "15",
    name: "Lorem ipsum dolor sit ",
    brand: "amet consectetur adi",
    price: 40,
    quantity: 23,
    reason: "quantity",
    total: 99,
    status: "approved",
  },
  {
    id: "16",
    name: "Lorem ipsum dolor sit ",
    brand: "amet consectetur adi",
    price: 40,
    quantity: 23,
    reason: "quantity",
    total: 99,
    status: "missing",
  },
  {
    id: "17",
    name: "Lorem ipsum dolor sit ",
    brand: "amet consectetur adi",
    price: 40,
    quantity: 23,
    reason: "quantity",
    total: 99,
    status: "urgentlyMissing",
  },
  {
    id: "18",
    name: "Lorem ipsum dolor sit ",
    brand: "amet consectetur adi",
    price: 40,
    quantity: 23,
    reason: "quantity",
    total: 99,
    status: "urgentlyMissing",
  },
];
