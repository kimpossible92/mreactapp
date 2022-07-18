import React, {useState} from "react";
import MyInput from "./input/MyInput";
import MyButton from "./button/MyButton";
import PostList from "../PostList";
const PostForm = ({create}) =>{
    //const [title] = useState('wewqe')
    const [post,setPost] = useState([
        //{title:'',body:''}
        {id:1,title:'Javascript',body:'Desc'},
        {id:2,title:'Javascript',body:'Desc'},
        {id:3,title:'Javascript',body:'Desc'}
    ])
    const ChangePost = (e)=> {
        e.preventDefault();
        //console.log(title);
        create({
            ...post,id:Date.now()
        })
        setPost({title: '',body: ''})
    }
    return (
        <form>
        <MyInput
            value={post.title}
            onChange={e=>setPost({...post,title: e.target.value})}
            type="text" placeholder="Nazvanie"/>
        <MyInput
            value={post.body}
            onChange={e=>setPost({...post,body:e.target.value})}
            type="text" placeholder="Opisanie"/>
        <MyButton onClick={ChangePost}>Create Post</MyButton>
            <PostList posts={post} title={"PostList"}/>
        </form>
    );
}
export  default PostForm;