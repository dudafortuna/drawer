import { Drawer} from "expo-router/drawer";
import React from "react";

export default function AppLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Home",
          title: "Bem-Vindo",
        }}
      />
      <Drawer.Screen
        name="telaA" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "telaA",
          title: "telaA",
        }}
      />
      
</Drawer>

  );
}