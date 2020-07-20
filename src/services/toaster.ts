export type ToastType = "success" | "warning" | "error" | "info";
export type Subscriber = (type: ToastType, content: string) => void;

let subscriber: Subscriber | null = null;

export function subscribe(subscriber_: Subscriber) {
    subscriber = subscriber_;
}

export default function toast(type: ToastType, content: string) {
    if (subscriber === null) throw new Error("toaster is not subscribed");
    subscriber(type, content);
}
