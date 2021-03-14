import { useDimensions } from "@react-native-community/hooks";
import React, { useState, useRef, FunctionComponent } from "react";
import { View, Alert, StyleSheet, Text } from "react-native";
import YoutubePlayer, { YoutubeIframeRef } from "react-native-youtube-iframe";
import { colors } from "../../shared/colors";

export const Player: FunctionComponent<{ id: string; title: string }> = ({
  id,
  title,
}) => {
  const { window } = useDimensions();
  const [playing, setPlaying] = useState(false);
  const controlRef: React.MutableRefObject<YoutubeIframeRef | null> = useRef<YoutubeIframeRef | null>(
    null
  );

  const onStateChange = (state: String) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
    if (state !== "playing") {
      setPlaying(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <YoutubePlayer
        height={window.width / 2}
        ref={controlRef}
        play={playing}
        videoId={id}
        onChangeState={(event: String) => onStateChange(event)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    backgroundColor: colors.blue,
    padding: 10,
    margin: 8,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    color: colors.black,
    fontWeight: "700",
    paddingBottom: 10,
  },
});
