import React from 'react';
import { ListRenderItemInfo, StyleSheet } from 'react-native';
import { List } from '@ui-kitten/components';
import { ItemMenuCard } from '../../components/item-menu-card.component';
import { ExerciseCategoryList } from './extra/data';

export const TrainingCategoryList = ({ route, navigation }): React.ReactElement => {
  const exercises: ExerciseCategoryList[] = [
    ExerciseCategoryList.Peitoral(navigation),
    ExerciseCategoryList.Dorsais(navigation),
    ExerciseCategoryList.Deltoides(navigation),
    ExerciseCategoryList.Trapezio(navigation),
    ExerciseCategoryList.Triceps(navigation),
    ExerciseCategoryList.Biceps(navigation),
    ExerciseCategoryList.Coxas(navigation),
    ExerciseCategoryList.Gluteos(navigation),
    ExerciseCategoryList.Panturrilhas(navigation),
    ExerciseCategoryList.ACL(navigation),
  ];

  const displayTrainings: ExerciseCategoryList[] = exercises;

  const renderVerticalTrainingItem = (info: ListRenderItemInfo<ExerciseCategoryList>): React.ReactElement => (
    <ItemMenuCard
      style={styles.verticalItem}
      item={info.item}
      onCardPress={info.item.navigation}
    />
  );

  return (
    <List
      contentContainerStyle={styles.list}
      data={displayTrainings}
      renderItem={renderVerticalTrainingItem}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingVertical: 24
  },
  headerTitle: {
    marginHorizontal: 16,
  },
  horizontalList: {
    marginVertical: 16,
    paddingHorizontal: 8,
  },
  verticalItem: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  horizontalItem: {
    width: 256,
    marginHorizontal: 8,
  },
});

export default TrainingCategoryList;


// import React, { useState } from "react";
// import "./App.css";
// import * as XLSX from "xlsx";
// import { Button } from "react-native";
// import { Input } from "@ui-kitten/components";

// class TrainingCategoryList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//     this.state = {
//       file: "",
//     };
//   }

//   handleClick(e) {
//     this.refs.fileUploader.click();
//   }

//   filePathset(e) {
//     e.stopPropagation();
//     e.preventDefault();
//     var file = e.target.files[0];
//     console.log(file);
//     this.setState({ file });

//     console.log(this.state.file);
//   }

//   readFile() {
//     var f = this.state.file;
//     var name = f.name;
//     const reader = new FileReader();
//     reader.onload = (evt) => {
//       // evt = on_file_select event
//       /* Parse data */
//       const bstr = evt.target.result;
//       const wb = XLSX.read(bstr, { type: "binary" });
//       /* Get first worksheet */
//       const wsname = wb.SheetNames[0];
//       const ws = wb.Sheets[wsname];
//       /* Convert array of arrays */
//       const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
//       /* Update state */
//       console.log("Data>>>" + data);// shows that excel data is read
//       console.log(this.convertToJson(data)); // shows data in json format
//     };
//     reader.readAsBinaryString(f);
//   }

//   convertToJson(csv) {
//     var lines = csv.split("\n");

//     var result = [];

//     var headers = lines[0].split(",");

//     for (var i = 1; i < lines.length; i++) {
//       var obj = {};
//       var currentline = lines[i].split(",");

//       for (var j = 0; j < headers.length; j++) {
//         obj[headers[j]] = currentline[j];
//       }

//       result.push(obj);
//     }

//     //return result; //JavaScript object
//     return JSON.stringify(result); //JSON
//   }

//   render() {
//     return (
//       <>
//         <Input
//           key="file"
//           ref="fileUploader"
//           onChange={this.filePathset.bind(this)}
//         />
//         <Button
//           title="importar"
//          onPress={() => {
//             this.readFile();
//           }}
//         >
//           Read File
//         </Button>
//       </>
//     );
//   }
// }

// export default TrainingCategoryList;
