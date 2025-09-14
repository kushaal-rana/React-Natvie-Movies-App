import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import { Image, ImageBackground, Text, View } from "react-native";

export default function Layout() {
  const TabIcon = ({
    focused,
    icon,
    title,
  }: {
    focused: boolean;
    icon: any;
    title: string;
  }) => {
    if (focused) {
      return (
        <View className="w-full h-full justify-center items-center">
          <ImageBackground
            source={images.highlight}
            className="flex flex-row min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden px-4"
          >
            <Image source={icon} tintColor="#151312" className="size-5" />
            <Text className="text-secondary text-base font-semibold ml-2">
              {title}
            </Text>
          </ImageBackground>
        </View>
      );
    }
    return (
      <View className="w-full h-full justify-center items-center">
        <View className="min-w-[60px] min-h-[60px] mt-4 justify-center items-center rounded-full">
          <Image source={icon} tintColor="#A8B5DB" className="size-5" />
        </View>
      </View>
    );
  };

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0f0D23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 30,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#221f3d",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Home" />
          ),
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.save} title="Saved" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} title="Search" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.person} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
}
