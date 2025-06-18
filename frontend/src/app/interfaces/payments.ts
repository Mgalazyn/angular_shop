export interface CaptureOrderRequest {
  orderID: string;
}

export interface CreateOrderRequest {
  amount: number;
  currency?: string;
  items: [];
}

export interface PaymentOrder {
  id: string;
  amount: number;
  currency: string;
  items: [];
  status: string;
  createdAt: string;
  capturedAt?: string;
}

export interface CreateOrderResponse {
  orderID: string;
}