import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";

// 🔹 Create a typed `useSelector` hook
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// 🔹 Create a typed `useDispatch` hook
export const useAppDispatch = () => useDispatch<AppDispatch>();
