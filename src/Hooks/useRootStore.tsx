import { useContext } from "react";
import RootStore from "../services/RootStore";

const useRootStore = () => useContext(RootStore)

export default useRootStore;