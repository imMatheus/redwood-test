import { Router, Route, Set } from '@redwoodjs/router'

import CommentsLayout from 'src/layouts/CommentsLayout'
import MainLayout from 'src/layouts/MainLayout'
import PostsLayout from 'src/layouts/PostsLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={CommentsLayout}>
        <Route path="/comments/new" page={CommentNewCommentPage} name="newComment" />
        <Route path="/comments/{id:Int}/edit" page={CommentEditCommentPage} name="editComment" />
        <Route path="/comments/{id:Int}" page={CommentCommentPage} name="comment" />
        <Route path="/comments" page={CommentCommentsPage} name="comments" />
      </Set>
      <Set wrap={PostsLayout}>
        <Route path="/posts/new" page={PostNewPostPage} name="newPost" />
        <Route path="/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
        <Route path="/posts/{id:Int}" page={PostPostPage} name="post" />
        <Route path="/posts" page={PostPostsPage} name="posts" />
      </Set>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />

      <Set wrap={MainLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
