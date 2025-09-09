"use client";

// Minimal toast store for daisyUI alerts
import * as React from "react";

type ToastVariant = "success" | "error" | "info" | "warning";

type ToastProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  variant?: ToastVariant;
  title?: React.ReactNode;
  description?: React.ReactNode;
  duration?: number; // milliseconds to auto-dismiss
};

type ToasterToast = ToastProps & { id: string };

const TOAST_LIMIT = 1;
const DEFAULT_TOAST_DURATION = 2000; // auto-dismiss default
const TOAST_REMOVE_DELAY = 300; // cleanup after dismiss

const ADD = "ADD_TOAST" as const;
const UPDATE = "UPDATE_TOAST" as const;
const DISMISS = "DISMISS_TOAST" as const;
const REMOVE = "REMOVE_TOAST" as const;

type Action =
  | { type: typeof ADD; toast: ToasterToast }
  | { type: typeof UPDATE; toast: Partial<ToasterToast> & { id: string } }
  | { type: typeof DISMISS; toastId?: string }
  | { type: typeof REMOVE; toastId?: string };

type State = { toasts: ToasterToast[] };

let idCounter = 0;
const genId = () => `${++idCounter}`;

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) return;
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({ type: REMOVE, toastId });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };
    case UPDATE:
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      };
    case DISMISS: {
      const id = action.toastId;
      if (id) addToRemoveQueue(id);
      else state.toasts.forEach((t) => addToRemoveQueue(t.id));
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          id === undefined || t.id === id ? { ...t, open: false } : t
        ),
      };
    }
    case REMOVE:
      if (action.toastId === undefined) return { ...state, toasts: [] };
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
  }
};

const listeners: Array<(s: State) => void> = [];
let memoryState: State = { toasts: [] };

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((l) => l(memoryState));
}

type ToastInput = Omit<ToasterToast, "id">;

function toast(props: ToastInput) {
  const id = genId();
  const dismiss = () => dispatch({ type: DISMISS, toastId: id });
  const update = (updateProps: Partial<ToasterToast>) =>
    dispatch({ type: UPDATE, toast: { id, ...updateProps } });
  dispatch({
    type: ADD,
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  // Schedule auto-dismiss based on provided duration or default
  const autoDuration = props.duration ?? DEFAULT_TOAST_DURATION;
  if (autoDuration > 0) {
    setTimeout(() => {
      dismiss();
    }, autoDuration);
  }
  return { id, dismiss, update };
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState);
  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const i = listeners.indexOf(setState);
      if (i > -1) listeners.splice(i, 1);
    };
  }, [state]);
  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: DISMISS, toastId }),
  };
}

export { useToast, toast };
