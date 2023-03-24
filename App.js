import { FlatList, StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native';

const generateDaysList = () => {
  let days = [];
  for (let i = 1; i <= 31; i++) {
    days.push(i);
  }
  return days;
};

const numColumns = 5;

const App = () => {
  const days = generateDaysList();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.daysWrapper}>
        <FlatList
          data={days}
          renderItem={({ item }) => {
            return (
              <View style={styles.day}>
                <Text style={{ fontSize: 20 }}>{item}</Text>
              </View>
            );
          }}
          keyExtractor={item => `days-list-${item}`}
          numColumns={numColumns}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  daysWrapper: {
    padding: 20
  },
  day: {
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    height: Dimensions.get("window").width / numColumns,
    backgroundColor: "#DB7093",
    marginHorizontal: 5,
    borderRadius: 10
  }
});

export default App;
