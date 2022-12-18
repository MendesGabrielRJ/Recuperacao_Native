import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./src/Routes/stack";
import { IdProvider } from "./src/context";
import "react-native-gesture-handler";
export default function App() {
  return (
    <>
    <IdProvider>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </IdProvider>
    </>
  );
}
