import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,FlatList,SafeAreaView } from 'react-native';
const DATA = [
  {
    id: '1',
    sender:'Vợ yêu',
    message: 'Anh ơi, tối nay anh về sớm nhé!',
    isRead: false,
    timeSend:'10:30 AM',
  },
  {
    id: '2',
    sender:'Bố',
    message: 'Nhớ mua đồ ăn về nhé con!',
    isRead: true,
    timeSend:'9:00 AM',
  },
  {
    id: '3',
    sender:'Sếp',
    message: 'Cuối tuần này họp online lúc 10h sáng.',
    isRead: false,
    timeSend:'8:30 AM',
  },
  {
    id: '4',
    sender:'Bạn thân',
    message: 'Cuối tuần đi chơi không?',
    isRead: true, 
    timeSend:'Yesterday',
  },
  {
    id: '5',
    sender:'Cô giáo',
    message: 'Nhớ nộp bài tập trước thứ 6 nhé!',
    isRead: true,
    timeSend:'Yesterday',
  },
  {
    id: '6',
    sender:'Anh trai',
    message: 'Gửi em mấy cuốn sách mới mua.',
    isRead: false,
    timeSend:'2 days ago',
  },
];
export default function App() {
  // hàm render từng item
  const renderItem = ({ item }) => (
      <View style={[styles.itemContainer, item.isRead==false ? {backgroundColor:'#d1e7dd'} : {backgroundColor:'#f8f9fa'}]}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={[styles.senderName, item.isRead==false ? {fontWeight:'bold'} : {fontWeight:'normal'}]}>{item.sender}</Text>
          <Text style={[styles.timeSend, item.isRead==false ? {fontWeight:'bold'} : {fontWeight:'normal'}]}>{item.timeSend}</Text>
        </View>

        <Text style={[styles.messageText, item.isRead==false ? {fontWeight:'bold'} : {fontWeight:'normal'}]}>{item.message}</Text>

    </View>
  );
  //1. giao diện chính
  return(
    <SafeAreaView style={{flex:1}}>
      <View style={styles.HeaderTinNhan}>
        <Text style={styles.HeaderTinNhanText}>Tin nhắn</Text>
      </View>
      <FlatList 
      data={DATA} 
      renderItem={renderItem}
      keyExtractor={item=>item.id}></FlatList>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  itemContainer:{
    padding:10,
    borderBottomWidth:1,
    borderBottomColor:'#ccc',
  },
  senderName:{
    fontSize:16,
    marginBottom:5,
  },
  messageText:{
    fontSize:14,
  },
  boldText:{
    fontWeight:'bold',
    color:'black',
  },
  HeaderTinNhan:{
    height:60,
    backgroundColor:'#0d6efd',
    justifyContent:'center',
    alignItems:'center',
    marginTop:30,
  },
  HeaderTinNhanText:{
    color:'white',
    fontSize:20,
    fontWeight:'bold',
  },
  timeSend:{
    fontSize:12,
    color:'gray',
  },
});
