//as we have many pages so we dont want to import them one by one
//so we will use index.ts file to import all the pages and export them

export { default as Home } from "./Home";
export { default as Explore } from "./Explore";
export { default as Saved } from "./Saved";
export { default as CreatePost } from "./CreatePost";
export { default as Profile } from "./Profile";
export { default as UpdateProfile } from "./UpdateProfile";
export { default as EditPost } from "./EditPost";
export { default as PostDetails } from "./PostDetails";
export { default as LikedPosts } from "./LikedPosts";
export { default as AllUsers } from "./AllUsers";