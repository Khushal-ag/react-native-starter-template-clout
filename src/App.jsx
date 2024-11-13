import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#1D1F22" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.profileLink}
          onPress={() => Linking.openURL("https://portfolio.khushalagarwal.me")}
        >
          <MaterialIcons
            name="person"
            size={18}
            color="#4C9AFF"
            style={styles.icon}
          />
          <Text style={styles.headerText}>About Me</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {/* Heading */}
        <Text style={styles.heading}>React Native Starter Template</Text>

        {/* Subheading */}
        <Text style={styles.subheading}>
          Build beautiful, cross-platform apps with ease.
        </Text>

        {/* Installation Instructions */}
        <View style={styles.instructionBox}>
          <Text style={styles.instructionText}>
            To get started, run:
            <Text style={styles.code}>
              {" "}
              bunx degit Khushal-ag/react-native-starter-template-clout
              &lt;project-name&gt;
            </Text>
          </Text>
          <TouchableOpacity
            style={styles.copyButton}
            onPress={() => console.log("Copy installation command")}
          >
            <Text style={styles.copyButtonText}>Copy</Text>
          </TouchableOpacity>
        </View>

        {/* Features Section */}
        <View style={styles.features}>
          <Text style={styles.featuresHeading}>Features</Text>
          <Text style={styles.feature}>
            🚀 Easy setup with Expo and NativeWind
          </Text>
          <Text style={styles.feature}>
            💡 Minimalist, responsive UI out of the box
          </Text>
          <Text style={styles.feature}>
            🔧 TypeScript and best practices included
          </Text>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Created with ❤️ by{" "}
          <Text
            style={styles.footerLink}
            onPress={() => Linking.openURL("https://github.com/Khushal-ag")}
          >
            Khushal-ag
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D1F22",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    width: "100%",
    alignItems: "flex-end",
    paddingTop: 10,
    paddingHorizontal: 16,
    marginTop: 10,
  },
  profileLink: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 6,
  },
  headerText: {
    fontSize: 16,
    color: "#4C9AFF", // Accent color for header link
  },
  content: {
    flex: 1,
    width: "100%",
    maxWidth: 600,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4C9AFF", // Light blue for the heading
    textAlign: "center",
    marginBottom: 20,
  },
  subheading: {
    fontSize: 16,
    color: "#A6A6A6", // Light gray for the subheading
    textAlign: "center",
    marginBottom: 40,
  },
  instructionBox: {
    backgroundColor: "#282C34",
    padding: 20,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
    marginBottom: 40,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  instructionText: {
    color: "#D0D3D4",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 12,
  },
  code: {
    fontFamily: "monospace",
    color: "#8AB4F8", // Soft blue for code text
  },
  copyButton: {
    backgroundColor: "#4C9AFF",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    marginTop: 10,
  },
  copyButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  features: {
    marginTop: 20,
    width: "100%",
    paddingHorizontal: 16,
  },
  featuresHeading: {
    fontSize: 18,
    color: "#4C9AFF",
    fontWeight: "600",
    marginBottom: 8,
  },
  feature: {
    fontSize: 14,
    color: "#A6A6A6",
    marginBottom: 4,
  },
  footer: {
    width: "100%",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#3A3D41",
    alignItems: "center",
  },
  footerText: {
    color: "#A6A6A6",
    fontSize: 14,
  },
  footerLink: {
    color: "#4C9AFF",
    fontWeight: "bold",
  },
});
