import PageLayout from "../../layouts/PageLayout";
import Analysis from "./components/users/Analysis";

import Table from "./components/users/TableComponent";


const Users = () => {
  return (
    <PageLayout>
      <Analysis />
      <Table />
    </PageLayout>
  );
};

export default Users;
