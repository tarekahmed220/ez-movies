import { images } from "@/constants/images";
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";

interface Props {
  focused: boolean;
  icon: any;
  text: string;
}
const TabIcon = ({ focused, icon, text }: Props) => {
  if (!focused) {
    return (
      <View className="size-full justify-center items-center mt-4 rounded-full">
        <Image source={icon} tintColor={"#A8B5DB"} className="size-5" />
      </View>
    );
  }

  return (
    <>
      <ImageBackground
        source={images.highlight}
        className="flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
      >
        <Image source={icon} tintColor={"#151312"} className="size-5" />
        <Text className=" font-semibold text-secondary ml-2 text-base">
          {text}
        </Text>
      </ImageBackground>
    </>
  );
};

export default TabIcon;
