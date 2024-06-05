import { useSelector, useDispatch } from "react-redux";
import type { RootType, AppDispatch } from "./Store.tsx";


export const useAppSelector = useSelector.withTypes<RootType>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();