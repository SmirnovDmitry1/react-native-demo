import React, {useState}  from 'react';
import {Navbar} from './src/Navbar'
import {AddTodo} from './src/AddTodo'
import {Todo} from './src/Todo'
import { StyleSheet, FlatList, View, ScrollView } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";

export default function App() {
 const [todos, setTodos] = useState([])
 const [doneTodos, setDoneTodos] = useState([])

 const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

 const addTodo = (title) => {
   setTodos(prev => [...prev, {
    id: randomInteger(1, 1000), 
    title,
  }])
 }

 const removeTodo = id => {
    setDoneTodos(prev => [...prev, todos.filter(item => item.id === id)[0]])
    setTodos(prev => prev.filter(item => item.id !== id))
 }

 const unremoveTodo = id => {
  setTodos(prev => [...prev, todos.filter(item => item.id === id)[0]])
  setDoneTodos(prev => prev.filter(item => item.id !== id))
 }

 const TodoActive = () => {
   return (
    <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />

        <FlatList 
          data={todos}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <Todo todo={item} onRemove={removeTodo} />
          )}
          contentContainerStyle={{
            flexGrow: 1,
            marginVertival: 20,
          }}
        />
      </View>
   )
 }

 const TodoDone = () => {
  return (
   <View style={styles.container}>

       <FlatList 
         data={doneTodos}
         keyExtractor={item => item.id.toString()}
         renderItem={({item}) => (
           <Todo todo={item} />
         )}
         contentContainerStyle={{
           flexGrow: 1,
           
         }}
       />
     </View>
  )
}
 
  return (
    <NativeRouter>
    <View>
      <Navbar />
      
      <Route exact path="/" component={TodoActive} />
      <Route exact path="/todosDone" component={TodoDone} />

    </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 30,
  }
});
