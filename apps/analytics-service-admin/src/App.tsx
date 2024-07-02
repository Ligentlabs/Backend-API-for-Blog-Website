import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CommentAnalyticsList } from "./commentAnalytics/CommentAnalyticsList";
import { CommentAnalyticsCreate } from "./commentAnalytics/CommentAnalyticsCreate";
import { CommentAnalyticsEdit } from "./commentAnalytics/CommentAnalyticsEdit";
import { CommentAnalyticsShow } from "./commentAnalytics/CommentAnalyticsShow";
import { PostAnalyticsList } from "./postAnalytics/PostAnalyticsList";
import { PostAnalyticsCreate } from "./postAnalytics/PostAnalyticsCreate";
import { PostAnalyticsEdit } from "./postAnalytics/PostAnalyticsEdit";
import { PostAnalyticsShow } from "./postAnalytics/PostAnalyticsShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"AnalyticsService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="CommentAnalytics"
          list={CommentAnalyticsList}
          edit={CommentAnalyticsEdit}
          create={CommentAnalyticsCreate}
          show={CommentAnalyticsShow}
        />
        <Resource
          name="PostAnalytics"
          list={PostAnalyticsList}
          edit={PostAnalyticsEdit}
          create={PostAnalyticsCreate}
          show={PostAnalyticsShow}
        />
      </Admin>
    </div>
  );
};

export default App;
