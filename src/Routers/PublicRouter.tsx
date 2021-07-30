import { Redirect, Route, Switch } from 'react-router-dom';
// import { AccountActivationPage } from '../Pages/AccountActivationPage';
// import { HomePage } from '../Pages/HomePage/HomePage';
// import { PostListPage } from '../Pages/PostListPage/PostListPage';
// import { PostDetailPage } from '../Pages/PostDetailPage/PostDetailPage';
// import { CompanyDetailPage } from '../Pages/CompanyDetailPage/CompanyDetailPage';
// import { TaskListPage } from '../Pages/TaskListPage/TaskListPage';
// import { RecoverPasswordPage } from '../Pages/RecoverPassowrdPage';
export const PublicRouter = () => {
  return (
      <Switch>
        {/* <Route exact path="/" component={HomePage} />
        <Route exact path="/recover-password" component={RecoverPasswordPage} />
        <Route exact path="/account-activation" component={AccountActivationPage} />
        <Route exact path="/posts" component={PostListPage} />
        <Route exact path="/posts/:id" component={PostDetailPage} />
        <Route exact path="/companies/:id" component={CompanyDetailPage} />
        <Route exact path="/posts/:id/tasks/" component={TaskListPage} /> */}
        <Redirect from="*" to="/" />
      </Switch>
  );
};
