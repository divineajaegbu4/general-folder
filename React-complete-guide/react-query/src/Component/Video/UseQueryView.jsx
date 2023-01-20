import axios from "axios";
import React from "react";
import { queryCache, useQuery } from "react-query";

function UseQueryView() {
  useQuery("posts", () => axios.get("/api/posts").then((res) => res.data),{
    onSuccess: data=>{
        data.forEach(post=>{
            queryCache.setQueryData(["posts", post.id], post, {
                staleTime: 5000
            })
        })
    }
  })
}

export default UseQueryView;
