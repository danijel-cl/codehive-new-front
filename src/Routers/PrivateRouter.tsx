import { useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
// import { AccountActivationPage } from '../Pages/AccountActivationPage';
// import { UserDetailPage } from '../Pages/UserDetailPage/UserDetailPage';
// import { DashboardPage } from '../Pages/DashboardPage/DashboardPage';
// import { TaskDetailPage } from '../Pages/TaskDetailPage/TaskDetailPage';
// import { ApplicationDetailPage } from '../Pages/ApplicationDetailPage/ApplicationDetailPage';
// import { AccountUpdatePage } from '../Pages/AccountUpdatePage/AccountUpdatePage';
// import { AccountFinishedListPage } from '../Pages/AccountFinishedListPage/AccountFinishedListPage';
// import { AccountTaskListPage } from '../Pages/AccountTaskListPage/AccountTaskListPage';
// import { AccountStatisticsPage } from '../Pages/AccountStatisticsPage/AccountStatisticsPage';
// import { AccountActiveListPage } from '../Pages/AccountActiveListPage/AccountActiveListPage';
// import { PostFormPage } from '../Pages/PostFormPage/PostFormPage';
// import { HomePage } from '../Pages/HomePage/HomePage';
// import { PostListPage } from '../Pages/PostListPage/PostListPage';
// import { PostDetailPage } from '../Pages/PostDetailPage/PostDetailPage';
// import { CompanyDetailPage } from '../Pages/CompanyDetailPage/CompanyDetailPage';
// import { TaskListPage } from '../Pages/TaskListPage/TaskListPage';
// import { RecoverPasswordPage } from '../Pages/RecoverPassowrdPage';

export const PrivateRouter = () => {
  const [id, setId] = useState(localStorage.getItem('user-id')||null)
  const [company, setCompany] = useState(localStorage.getItem('user-is-company')||null)
  console.log(id, company)
  return (
      <Switch>
        {/* <Route exact path="/" component={HomePage} />
        <Route exact path="/recover-password" component={RecoverPasswordPage} />
        <Route exact path="/account-activation" component={AccountActivationPage} />
        <Route exact path="/posts" component={PostListPage} />
        <Route exact path="/posts/create" component={PostFormPage} />
        <Route exact path="/posts/:id" component={PostDetailPage} />
        <Route exact path="/companies/:id" component={CompanyDetailPage} />
        <Route exact path="/posts/:id/tasks/" component={TaskListPage} />
        <Route exact path="/users/:id" component={UserDetailPage} />
        <Route exact path="/posts/update/:id" component={PostFormPage} />
        {company==="true" && <Route exact path={`/companies/${id}/dashboard`} component={DashboardPage} />}
        <Route exact path="/posts/:id/tasks/:id" component={TaskDetailPage} />
        <Route exact path="/application-detail" component={ApplicationDetailPage} />
        {company!=="true" && <Route exact path={`/users/${id}/account/active`} component={AccountActiveListPage} />}
        {company!=="true" && <Route exact path={`/users/${id}/account/finished`} component={AccountFinishedListPage} />}
        {company!=="true" && <Route exact path={`/users/${id}/account/statistics`} component={AccountStatisticsPage} />}
        {company!=="true" && <Route exact path={`/users/${id}/account/tasks`} component={AccountTaskListPage} />}
        {company!=="true" && <Route exact path={`/users/${id}/account/update`} component={AccountUpdatePage} />} */}
        <Redirect from="*" to="/" />
      </Switch>
  );
};
