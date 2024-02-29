import { currentUser } from "@/lib/auth";
import { UserInfo } from "@/components/user-info";

const ServerPage = async () => {
  const user = await currentUser();

  if (user) {
    return <UserInfo label="💻 Server component" user={user} />;
  }
  return <p>You are not logged in</p>;
};

export default ServerPage;
